import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
  border: "1px solid gray",
  borderRadius: "5px",
};

const position = {
  lat: 23.810331,
  lng: 90.412521,
};
const onLoad = (marker) => {
  // console.log("marker: ", marker);
};
const Map = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBW89rXOsuKp8-oV-ALkrO0tcg3-tVZ85o">
      <GoogleMap mapContainerStyle={containerStyle} center={position} zoom={10}>
        <Marker onLoad={onLoad} position={position} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
