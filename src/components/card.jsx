import React from "react";
import PkgIcon from "../images/PkgIcon.png";

export default function Card({ package }) {
  const {
    id,
    status,
    eta,
    parcel_id,
    sender,
    verification_required,
    location_id,
    location_name,
    location_coordinate_latitude,
    location_coordinate_longitude,
    location_status_ok,
    user_phone,
    user_name,
    notes,
    last_updated,
  } = package;
  return (
    <div className="container">
      <h1>
        <span>#{id} </span>
        {user_name}
      </h1>

      <div className="image">
        <img src={PkgIcon} alt="package Icon" />
      </div>

      <p>Status: {status}</p>
      <p>Parcel_id: {parcel_id}</p>
      <p>Sender: {sender}</p>
      <p>ETA: {eta}</p>
      <p>Location: {location_name}</p>
      <p>notes: {notes}</p>
      <p>last updated: {last_updated} </p>
    </div>
  );
}
