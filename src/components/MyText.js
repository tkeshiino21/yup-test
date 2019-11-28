import React, { useState } from "react";

const MyText = () => {
  const [TextData, setTextData] = useState("");
  return (
    <div>
      <h1>Hello from MyText</h1>
      <input type="text" value={TextData} onChange={() => setTextData} />
    </div>
  );
};

export default MyText;
