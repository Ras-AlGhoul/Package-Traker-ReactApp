import PackageDescription from "../components/packageDescription";
import React, { useEffect, useState } from "react";

export default function Package(props) {
  const routerID = props.match.params.id;

  const pkg = props.data.filter((i) => i.id == routerID);

  return (
    <div className="package">
      <div className="body-container">
        <h1 className="h">{pkg.status}</h1>
        <hr />
        {pkg.map((i) => (
          <PackageDescription key={i.id} information={i} />
        ))}
      </div>
    </div>
  );
}
