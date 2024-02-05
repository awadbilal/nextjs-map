"use client";
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Marker } from "@/components";
import { LOCATIONS } from "@/Mock";

// Using Al-salam Coordinates 29.2966° N, 48.0134° E

const Map = () => {
  return (
    <MapContainer
      center={[29.2966, 48.0134]}
      zoom={11}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {LOCATIONS &&
        LOCATIONS?.map((item) => <Marker data={item} key={item?.id} />)}
    </MapContainer>
  );
};

export default Map;
