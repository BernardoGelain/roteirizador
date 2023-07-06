import { Header } from "../../components/header/header";
import Map, { NavigationControl, Marker } from "react-map-gl";
import mapboxgl from "mapbox-gl";

export default function Homepage() {
  const token = import.meta.env.VITE_MAPBOX_TOKEN;

  /*   const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    zoom: 10,
    width: "100vw",
    height: "100vh",
    mapboxApiAccessToken: token,
  }); */

  return (
    <>
      <Header />
      <Map
        mapboxAccessToken={token}
        mapLib={mapboxgl}
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14,
        }}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
      <NavigationControl position="top-left" />
      <Marker longitude={16.62662} latitude={49.21255} />
    </>
  );
}
