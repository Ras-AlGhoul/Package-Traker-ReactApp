import React, { useEffect, useState } from "react";
import PackageDescription from "../components/packageDescription";

export default function Results(props) {
  //const queryParcelId = props.match.params.id
  const pkg = props.data.filter((i) => i.id == props.match.params.id);
  //i.parcel_id == queryParcelId
  console.log("pkg", pkg);
  return (
    <div>
      <hr />
      {pkg.map((i) => (
        <PackageDescription key={i.id} information={i} />
      ))}
      <hr />
    </div>
  );
}
