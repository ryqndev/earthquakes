import { create } from "zustand";
import { persist } from "zustand/middleware";
import { FEATURE_ITEM_TYPE } from "../../layers/EarthquakeLayer/controllers/useUSGSEarthquakeData";

interface MapSelectionStore {
    selectedEntityId: string | null;
    selectedEntity: FEATURE_ITEM_TYPE | null;
    selectEntity: (
        entityId: string | null,
        entity?: FEATURE_ITEM_TYPE | null
    ) => void;
    removeSelection: () => void;
}

/**
 * Hook for accessing the selected entity on the map
 * Since we'll be trying to hook into multiple different data sources
 * with different types, will need to append a type later so users
 * can dynamic type checks to change render methods
 */
export const useMapSelectionStore = create<MapSelectionStore>()(
    persist(
        (set) => ({
            selectedEntityId: null,
            selectedEntity: null,
            selectEntity: (
                entityId: string | null,
                entity?: FEATURE_ITEM_TYPE | null
            ) =>
                set(() => ({
                    selectedEntityId: entityId,
                    selectedEntity: entity ?? null,
                })),
            removeSelection: () =>
                set(() => ({ selectedEntityId: null, selectedEntity: null })),
        }),
        { name: "@ryqndev/entity-selection" }
    )
);
