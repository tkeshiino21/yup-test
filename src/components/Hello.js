import React from "react";
import { items } from "./Array";

export const Hello = ({ name, color }) => (
  <div>
    <p style={{ color }}>Hello {name}!</p>
  </div>
);

export const TwoDimensionalHello = ({ name, color }) => (
  <div>
    <p style={{ color }}>Hello {name}!</p>
  </div>
);
