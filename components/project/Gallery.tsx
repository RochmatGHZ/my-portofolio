"use client";

import { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Navigation,
} from "swiper/modules";

import {
  TransformWrapper,
  TransformComponent,
} from "react-zoom-pan-pinch";

import {
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

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
  const [selectedIndex, setSelectedIndex] =
    useState<number | null>(null);

  if (items.length === 0) return null;

  return (
    <>
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
          {items.map((item, index) => (
            <SwiperSlide
              key={item.id}
              onClick={() =>
                setSelectedIndex(index)
              }
              className="cursor-pointer"
            >
              <div
                className="
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                "
              >
                <div
                  className="
                    relative
                    h-[500px]
                    w-full
                    bg-slate-900
                  "
                >
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

      {/* FULLSCREEN VIEWER */}
      {selectedIndex !== null && (
        <div
          className="
            fixed
            inset-0
            z-50
            bg-black/95
            backdrop-blur
          "
        >
          {/* Close */}
          <button
            onClick={() =>
              setSelectedIndex(null)
            }
            className="
              absolute
              top-6
              right-6
              z-50
              rounded-xl
              bg-white/10
              p-3
              text-white
              hover:bg-white/20
            "
          >
            <X size={30} />
          </button>

          {/* Previous */}
          <button
            onClick={() =>
              setSelectedIndex(
                selectedIndex === 0
                  ? items.length - 1
                  : selectedIndex - 1
              )
            }
            className="
              absolute
              left-6
              top-1/2
              z-50
              -translate-y-1/2
              rounded-full
              bg-white/10
              p-3
              text-white
              hover:bg-white/20
            "
          >
            <ChevronLeft size={36} />
          </button>

          {/* Next */}
          <button
            onClick={() =>
              setSelectedIndex(
                selectedIndex === items.length - 1
                  ? 0
                  : selectedIndex + 1
              )
            }
            className="
              absolute
              right-6
              top-1/2
              z-50
              -translate-y-1/2
              rounded-full
              bg-white/10
              p-3
              text-white
              hover:bg-white/20
            "
          >
            <ChevronRight size={36} />
          </button>

          <TransformWrapper
            initialScale={1}
            minScale={0.5}
            maxScale={5}
            wheel={{ step: 0.2 }}
          >
            {({
              zoomIn,
              zoomOut,
              resetTransform,
            }) => (
              <>
                {/* Zoom Controls */}
                <div
                  className="
                    absolute
                    left-6
                    top-6
                    z-50
                    flex
                    gap-3
                  "
                >
                  <button
                    onClick={() => zoomIn()}
                    className="
                      rounded-xl
                      bg-white/10
                      p-3
                      text-white
                    "
                  >
                    <ZoomIn />
                  </button>

                  <button
                    onClick={() => zoomOut()}
                    className="
                      rounded-xl
                      bg-white/10
                      p-3
                      text-white
                    "
                  >
                    <ZoomOut />
                  </button>

                  <button
                    onClick={() =>
                      resetTransform()
                    }
                    className="
                      rounded-xl
                      bg-white/10
                      px-4
                      text-white
                    "
                  >
                    Reset
                  </button>
                </div>

                <TransformComponent
                  wrapperClass="
                    !w-screen
                    !h-screen
                  "
                >
                  <img
                    src={
                      items[selectedIndex]
                        .image_url
                    }
                    alt={
                      items[selectedIndex]
                        .caption
                    }
                    className="
                      max-h-[90vh]
                      object-contain
                    "
                  />
                </TransformComponent>
              </>
            )}
          </TransformWrapper>
        </div>
      )}
    </>
  );
}