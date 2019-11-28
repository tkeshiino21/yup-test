import React from "react";

const Basic = ({ name, color, backgroundColor }) => {
  return (
    <div>
      <p style={{ color, backgroundColor }}>Basic {name}!</p>
    </div>
  );
};

export default Basic;
