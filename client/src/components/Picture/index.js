import React from "react";

const Picture = ({ file, folder, alt }) => (
  <img
    className="picture"
    alt={alt}
    src={require(`../../images/${folder}/${file}`)}
  />
);

export default Picture;
