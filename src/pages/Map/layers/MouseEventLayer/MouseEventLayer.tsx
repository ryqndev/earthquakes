import { useCallback, useEffect, useState } from "react";
import { useCesium } from "resium";

export const MouseEventLayer = () => {
  const { viewer } = useCesium();

  const [isDebounced, setIsDebounced] = useState(false);

  const mouseEventListener = useCallback((info) => {
    console.count("@ryqndev");
  }, []);

  //   useEffect(() => {
  //     // if (!viewer) return;
  //     viewer?.scene.preRender.addEventListener(mouseEventListener);

  //     return () => {
  //       viewer?.scene.preRender.removeEventListener(mouseEventListener);
  //     };
  //   }, []);
  return null;
};
