"use client"

import Image from "next/image"
import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  {
    src: "/images/mensconfrence 2018.jpg",
    alt: "Monde Nkuna speaking and networking at Men's Conference 2018 South Africa",
    caption: "Men's Conference 2018 - South Africa",
  },
  {
    src: "/images/mensconfrence 2018 2.jpg",
    alt: "Monde Nkuna with attendees at Men's Conference 2018 South Africa",
    caption: "Public Speaking and Men Mentorship",
  },
  {
    src: "/images/mensconfrence 2018 3.jpg",
    alt: "Monde Nkuna and participants during Men's Conference 2018 South Africa",
    caption: "Encouraging Men to Rise with Purpose",
  },
  {
    src: "/images/profile-photo.jpg",
    alt: "Professional portrait - Monde Nkuna",
    caption: "Professional Portrait",
  },
  {
    src: "/images/bton-classic-sundays.jpg",
    alt: "Monde Nkuna at Braamfontein Classic Sundays",
    caption: "Classic Sundays - Braamfontein",
  },
  {
    src: "/images/rosebank-starbux-2018.jpg",
    alt: "Fashion event at Rosebank",
    caption: "Fashion Walk - Rosebank 2018",
  },
  {
    src: "/images/maboneng-2020.jpg",
    alt: "Street style in Maboneng",
    caption: "Street Style - Maboneng 2020",
  },
  {
    src: "/images/rosebank-jan-smusts.jpg",
    alt: "Fashion gathering at Jan Smuts",
    caption: "Fashion Event - Jan Smuts Avenue",
  },
  {
    src: "/images/maboneng-2018.jpg",
    alt: "Casual style in Maboneng",
    caption: "Urban Style - Maboneng 2018",
  },
  {
    src: "/images/rosebank-starbux-2.jpg",
    alt: "Fashion enthusiasts gathering",
    caption: "Fashion Community Event",
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1
      )
    }
  }

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1
      )
    }
  }

  return (
    <section className="min-h-[calc(100vh-3.5rem)] px-4 py-12 md:min-h-[calc(100vh-4rem)] md:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-center font-serif text-2xl font-bold text-foreground md:text-4xl">
          Gallery
        </h2>

        <p className="mb-10 text-center text-muted-foreground">
          A glimpse into my journey through style, leadership, and purpose. Alongside fashion moments across Johannesburg, this gallery highlights my work in public speaking where I encourage men to grow, lead well, and pursue purpose.
        </p>

        {/* Public Speaking Spotlight */}
        <div id="public-speaking" className="mb-10 rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8">
          <div className="mb-4 flex flex-wrap items-center justify-center gap-3 text-center">
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
              Public Speaking
            </span>
            <h3 className="font-serif text-xl font-semibold text-foreground md:text-2xl">
              Speaker - {"Men's"} Conference 2018, South Africa
            </h3>
          </div>
          <p className="mx-auto mb-6 max-w-3xl text-center text-muted-foreground">
            I use my voice to inspire men to lead with discipline, purpose, and excellence. These featured moments capture my time as a speaker at {"Men's"} Conference 2018 in South Africa.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {galleryImages.slice(0, 3).map((image, index) => (
              <button
                key={`featured-${index}`}
                onClick={() => openLightbox(index)}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-muted"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/30" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                  <p className="text-xs font-medium text-white md:text-sm">{image.caption}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square overflow-hidden rounded-xl bg-muted"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/30" />
              <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/80 to-transparent p-3 transition-transform group-hover:translate-y-0">
                <p className="text-xs font-medium text-white md:text-sm">
                  {image.caption}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Purpose Note */}
        <div className="mt-12 rounded-2xl bg-primary/5 p-6 text-center md:p-8">
          <h3 className="mb-2 font-serif text-xl font-semibold text-foreground">
            Speaking to Build Better Men
          </h3>
          <p className="text-muted-foreground">
            I was honored to speak at the {"Men's"} Conference 2018 in South Africa, sharing messages that motivate men to take responsibility, pursue excellence, and uplift their communities. For me, style and public speaking both reflect one mission: lead with confidence, character, and purpose.
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 text-white hover:text-white/80"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-white/80"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-white/80"
            aria-label="Next image"
          >
            <ChevronRight className="h-10 w-10" />
          </button>

          <div className="relative max-h-[80vh] max-w-4xl">
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              width={800}
              height={800}
              className="max-h-[80vh] w-auto rounded-lg object-contain"
            />
            <p className="mt-4 text-center text-white">
              {galleryImages[selectedImage].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
