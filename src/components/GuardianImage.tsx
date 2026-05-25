"use client";

import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  fallbackClassName?: string;
};

export function GuardianImage({ src, alt, className, fallbackClassName }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div className={fallbackClassName ?? className} aria-label={alt} />;
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
