import { ImageryLayer, UrlTemplateImageryProvider } from "cesium";

const darkMinimalTilesImageryProvider = new UrlTemplateImageryProvider({
  url: "http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
});

export const darkMinimalTilesImageryLayer = new ImageryLayer(
  darkMinimalTilesImageryProvider
);
