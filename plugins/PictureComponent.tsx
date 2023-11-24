import React from "react";

const PictureComponent: React.FC<{
  id?: string;
  src: string;
  alt?: string;
  className?: string;
  width?: string;
  height?: string;
  ariaHidden?: boolean;
}> = ({ id, src, alt, className, width, height, ariaHidden }) => {
  const webpSrc = src.replace(/\.\w+$/, ".webp");

  return (
    <picture>
      <source type="image/webp" srcSet={webpSrc} />
      <img
        id={id}
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        aria-hidden={ariaHidden}
      />
    </picture>
  );
};

export default PictureComponent;
