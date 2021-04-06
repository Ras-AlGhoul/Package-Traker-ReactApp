import React from "react";
import Card from "../components/card";

export default function Packages({ data, username }) {
  const CardsArray = data.map((item) => (
    <Card
      key={item.id}
      status={item.status}
      eta={item.eta}
      sender={item.sender}
      location={item.location_name}
      id={item.id}
      parcel_id={item.parcel_id}
    />
  ));
  return (
    <div>
      <section className="content">
        <h3 className="h1">Mr/Mrs. {username} Packages </h3>
        <div className="grid">{CardsArray}</div>
      </section>
    </div>
  );
}
