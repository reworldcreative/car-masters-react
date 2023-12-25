import React from "react";

const PictureComponent: React.FC<{
  id?: string;
  src: string;
  mediumSrc?: string;
  alt?: string;
  className?: string;
  width?: string;
  height?: string;
  ariaHidden?: boolean;
}> = ({
  id,
  src,
  mediumSrc = "",
  alt,
  className,
  width,
  height,
  ariaHidden,
}) => {
  const webpSrc = src.replace(/\.\w+$/, ".webp");
  const webpMediumSrc = mediumSrc ? mediumSrc.replace(/\.\w+$/, ".webp") : "";

  return (
    <picture>
      <source type="image/webp" srcSet={webpSrc} media="(min-width: 1200px)" />
      <source
        type="image/webp"
        srcSet={mediumSrc ? webpMediumSrc : webpSrc}
        media="(min-width: 768px) and (max-width: 1200px)"
      />
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
