import { memo } from "react";
import { Settings } from "./Settings/Settings";
import { InfoPanel } from "./InfoPanel/InfoPanel";

export const Overlays = memo(function Overlays() {
    return (
        <>
            <InfoPanel />
            <Settings />
        </>
    );
});
