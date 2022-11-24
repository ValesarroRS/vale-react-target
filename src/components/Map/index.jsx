import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import marker from "../../assets/icons/currentLocation.svg";
import "leaflet/dist/leaflet.css";

import styles from "./index.module.scss";

const markerIcon = new Icon({
  iconUrl: marker,
  iconRetinaUrl: marker,
  popupAnchor: [-0, -0],
  iconSize: [53, 69],
});

const Map = () => {
  const [coords, setCoords] = useState(null);
  const [latitudeState, longitudeState] = coords ?? [];
  const DEFAULT_COORDS = [-33.6003, -69.426086];
  const setCurrentCoords = (location) => {
    if (location)
      setCoords([location.coords.latitude, location.coords.longitude]);
  };

  const handleLocationBlocked = (error) => {
    if (error.code === error.PERMISSION_DENIED) {
      setCoords(DEFAULT_COORDS);
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

  return (
    <div className={styles.map}>
      {coords ? (
        <MapContainer
          className={styles.map__container}
          center={[latitudeState, longitudeState]}
          zoom={15}
        >
          <Marker position={[latitudeState, longitudeState]} icon={markerIcon}>
            <Popup> You are here! </Popup>
          </Marker>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapContainer>
      ) : (
        <p> Loading . . . </p>
      )}
    </div>
  );
};

export default Map;
