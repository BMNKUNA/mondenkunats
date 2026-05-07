"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { HomeSection } from "@/components/sections/home-section"
import { AboutSection } from "@/components/sections/about-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { GallerySection } from "@/components/sections/gallery-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("home")

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    window.scrollTo({ top: 0, behavior: "auto" })
  }

  const renderSection = () => {
    switch (activeTab) {
      case "home":
        return <HomeSection onNavigate={handleTabChange} />
      case "about":
        return <AboutSection />
      case "experience":
        return <ExperienceSection />
      case "skills":
        return <SkillsSection />
      case "gallery":
        return <GallerySection />
      default:
        return <HomeSection onNavigate={handleTabChange} />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeTab={activeTab} onTabChange={handleTabChange} />
      <main>{renderSection()}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
