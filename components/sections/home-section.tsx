"use client"

import Image from "next/image"
import { MapPin, Download, Coffee, GraduationCap, Sparkles } from "lucide-react"

interface HomeSectionProps {
  onNavigate: (tab: string) => void
}

export function HomeSection({ onNavigate }: HomeSectionProps) {
  return (
    <section className="flex min-h-[calc(100vh-3.5rem)] flex-col md:min-h-[calc(100vh-4rem)]">
      {/* Hero Section with Background Image */}
      <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-4 py-16 md:py-24">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/maboneng-2020.jpg"
            alt="Fashion background"
            fill
            className="object-cover object-top"
            priority
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/75 to-background" />
        </div>
        
        <div className="relative z-10 w-full max-w-4xl text-center">
          {/* Graduate Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            <GraduationCap className="h-4 w-4" />
            <span>2025 Tech Graduate | System Support NQF5</span>
          </div>

          {/* Profile Image */}
          <div className="mx-auto mb-8 h-36 w-36 overflow-hidden rounded-full border-4 border-background shadow-2xl ring-4 ring-primary/20 md:h-48 md:w-48">
            <Image
              src="/images/profile-photo.jpg"
              alt="Monde Nkuna"
              width={192}
              height={192}
              className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
              priority
            />
          </div>

          {/* Name */}
          <h1 className="mb-4 font-serif text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Monde Nkuna
          </h1>

          {/* Title with animated underline */}
          <div className="mb-6">
            <p className="text-xl font-medium text-accent md:text-2xl">
              System Support Graduate | Data Engineer | Web Developer
            </p>
            <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-primary via-accent to-primary md:w-32" />
          </div>

          {/* Location */}
          <div className="mb-8 flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="h-5 w-5" />
            <span className="text-base md:text-lg">Johannesburg, South Africa</span>
          </div>

          {/* Hero Tagline */}
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            A <span className="font-semibold text-foreground">recent graduate</span> and ambitious entrepreneur who believes everyone has a purpose. Founder of <span className="font-semibold text-accent">YES TECH</span> and proud member of{" "}
            <a
              href="https://techno-speak.jnb1a.cloudlet.cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-500 underline-offset-4 transition-colors hover:text-blue-400 hover:underline"
            >
              Technospeak
            </a>
            . Ready to make an impact.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/monde-nkuna-resume.pdf"
              download
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-medium text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl sm:w-auto"
            >
              <Download className="h-5 w-5" />
              Download Resume
            </a>
            <button
              onClick={() => onNavigate("about")}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-accent bg-transparent px-8 py-4 text-lg font-medium text-accent transition-all hover:bg-accent hover:text-accent-foreground sm:w-auto"
            >
              <Coffee className="h-5 w-5" />
              {"Let's"} Have Coffee in Rosebank
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="border-t border-border bg-card/50 px-4 py-10 md:py-14">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex items-center justify-center gap-2">
            <Sparkles className="h-5 w-5 text-accent" />
            <h2 className="text-center font-serif text-xl font-semibold text-foreground md:text-2xl">
              Credentials at a Glance
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            <div className="rounded-2xl bg-background p-5 text-center shadow-sm transition-all hover:shadow-md md:p-6">
              <p className="font-serif text-3xl font-bold text-primary md:text-4xl">2025</p>
              <p className="mt-1 text-sm font-medium text-foreground">Graduate</p>
              <p className="text-xs text-muted-foreground">Velisa Academy</p>
            </div>
            <div className="rounded-2xl bg-background p-5 text-center shadow-sm transition-all hover:shadow-md md:p-6">
              <p className="font-serif text-3xl font-bold text-primary md:text-4xl">NQF5</p>
              <p className="mt-1 text-sm font-medium text-foreground">System Support</p>
              <p className="text-xs text-muted-foreground">Certified</p>
            </div>
            <div className="rounded-2xl bg-background p-5 text-center shadow-sm transition-all hover:shadow-md md:p-6">
              <p className="font-serif text-3xl font-bold text-primary md:text-4xl">NQF5</p>
              <p className="mt-1 text-sm font-medium text-foreground">Data Engineering</p>
              <p className="text-xs text-muted-foreground">Explore DSA 2023</p>
            </div>
            <div className="rounded-2xl bg-background p-5 text-center shadow-sm transition-all hover:shadow-md md:p-6">
              <p className="font-serif text-3xl font-bold text-primary md:text-4xl">2025</p>
              <p className="mt-1 text-sm font-medium text-foreground">Founder</p>
              <p className="text-xs text-muted-foreground">YES TECH</p>
            </div>
          </div>

          <div className="mb-8 mt-12 flex items-center justify-center gap-2">
            <Sparkles className="h-5 w-5 text-accent" />
            <h3 className="text-center font-serif text-xl font-semibold text-foreground md:text-2xl">
              Values & Passions
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            <div className="rounded-2xl bg-background p-5 text-center shadow-sm transition-all hover:shadow-md md:p-6">
              <p className="font-serif text-3xl font-bold text-primary md:text-4xl">Faith</p>
              <p className="mt-1 text-sm font-medium text-foreground">Purpose Driven</p>
              <p className="text-xs text-muted-foreground">Living with intention</p>
            </div>
            <div className="rounded-2xl bg-background p-5 text-center shadow-sm transition-all hover:shadow-md md:p-6">
              <p className="font-serif text-3xl font-bold text-primary md:text-4xl">Men</p>
              <p className="mt-1 text-sm font-medium text-foreground">Mentorship</p>
              <p className="text-xs text-muted-foreground">Building stronger communities</p>
            </div>
            <div className="rounded-2xl bg-background p-5 text-center shadow-sm transition-all hover:shadow-md md:p-6">
              <p className="font-serif text-3xl font-bold text-primary md:text-4xl">Tech</p>
              <p className="mt-1 text-sm font-medium text-foreground">Innovation</p>
              <p className="text-xs text-muted-foreground">Creating useful solutions</p>
            </div>
            <div className="rounded-2xl bg-background p-5 text-center shadow-sm transition-all hover:shadow-md md:p-6">
              <p className="font-serif text-3xl font-bold text-primary md:text-4xl">Style</p>
              <p className="mt-1 text-sm font-medium text-foreground">Confidence</p>
              <p className="text-xs text-muted-foreground">Expressing identity with class</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
