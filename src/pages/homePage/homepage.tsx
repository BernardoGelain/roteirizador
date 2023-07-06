import { Header } from "../../components/header/header";
import Map from "react-map-gl";
import { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { ThemeContext } from "../../App";
import { useContext } from "react";
import { Pin } from "./styles";

export default function Homepage() {
  const token = import.meta.env.VITE_MAPBOX_TOKEN;
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Header />
      <Map
        mapboxAccessToken={token}
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5,
        }}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle={
          theme === "light"
            ? "mapbox://styles/mapbox/streets-v9"
            : "mapbox://styles/mapbox/dark-v10"
        }
      >
        <Marker longitude={-100} latitude={40} anchor="bottom">
          <Pin src="/assets/pin.png" />
        </Marker>
      </Map>
    </>
  );
}
