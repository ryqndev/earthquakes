export interface MapSettingsStore {
    showDepthLine: boolean;
    toggleShowDepthLine: () => void;

    renderOnSurface: boolean;
    toggleRenderOnSurface: () => void;

    showTectonicPlates: boolean;
    toggleShowTectonicPlates: () => void;

    showTerrain: boolean;
    toggleShowTerrain: () => void;
}
