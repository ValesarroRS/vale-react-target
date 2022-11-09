import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import styles from "./index.module.scss";
import "leaflet/dist/leaflet.css";

const Map = () => {
  return (
    <div className={styles.map}>
      <MapContainer className={styles.map__container} center={[0, 0]} zoom={15}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </div>
  );
};

export default Map;
