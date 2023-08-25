import React from "react";

const Text = (props) => {
  const { content } = props;

  return <p>{content || "Default text content"}</p>;
};

export default Text;
