import React, { useEffect, useState } from "react";
import PackageDescription from "../components/packageDescription";

export default function Results(props) {
  const queryParcelId = props.match.params.id;
  const pkg = props.data.filter((i) => i.parcel_id == queryParcelId);

  console.log("pkg", pkg);
  return (
    <div>
      <hr />
      {pkg === null ? (
        pkg.map((i) => <PackageDescription key={i.id} information={i} />)
      ) : (
        <h3 className="h3">
          Parcel Number doesn't match our records, try again or check your
          parcel id number in the packages page
        </h3>
      )}
    </div>
  );
}
