import { MapContainer } from "./pages/Map/Map";

function App() {
  console.log(
    "This application heavily uses the Cesium library and wouldn't be possible without the work done by the many contributors that have contributed. Find more here: https://cesium.com/"
  );

  return (
    <>
      <MapContainer />
    </>
  );
}

export default App;
