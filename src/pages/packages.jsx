import React from "react";
import Card from "../components/card";
import Data from "../data/Data.json";

export default function Packages() {
  const CardsArray = Data.map((item) => (
    <Card
      key={item.id}
      status={item.status}
      eta={item.eta}
      sender={item.sender}
      location={item.location_name}
      parcel_id={item.parcel_id}
    />
  ));
  return (
    <div>
      <section className="content">
        <h2 className="h1">Mr.John Doe Packages </h2>
        <div className="grid">{CardsArray}</div>
      </section>
    </div>
  );
}
