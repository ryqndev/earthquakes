import { MapContainer } from "./pages/Map/Map";

function App() {
    console.log(
        "This application heavily uses the Cesium library and wouldn't be possible without the work done by the many contributors that have contributed. Find more here: https://cesium.com/"
    );

    return (
        <div
            style={{
                padding: "64px 8px 8px 8px",
                height: "100vh",
                background: "#151515",
                boxSizing: "border-box",
            }}
        >
            <MapContainer />
        </div>
    );
}

export default App;
