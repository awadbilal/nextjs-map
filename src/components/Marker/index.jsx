"use client";
import { icon } from "leaflet";
import { Marker, Popup, Tooltip } from "react-leaflet";

export default function MarkerComponent({ data }) {
  const ICON = icon({
    iconUrl: "/marker.png",
    iconSize: [32, 32],
  });

  return (
    <Marker position={data?.location} icon={ICON} title={data?.name}>
      <Tooltip direction="top" offset={[0, 0]} opacity={1}>
        {data?.name}
      </Tooltip>
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
