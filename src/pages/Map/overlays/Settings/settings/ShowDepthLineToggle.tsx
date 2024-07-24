import { memo } from "react";
import { Toggle } from "../../../../../components/Toggle/Toggle";
import { useMapSettingsStore } from "../../../controllers/settings/useMapSettingsStore";

export const ShowDepthLineToggle = memo(function ShowDepthLineToggle() {
    const { showDepthLine, toggleShowDepthLine } = useMapSettingsStore(
        ({ showDepthLine, toggleShowDepthLine }) => ({
            showDepthLine,
            toggleShowDepthLine,
        })
    );
    return (
        <Toggle
            id="show-depth-line-toggle"
            value={showDepthLine}
            onToggle={toggleShowDepthLine}
        >
            Toggle Depth Lines
        </Toggle>
    );
});
