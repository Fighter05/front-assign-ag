import React from "react";

const ImgConfig = (props) => {
  return (
    <div>
      <img
        src={props.src}
        className={`absolute ${props.state ? "" : "hidden"}`}
      />
    </div>
  );
};

export default ImgConfig;
