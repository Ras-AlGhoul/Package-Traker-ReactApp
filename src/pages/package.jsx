import PackageDescription from "../components/packageDescription";
import Data from "../data/Data.json";
import React from "react";

export default function Package({ match }) {
  const routerID = match.params.id;
  const pckage = Data.find((item) => item.parcel_id === routerID);
  console.log(match.params.id);
  return (
    <div className="package">
      <div className="body-container">
        <h1 className="h">{pckage.status}</h1>

        <hr />

        <PackageDescription information={pckage} />
      </div>
    </div>
  );
}
