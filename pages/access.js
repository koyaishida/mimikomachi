import Layout from "../components/layout";
import React from "react";
import Style from "../styles/access.module.css";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const RegularMap = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 35.437573, lng: 136.802758 }}
      defaultOptions={{
        scrollwheel: false,
      }}
    >
      <Marker position={{ lat: 35.437573, lng: 136.802758 }} />
    </GoogleMap>
  ))
);

export default function Access() {
  return (
    <Layout>
      <div>
        <h2>アクセスマップ</h2>
        <p>住所 岐阜県岐阜市日野西３丁目３ー１６</p>
        <p>日野保育園のすぐ近くです！</p>
        <div className={Style.map}>
          <RegularMap
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD6-F61vY8mPw4QP6GGh8VMRWo5AO5XN7w"
            loadingElement={<div style={{ height: "100%" }} />}
            containerElement={<div style={{ height: "400px" }} />}
            mapElement={<div style={{ height: "100%" }} />}
          />
        </div>
      </div>
    </Layout>
  );
}
