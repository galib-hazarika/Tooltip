import React, { useState } from "react";

export const Tooltip = ({ text, children }) => {
  //Creating state setting the visiblity on mouse hover
  const [isVisible, setVisible] = useState(false);
  return (
    <div
      className='tool-tip-main'
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {isVisible && <div className='tooltip'>{text}</div>}
      {children}
    </div>
  );
};
