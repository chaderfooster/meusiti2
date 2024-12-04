"use client";

import { motion } from "framer-motion";

const workImages = [
  {
    url: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80",
    alt: "Advogada com tablet",
    className: "h-[504px]"
  },
  {
    url: "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?auto=format&fit=crop&q=80",
    alt: "Vista do escritório",
    className: "h-[336px]"
  },
  {
    url: "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&q=80",
    alt: "Cidade vista da janela",
    className: "h-[336px]"
  },
  {
    url: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&q=80",
    alt: "Balança da justiça",
    className: "h-[504px]"
  },
  {
    url: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80",
    alt: "Livros jurídicos",
    className: "h-[504px]"
  },
  {
    url: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&q=80",
    alt: "Martelo do juiz",
    className: "h-[336px]"
  }
];

export function InfiniteScrollImages() {
  return (
    <div className="grid grid-cols-2 gap-4 overflow-hidden">
      {/* Left Column - Moving Up */}
      <div className="relative h-[1176px] overflow-hidden">
        <motion.div
          className="space-y-4 absolute w-full"
          animate={{
            y: [0, -1176],
          }}
          transition={{
            y: {
              repeat: Infinity,
              duration: 40,
              ease: "linear",
            }
          }}
        >
          {/* Original images */}
          {workImages.slice(0, 3).map((image, index) => (
            <div key={`original-${index}`} className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={image.url}
                alt={image.alt}
                className={`w-full object-cover ${image.className}`}
              />
            </div>
          ))}
          {/* Duplicate images for seamless loop */}
          {workImages.slice(0, 3).map((image, index) => (
            <div key={`duplicate-${index}`} className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={image.url}
                alt={image.alt}
                className={`w-full object-cover ${image.className}`}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right Column - Moving Down */}
      <div className="relative h-[1176px] overflow-hidden pt-8">
        <motion.div
          className="space-y-4 absolute w-full"
          animate={{
            y: [-1176, 0],
          }}
          transition={{
            y: {
              repeat: Infinity,
              duration: 40,
              ease: "linear",
            }
          }}
        >
          {/* Original images */}
          {workImages.slice(3).map((image, index) => (
            <div key={`original-${index}`} className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={image.url}
                alt={image.alt}
                className={`w-full object-cover ${image.className}`}
              />
            </div>
          ))}
          {/* Duplicate images for seamless loop */}
          {workImages.slice(3).map((image, index) => (
            <div key={`duplicate-${index}`} className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={image.url}
                alt={image.alt}
                className={`w-full object-cover ${image.className}`}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
