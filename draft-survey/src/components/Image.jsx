import React from "react";

const Image = (props) => {
  const { src, alt, width, height } = props;

  const imageStyle = {
    width: width || "100%",
    height: height || "auto",
  };

  return <img src={src} alt={alt || "Image"} style={imageStyle} />;
};

export default Image;
