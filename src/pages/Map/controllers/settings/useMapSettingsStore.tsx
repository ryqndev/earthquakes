import { create } from "zustand";
import { persist } from "zustand/middleware";
import { MapSettingsStore } from "./map-settings-store.types";

type ZustandSetFn<T> = (
    partial: T | Partial<T> | ((state: T) => T | Partial<T>)
) => void;

const toggle =
    (set: ZustandSetFn<MapSettingsStore>, stateName: keyof MapSettingsStore) =>
    () =>
        set((state) => ({
            [stateName]: !state[stateName],
        }));

export const useMapSettingsStore = create<MapSettingsStore>()(
    persist(
        (set) => ({
            showDepthLine: true,
            toggleShowDepthLine: toggle(set, "showDepthLine"),

            renderOnSurface: false,
            toggleRenderOnSurface: toggle(set, "renderOnSurface"),

            showTectonicPlates: true,
            toggleShowTectonicPlates: toggle(set, "showTectonicPlates"),

            showTerrain: false,
            toggleShowTerrain: toggle(set, "showTerrain"),
        }),
        { name: "@ryqndev/map-settings" }
    )
);
