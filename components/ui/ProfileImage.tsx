"use client";

import Image from "next/image";

type ProfileImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function ProfileImage({
  src,
  alt,
  className = "",
}: ProfileImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={400}
      height={400}
      className={className}
      priority
    />
  );
}