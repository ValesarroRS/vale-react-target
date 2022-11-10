import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import styles from "./index.module.scss";

const Map = () => {
  const [coords, setCoords] = useState(null);
  const [latitudeState, longitudeState] = coords ?? [];

  const setCurrentCoords = (location) => {
    if (location)
      setCoords([location.coords.latitude, location.coords.longitude]);
  };

  const handleLocationBlocked = (error) => {
    if (error.code === error.PERMISSION_DENIED) {
      setCoords([-33.6003, -69.426086]);
    }
  };

  useEffect(() => {
    if (navigator?.geolocation) {
      navigator.geolocation.getCurrentPosition(
        setCurrentCoords,
        handleLocationBlocked
      );
    }
  }, []);

  console.log(latitudeState, longitudeState);
  return (
    <div className={styles.map}>
      {coords ? (
        <MapContainer
          className={styles.map__container}
          center={[latitudeState, longitudeState]}
          zoom={15}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapContainer>
      ) : (
        <p> Loading . . . </p>
      )}
    </div>
  );
};

export default Map;
