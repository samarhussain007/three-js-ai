import React from "react";
import { SketchPicker } from "react-color";
import state from "../store";
import { useSnapshot } from "valtio";

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        onChange={(color) => (state.color = color.hex)}
        presetColors={[
          "#ff8100",
          "#ff0000",
          "#00ff00",
          "#0000ff",
          "#ffffff",
          "#000000",
          "#ff00ff",
        ]}
      />
    </div>
  );
};

export default ColorPicker;
