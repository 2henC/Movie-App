import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const ImageComponent = ({ src, className, height, width }) => {
  const [currentSrc, setCurrentSrc] = useState(
    `https://placehold.co/${width}x${height}?text=Loading`,
  );

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setCurrentSrc(src);
    };

    return () => {
      img.onload = null;
    }
  }, [src]);

  return (
    <img
      className={currentSrc === src ? className : `${className} blur-sm`}
      height={height}
      width={width}
      src={currentSrc}
    ></img>
  );
};

ImageComponent.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
  height: PropTypes.any,
  width: PropTypes.any,
};
export default ImageComponent;
