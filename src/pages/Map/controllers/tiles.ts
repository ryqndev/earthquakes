import { ArcGISTiledElevationTerrainProvider, CesiumTerrainProvider, ImageryLayer, UrlTemplateImageryProvider, WebMapServiceImageryProvider } from "cesium";

export const darkMinimalTilesImageryProvider = new UrlTemplateImageryProvider({
  url: "http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
});


export const GEBCO_PROVIDER = new WebMapServiceImageryProvider({
  url: 'https://wms.gebco.net/mapserv?',
  layers: 'gebco_latest',
  parameters: {
    service: 'WMS',
    version: '1.3.0',
    request: 'GetMap',
    format: 'image/png',
    transparent: true,
  }
});

export const darkMinimalTilesImageryLayer = new ImageryLayer(
  darkMinimalTilesImageryProvider
);

