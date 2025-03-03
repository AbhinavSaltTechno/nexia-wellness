import React, { useState } from "react";

const DropDownFooter = () => {
  const [showDrop, setShowDrop] = useState(true);
  return <button onClick={() => setShowDrop((prev) => !prev)}></button>;
};

export default DropDownFooter;
