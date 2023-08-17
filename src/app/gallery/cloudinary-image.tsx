"use client";

import { Heart } from "@/components/icons/heart";
import { CldImage } from "next-cloudinary";

export function CloudinaryImage(props: any) {
  return (
    <div className="relative">
      <CldImage {...props} />
      <Heart className="absolute top-2 right-2" />
    </div>
  );
}
