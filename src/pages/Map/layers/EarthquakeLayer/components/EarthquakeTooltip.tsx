import { memo } from "react";
import cn from "./EarthquakeTooltip.module.scss";
import { FEATURE_ITEM_TYPE } from "../controllers/useUSGSEarthquakeData";

export const EarthquakeTooltip = memo(function EarthquakeTooltip(
    props: FEATURE_ITEM_TYPE
) {
    return (
        <div className={cn.tooltip}>
            <h1>{props.properties.mag.toFixed(1)} magnitude</h1>
            <p>{new Date(props.properties.time).toString()}</p>
            <p>{props.properties.place}</p>
        </div>
    );
});
