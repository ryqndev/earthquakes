import {
    ArcGisMapServerImageryProvider,
    ArcGISTiledElevationTerrainProvider,
    CesiumTerrainProvider,
    ImageryLayer,
    UrlTemplateImageryProvider,
    WebMapServiceImageryProvider,
} from "cesium";

const darkMinimalTilesImageryProvider = new UrlTemplateImageryProvider({
    url: "//{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
});
export const darkMinimalTilesImageryLayer = new ImageryLayer(
    darkMinimalTilesImageryProvider
);

const lightMinimalTilesImageryProvider = new UrlTemplateImageryProvider({
    url: "//{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
});
export const lightMinimalTilesImageryLayer = new ImageryLayer(
    lightMinimalTilesImageryProvider
);

export const GEBCO_PROVIDER = new WebMapServiceImageryProvider({
    url: "https://wms.gebco.net/mapserv?",
    layers: "gebco_latest",
    parameters: {
        service: "WMS",
        version: "1.3.0",
        request: "GetMap",
        format: "image/png",
        transparent: true,
    },
});

// https://svs.gsfc.nasa.gov/2953

// export const NASA_PLATES_PROVIDER = new WebMapServiceImageryProvider({
//     url: "http://svs.gsfc.nasa.gov/cgi-bin/wms?CRS=CRS:84&BBOX=-180.0,-90.0,180.0,90.0&STYLES=",
//     layers: "2953_18155",
//     parameters: {
//         service: "WMS",
//         version: "1.3.0",
//         request: "GetMap",
//         format: "image/png",
//     },
// });
export const NASA_PLATES_PROVIDER = ArcGisMapServerImageryProvider.fromUrl(
    "//earthquake.usgs.gov/arcgis/rest/services/eq/map_plateboundaries/MapServer"
);

// export const PLATE_TECTONICS_IMAGERY_LAYER = ImageryLayer.fromProviderAsync(
//     NASA_PLATES_PROVIDER,
//     {}
// );
// export const PLATE_TECTONICS_IMAGERY_LAYER = new ImageryLayer(
//     NASA_PLATES_PROVIDER
// );
