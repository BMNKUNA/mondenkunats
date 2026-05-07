import { Briefcase, GraduationCap, Rocket, Users } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      icon: Rocket,
      title: "Founder",
      company: "YES TECH FIN",
      companyClass: "text-accent font-semibold",
      period: "2025 - Present",
      description:
        "I founded YES TECH FIN while I was doing my NQF5 System Support at Velisa Academy. As an ambitious entrepreneur, I am building technology solutions that make a difference. This venture represents my commitment to innovation and my belief that technology can empower communities.",
      highlights: ["Tech Solutions", "Entrepreneurship", "Innovation"],
    },
    {
      icon: Users,
      title: "Worked at",
      company: "Technospeak",
      companyClass: "text-accent font-semibold",
      period: "November 2025 - 2026",
      description:
        "I worked at a technology solutions company built to make tech simple, friendly, and stress-free. I helped individuals and small businesses with system support, task assistance, and training—sharing clear, step-by-step guidance so people can feel confident with their devices and digital tools.",
      highlights: ["System Support", "Task Assistance", "Training"],
    },
    {
      icon: GraduationCap,
      title: "System Support NQF5",
      company: "Velisa Academy",
      period: "2025",
      description:
        "Recently graduated with NQF5 certification in System Support. Gained comprehensive knowledge in IT infrastructure, troubleshooting, network administration, and technical support. Equipped to handle complex IT environments and provide effective solutions.",
      highlights: ["IT Support", "Network Admin", "Troubleshooting"],
    },
    {
      icon: GraduationCap,
      title: "Data Engineering NQF5",
      company: "Explore Data Science Academy",
      period: "2023",
      description:
        "Completed an intensive Data Engineering programme, developing expertise in data pipelines, ETL processes, database management, and data analysis. Capable of handling complex data challenges and delivering insights that drive business decisions.",
      highlights: ["Data Pipelines", "ETL", "Analytics"],
    },
    {
      icon: Briefcase,
      title: "Web Development",
      company: "Self-Taught",
      period: "Since Childhood",
      description:
        "My journey in web development began at a young age, driven by curiosity and passion for creating digital experiences. Over the years, I have mastered various technologies and frameworks, building websites and applications that solve real problems. This early start gave me a unique advantage in understanding the evolution of web technologies.",
      highlights: ["Frontend", "Backend", "Full Stack"],
    },
  ]

  return (
    <section className="min-h-[calc(100vh-3.5rem)] px-4 py-12 md:min-h-[calc(100vh-4rem)] md:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-center font-serif text-2xl font-bold text-foreground md:text-4xl">
          Experience & Education
        </h2>

        <p className="mb-10 text-center text-muted-foreground">
          A journey of continuous learning and growth. From self-taught web development as a child to formal qualifications and entrepreneurship.
        </p>

        {/* Timeline */}
        <div className="relative space-y-8">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 hidden h-full w-0.5 bg-border md:left-1/2 md:-ml-px md:block" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative flex flex-col md:flex-row md:items-start"
            >
              {/* Timeline dot - desktop */}
              <div className="absolute left-1/2 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-accent md:block" />

              {/* Content */}
              <div
                className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                }`}
              >
                <div className="rounded-xl bg-card p-5 shadow-sm">
                  <div
                    className={`mb-3 flex items-center gap-3 ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                      <exp.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div className={index % 2 === 0 ? "md:text-right" : ""}>
                      <h3 className="font-semibold text-foreground">{exp.title}</h3>
                      {exp.company === "Technospeak" ? (
                        <a
                          href="https://techno-speak.jnb1a.cloudlet.cloud/"
                          className="text-sm font-semibold text-blue-500 underline-offset-4 hover:text-blue-400 hover:underline"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        <p className={`text-sm ${exp.companyClass || "text-accent"}`}>{exp.company}</p>
                      )}
                    </div>
                  </div>

                  <p className="mb-3 text-xs font-medium text-muted-foreground">
                    {exp.period}
                  </p>

                  <p
                    className={`mb-4 text-sm leading-relaxed text-muted-foreground ${
                      index % 2 === 0 ? "md:text-right" : ""
                    }`}
                  >
                    {exp.description}
                  </p>

                  <div
                    className={`flex flex-wrap gap-2 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    {exp.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-12 rounded-2xl bg-primary/5 p-6 text-center md:p-8">
          <h3 className="mb-2 font-serif text-xl font-semibold text-foreground">
            Ready to Take on Complex Challenges
          </h3>
          <p className="text-muted-foreground">
            As a recent graduate with diverse technical skills, I bring fresh perspectives and a strong work ethic. My combination of system support expertise, data engineering knowledge, and years of web development experience makes me uniquely equipped to tackle complex technical challenges.
          </p>
        </div>
      </div>
    </section>
  )
}
