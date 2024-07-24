import { memo } from "react";
import { Toggle } from "../../../../../components/Toggle/Toggle";
import { useMapSettingsStore } from "../../../controllers/settings/useMapSettingsStore";

export const ShowTectonicPlatesToggle = memo(
    function ShowTectonicPlatesToggle() {
        const { showTectonicPlates, toggleShowTectonicPlates } =
            useMapSettingsStore(
                ({ showTectonicPlates, toggleShowTectonicPlates }) => ({
                    showTectonicPlates,
                    toggleShowTectonicPlates,
                })
            );
        return (
            <Toggle
                id="show-tectonic-plates-toggle"
                value={showTectonicPlates}
                onToggle={toggleShowTectonicPlates}
            >
                Show Tectonic Plates
            </Toggle>
        );
    }
);
