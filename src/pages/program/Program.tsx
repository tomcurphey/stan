import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import jsonData from "../../assets/data/data.json";
import * as S from "./Program.styles";
import * as L from "../../components/layout/Layout.styles";
import { CarouselData } from "../../assets/data/dataTypes";
import { s } from "../../utils/strings";
import { r } from "../../utils/routes";

export const Program: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<CarouselData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const foundItem = jsonData.find((item) => item.id === Number(id));
        if (foundItem) {
          setItem(foundItem);
        } else {
          setError("Item not found");
        }
      } catch (error) {
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Backspace") {
      navigate(r.home.path);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (error) {
    return (
      <S.Container>
        <L.ErrorMessage>{s.errorMessage}</L.ErrorMessage>
      </S.Container>
    );
  }

  const details = item
    ? [item.rating, item.year, item.type, item.genre, item.language]
    : [];

  return (
    <S.Container>
      <S.Left>
        {item ? (
          <S.Image src={item.image} alt={item.title} />
        ) : (
          <S.ImageLoading />
        )}
      </S.Left>
      <S.Right>
        <S.Title $isLoading={loading}>{item?.title}</S.Title>
        <S.Details $isLoading={loading}>
          {details.map((d, idx) => (
            <S.Detail key={idx}>
              <span>{d}</span>
              {idx + 1 !== details.length && <span>|</span>}
            </S.Detail>
          ))}
        </S.Details>
        <S.Description $isLoading={loading}>{item?.description}</S.Description>
      </S.Right>
    </S.Container>
  );
};
