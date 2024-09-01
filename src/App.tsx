import { Navbar } from "./components/Navbar/Navbar";
import { MapContainer } from "./pages/Map/Map";
import cn from "./App.module.scss";
import "./theme/light_theme.scss";
import "./theme/dark_theme.scss";

function App() {
    console.log(
        "This application heavily uses the Cesium library and wouldn't be possible without the work done by the many contributors that have contributed. Find more here: https://cesium.com/"
    );

    return (
        // id is used for fullscreen API - not ref'ing bc I'm lazy
        <div className={cn.container} id="app">
            <Navbar />
            <MapContainer />
        </div>
    );
}

export default App;
