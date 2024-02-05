"use client";
import { Marker, Popup } from "react-leaflet";

export default function MarkerComponent({ data }) {
  return (
    <Marker position={data?.location}>
      <Popup>
        <h3>{data?.name}</h3>
        <p>{data?.description}</p>
        <a href={data?.link} target="_blank">
          Go There
        </a>
      </Popup>
    </Marker>
  );
}
