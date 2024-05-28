import React, { useEffect, useState, useRef } from "react";
import * as S from "./Carousel.styles";
import * as L from "../layout/Layout.styles";
import jsonData from "../../assets/data/data.json";
import { CarouselData } from "./types";
import { Item } from "./sections";
import { useNavigate } from "react-router-dom";

export const Carousel = () => {
  const [data, setData] = useState<CarouselData[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // Allow null for no active index
  const [useKeys, setUseKeys] = useState(false);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const itemsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData(jsonData);
      } catch (error) {
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (activeIndex !== null && itemRefs.current[activeIndex]) {
      itemRefs.current[activeIndex]?.focus();
    }
  }, [activeIndex]);

  useEffect(() => {
    if (itemRefs.current[0]) {
      itemRefs.current[0]?.focus();
    }
  }, [loading]);

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    index: number
  ) => {
    if (!data) return;
    if (!useKeys) setUseKeys(true);
    switch (event.key) {
      case "ArrowLeft":
        setActiveIndex(index > 0 ? index - 1 : data.length - 1);
        break;
      case "ArrowRight":
        setActiveIndex(index < data.length - 1 ? index + 1 : 0);
        break;
      case "Enter":
        navigate(`/${data[activeIndex!].id}`);
        break;
      default:
        break;
    }
  };

  const handleItemsBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (
      itemsRef.current &&
      !itemsRef.current.contains(event.relatedTarget as Node)
    ) {
      setActiveIndex(null);
    }
  };

  const handleFocus = () => {
    if (activeIndex === null) {
      setActiveIndex(0);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <S.Container>
        <L.ErrorMessage>{error}</L.ErrorMessage>
      </S.Container>
    );
  }

  return (
    <S.Container ref={itemsRef} onBlur={handleItemsBlur} onFocus={handleFocus}>
      <S.Items>
        {data?.map((d, index) => (
          <Item
            key={d.id}
            data={d}
            isActive={index === activeIndex}
            $useKeys={useKeys}
            onKeyDown={(e) => handleKeyDown(e, index)}
            tabIndex={index === activeIndex ? 0 : -1}
            ref={(el) => (itemRefs.current[index] = el)}
          />
        ))}
      </S.Items>
    </S.Container>
  );
};
