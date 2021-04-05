import React from "react";
import PkgIcon from "../images/PkgIcon.png";
import Data from "../data/Data.json";

export default function Card({ parcel_id, status, eta, sender, location }) {
  return (
    <article className="package-item">
      <a href={`/package/${parcel_id}`}>
        <img className="img" src={PkgIcon} alt="package icon" />
      </a>

      <div className="">
        <h3 className="h4">Status: {status}</h3>
        <p className="h4">ETA: {eta}</p>
        <p className="h4">Sender: {sender}</p>
        <p className="h4">Location: {location}</p>
        <p className="h4">Parcel Id: {parcel_id}</p>
      </div>
    </article>
  );
}
