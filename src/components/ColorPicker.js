import React, { useState } from "react";
import { SketchPicker } from "react-color";
import "./styles.css";

const ColorPicker = () => {
  const [color, setColor] = useState("lightblue");
  const [hide, setHide] = useState(false);
  
  const pickerStyle = {
    default: {
      picker: {
        position: "absolute",
        top: "30px",
        left: "100px"
      }
    }
  };

  return (
    <div className="App" style={{ background: color }}>
      <h1>React SketchPicker Colour Picker</h1>
      <div className="container">
        
        {hide && (
          <SketchPicker
            styles={pickerStyle}
            color={color}
            onChange={(updatedColor) => setColor(updatedColor.hex)}
          />
        )}

        <button onClick={() => setHide(!hide)}>
          {hide ? "Close Colour Picker" : "Open Colour Picker"}
        </button>
      </div>
    </div>
  );
}

export default ColorPicker;