import React from "react";
import Card from "../components/card";
import Data from "../data/Data.json";

export default function Packages() {
  const CardsArray = Data.map((item) => (
    <Card key={item.id} information={item} />
  ));
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Content with cards */}
      <section className="container">
        <h1>All mr.John Doe Packages </h1>

        <div className="grid">{CardsArray}</div>
      </section>
    </div>
  );
}
