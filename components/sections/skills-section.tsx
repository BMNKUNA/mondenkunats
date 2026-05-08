import { Monitor, Database, Code, Server, Users, Lightbulb } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      icon: Monitor,
      title: "Systems Support",
      description: "IT infrastructure management, troubleshooting, and technical support",
      skills: [
        "Hardware Troubleshooting",
        "Software Installation",
        "Network Configuration",
        "User Support",
        "System Maintenance",
        "Documentation",
      ],
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Building and maintaining data pipelines and analytics solutions",
      skills: [
        "Data Pipelines",
        "ETL Processes",
        "SQL & NoSQL",
        "Data Analysis",
        "Python",
        "Data Visualization",
      ],
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Creating responsive and user-friendly web applications",
      skills: [
        "HTML & CSS",
        "JavaScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Responsive Design",
      ],
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Server-side development and API creation",
      skills: [
        "Node.js",
        "REST APIs",
        "Database Design",
        "Authentication",
        "Cloud Services",
        "Version Control",
      ],
    },
    {
      icon: Users,
      title: "Soft Skills",
      description: "Interpersonal and professional abilities",
      skills: [
        "Communication",
        "Team Collaboration",
        "Problem Solving",
        "Time Management",
        "Adaptability",
        "Leadership",
      ],
    },
    {
      icon: Lightbulb,
      title: "Entrepreneurship",
      description: "Business acumen and innovative thinking",
      skills: [
        "Business Development",
        "Project Management",
        "Strategic Planning",
        "Networking",
        "Innovation",
        "Self-Motivation",
      ],
    },
  ]

  return (
    <section className="min-h-[calc(100vh-3.5rem)] px-4 py-12 md:min-h-[calc(100vh-4rem)] md:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-center font-serif text-2xl font-bold text-foreground md:text-4xl">
          Skills & Expertise
        </h2>

        <p className="mb-10 text-center text-muted-foreground">
          A diverse skill set combining technical expertise with strong interpersonal abilities. Continuously learning and adapting to new technologies.
        </p>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="rounded-xl bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <category.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                </div>
              </div>

              <p className="mb-4 text-sm text-muted-foreground">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-accent/5 p-5 text-center">
            <p className="mb-1 font-serif text-3xl font-bold text-accent">2</p>
            <p className="text-sm text-muted-foreground">NQF5 Qualifications</p>
          </div>
          <div className="rounded-xl bg-accent/5 p-5 text-center">
            <p className="mb-1 font-serif text-3xl font-bold text-accent">10+</p>
            <p className="text-sm text-muted-foreground">Years Coding</p>
          </div>
          <div className="rounded-xl bg-accent/5 p-5 text-center">
            <p className="mb-1 font-serif text-3xl font-bold text-accent">1</p>
            <p className="text-sm text-muted-foreground">Company Founded</p>
          </div>
        </div>
      </div>
    </section>
  )
}
