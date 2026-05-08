import Image from "next/image"
import { MapPin, Heart, Briefcase, GraduationCap, Sparkles, Award } from "lucide-react"

export function AboutSection() {
  return (
    <section className="min-h-[calc(100vh-3.5rem)] px-4 py-12 md:min-h-[calc(100vh-4rem)] md:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-center font-serif text-2xl font-bold text-foreground md:text-4xl">
          About Me
        </h2>

        <div className="mb-10 overflow-hidden rounded-2xl">
          <Image
            src="/images/bton-classic-sundays.jpg"
            alt="Monde Nkuna at a fashion event"
            width={800}
            height={500}
            className="h-64 w-full object-cover object-top md:h-80"
          />
        </div>

        {/* Graduate Highlight */}
        <div className="mb-8 flex items-center justify-center gap-3 rounded-xl bg-primary/10 p-4">
          <Award className="h-6 w-6 text-primary" />
          <p className="font-medium text-foreground">
            Proud 2025 Graduate in Systems Support from Velisa Africa Academy
          </p>
        </div>

        {/* Bio */}
        <div className="mb-10 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>
            {"I'm"} <span className="font-semibold text-foreground">Monde Nkuna</span>, a recent graduate, passionate technologist, and ambitious entrepreneur based in Johannesburg. I grew up between the coastal city of Durban and the scenic towns of Barberton and Malelane in Mpumalanga, experiences that shaped my adaptable and resilient character.
          </p>
          <p>
            As a <span className="font-semibold text-foreground">fresh graduate with an NQF5 in Systems Support</span> from Velisa Africa Academy (2025) and an NQF5 in Data Engineering from Explore Data Science Academy (2023), I bring a unique combination of technical expertise and eagerness to learn. My academic journey has equipped me with the skills to handle complex technical challenges, and my entrepreneurial spirit drives me to continuously push boundaries.
          </p>
          <p>
            I believe that everyone has a unique purpose in this life, and {"I'm"} committed to helping others discover and achieve theirs. {"I'm"} known for being friendly, approachable, and genuinely invested in seeing the people around me succeed.
          </p>
          <p>
            When {"I'm"} not immersed in technology, you can find me expressing my creativity through fashion. I have a deep appreciation for well-tailored suits, and I enjoy modelling for fun and attending fashion events across Johannesburg. Style is a form of self-expression, and I take pride in presenting myself with elegance and confidence.
          </p>
          <p>
            {"I'm"} always open to meaningful conversations and new opportunities. If {"you're"} in the Rosebank area, {"let's"} connect over a cup of coffee and explore how we can collaborate or simply exchange ideas.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-card p-5 shadow-sm">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Education</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">2025 Graduate</span> - NQF5 Systems Support (Velisa Africa Academy) and NQF5 Data Engineering (Explore Data Science Academy, 2023).
            </p>
          </div>

          <div className="rounded-xl bg-card p-5 shadow-sm">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Location</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Based in Johannesburg, South Africa. Originally from Durban and Barberton/Malelane.
            </p>
          </div>

          <div className="rounded-xl bg-card p-5 shadow-sm">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Heart className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Hobbies</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Fashion enthusiast, suit collector, casual modelling, and attending fashion events.
            </p>
          </div>

          <div className="rounded-xl bg-card p-5 shadow-sm">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Entrepreneurship</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              I founded <span className="font-semibold text-accent">YES TECH FIN</span> while I was doing my NQF5 Systems Support at Velisa Africa Academy. Ambitious entrepreneur with a passion for learning and innovation.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-10 rounded-2xl bg-primary/5 p-6 md:p-8">
          <div className="mb-4 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-accent" />
            <h3 className="font-serif text-xl font-semibold text-foreground">My Philosophy</h3>
          </div>
          <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground">
            {"\"Everyone has a purpose in this life. As a fresh graduate entering the professional world, I'm here to prove that with determination and continuous learning, anything is possible. Success is best when shared.\""}
          </blockquote>
        </div>
      </div>
    </section>
  )
}
