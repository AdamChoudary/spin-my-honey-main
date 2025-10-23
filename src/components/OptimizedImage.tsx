import { useState, useEffect } from "react";

interface OptimizedImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  webpSrc?: string;
  width?: number | string;
  height?: number | string;
  loading?: "lazy" | "eager";
  className?: string;
}

export const OptimizedImage = ({
  src,
  alt,
  webpSrc,
  width,
  height,
  loading = "lazy",
  className = "",
  ...props
}: OptimizedImageProps) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Check if WebP is supported
    const checkWebPSupport = () => {
      const elem = document.createElement("canvas");
      if (elem.getContext && elem.getContext("2d")) {
        return elem.toDataURL("image/webp").indexOf("data:image/webp") === 0;
      }
      return false;
    };

    if (webpSrc && checkWebPSupport()) {
      setImageSrc(webpSrc);
    }
  }, [webpSrc]);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImageSrc(src); // Fallback to original
    }
  };

  return (
    <img
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      className={className}
      onError={handleError}
      decoding="async"
      {...props}
    />
  );
};
