import React from "react";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Home, Program, NotFound } from "./pages";
import { Layout } from "./components";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="program" element={<Program />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
