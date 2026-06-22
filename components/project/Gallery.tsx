"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Pagination,
  Navigation,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type GalleryItem = {
  id: string;
  image_url: string;
  caption: string;
};

export default function Gallery({
  items,
}: {
  items: GalleryItem[];
}) {
  if (items.length === 0) return null;

  return (
    <section className="mt-16">
      <h2 className="mb-8 text-3xl font-bold text-white">
        Gallery
      </h2>

      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation={true}
        spaceBetween={20}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <div className="relative h-[500px] w-full">
                <Image
                  src={item.image_url}
                  alt={item.caption}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              <div className="p-6 text-slate-300">
                {item.caption}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}