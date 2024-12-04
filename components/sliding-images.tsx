"use client";

import { motion } from "framer-motion";

const legalImages = [
  // First Row (Moving Up)
  {
    url: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80",
    alt: "Modern law office"
  },
  {
    url: "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?auto=format&fit=crop&q=80",
    alt: "Legal books"
  },
  {
    url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
    alt: "Business meeting"
  },
  {
    url: "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&q=80",
    alt: "Courthouse"
  },
  {
    url: "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80",
    alt: "Legal consultation"
  },
  // Second Row (Moving Down)
  {
    url: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80",
    alt: "Professional meeting"
  },
  {
    url: "https://images.unsplash.com/photo-1507215210622-539686c4bfaa?auto=format&fit=crop&q=80",
    alt: "Modern office"
  },
  {
    url: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&q=80",
    alt: "Legal documents"
  },
  {
    url: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?auto=format&fit=crop&q=80",
    alt: "Office workspace"
  },
  {
    url: "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&q=80",
    alt: "Legal technology"
  }
];

const firstRow = legalImages.slice(0, 5);
const secondRow = legalImages.slice(5);

export function SlidingImages() {
  return (
    <div className="relative h-[400px] overflow-hidden">
      {/* First Row - Moving Up */}
      <motion.div
        animate={{
          y: [0, -1000],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-0 flex flex-col gap-4"
      >
        {[...firstRow, ...firstRow].map((image, index) => (
          <div
            key={`up-${index}`}
            className="w-[200px] h-[200px] rounded-lg overflow-hidden"
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>

      {/* Second Row - Moving Down */}
      <motion.div
        animate={{
          y: [-1000, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute right-0 flex flex-col gap-4"
      >
        {[...secondRow, ...secondRow].map((image, index) => (
          <div
            key={`down-${index}`}
            className="w-[200px] h-[200px] rounded-lg overflow-hidden"
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}