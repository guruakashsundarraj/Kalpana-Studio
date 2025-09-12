// MugCustomizer.jsx
import React, { useState } from "react";
import MugScene from "./MugScene";
import "./MugCustomizer.css";

export default function MugCustomizer() {
  const [images, setImages] = useState({
    front: null,
    back: null,
  });

  const [colors, setColors] = useState({
    body: "#ffffff",
    rim: "#ffffff",
    handle: "#ffffff",
    inner: "#ffffff",
  });

  const handleImageUpload = (e, side) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImages((prev) => ({ ...prev, [side]: url }));
    }
  };

  const handleColorChange = (e, part) => {
    setColors((prev) => ({ ...prev, [part]: e.target.value }));
  };

  return (
    <div className="mug-customizer">
      <h2>🎨 Customize Your 3D Mug</h2>
      <div className="mug-canvas">
        <MugScene images={images} colors={colors} />
      </div>

      <div className="controls">
        <label>Upload Front Image:
          <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, "front")} />
        </label>

        <label>Upload Back Image:
          <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, "back")} />
        </label>

        <div className="color-options">
          <div>
            <label>Body Color:</label>
            <input type="color" value={colors.body} onChange={(e) => handleColorChange(e, "body")} />
          </div>
          <div>
            <label>Rim Color:</label>
            <input type="color" value={colors.rim} onChange={(e) => handleColorChange(e, "rim")} />
          </div>
          <div>
            <label>Handle Color:</label>
            <input type="color" value={colors.handle} onChange={(e) => handleColorChange(e, "handle")} />
          </div>
          <div>
            <label>Inner Color:</label>
            <input type="color" value={colors.inner} onChange={(e) => handleColorChange(e, "inner")} />
          </div>
        </div>
      </div>
    </div>
  );
}
