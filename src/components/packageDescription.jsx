import React from "react";
export default function PackageDescription({ information }) {
  const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
  console.log("details", information);
  return (
    <article className="package-item">
      <div className="details">
        <img
          className="imgg"
          src={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s+555555(${information.location_coordinate_longitude},${information.location_coordinate_latitude})/${information.location_coordinate_longitude},${information.location_coordinate_latitude},8.71,0/235x235?access_token=${ACCESS_TOKEN}`}
          alt="package icon"
        />
        <div className="text">
          <h3 className="h4">Status: {information.status}</h3>
          <p className="h4">ETA: {information.eta}</p>
          <p className="h4">Sender: {information.sender}</p>
          <p className="h4">Location: {information.location_name}</p>
          <p className="h4">Parcel Id: {information.parcel_id}</p>
          <p className="h4">
            Verification Requiered: {information.verification_required}
          </p>
          <p className="h4">Location Id: {information.location_id}</p>
          <p className="h4">User Phone {information.user_phone}</p>
          <p className="h4">User Name: {information.user_name}</p>
          <p className="h4">
            Notes: {information.notes === null ? "No notes" : information.notes}
          </p>
          <p className="h4">Last Updated: {information.last_updated}</p>
        </div>
      </div>
    </article>
  );
}
