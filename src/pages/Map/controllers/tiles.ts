import { CesiumTerrainProvider, ImageryLayer, UrlTemplateImageryProvider, WebMapServiceImageryProvider } from "cesium";

export const darkMinimalTilesImageryProvider = new UrlTemplateImageryProvider({
  url: "http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
});

export const terrainProvider = CesiumTerrainProvider.fromUrl('https://assets.agi.com/stk-terrain/v1/tilesets/world/tiles', {
  requestWaterMask: true,
  requestVertexNormals: true
})

export const testProvider = new WebMapServiceImageryProvider({
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

// export const darkMinimalTilesImageryLayer = new ImageryLayer(
//   darkMinimalTilesImageryProvider
// );
export const darkMinimalTilesImageryLayer = new ImageryLayer(
  testProvider
);


// const BATHYMETRY_URL = `https://tiles.arcgis.com/tiles/C8EMgrsFcRFL6LrL/arcgis/rest/services/Arctic_Bathymetry_Basemap/MapServer/tile/3/12/16`
// const BATHYMETRY_URL = `https://tiles.arcgis.com/tiles/C8EMgrsFcRFL6LrL/arcgis/rest/services/Arctic_Bathymetry_Basemap/MapServer`
