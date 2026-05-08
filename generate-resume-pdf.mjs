import fs from "node:fs/promises"
import { PDFDocument, StandardFonts, rgb } from "pdf-lib"

const outputPath = "public/monde-nkuna-resume.pdf"

const profile = {
  name: "Monde Nkuna",
  title: "Systems Support Graduate | Data Engineer | Web Developer",
  location: "Johannesburg, South Africa",
  email: "admin@technospeak.co.za",
  website: "https://techno-speak.jnb1a.cloudlet.cloud/",
  summary:
    "Motivated Systems Support Graduate with NQF5 certification from Velisa Africa Academy (2025) and NQF5 Data Engineering from Explore Data Science Academy (2023). I am building my early career in IT support and digital solutions, with hands-on experience from founding YES TECH FIN while studying and supporting clients through Technospeak.",
  experience: [
    {
      role: "Founder",
      company: "YES TECH FIN",
      period: "2025 - Present",
      details:
        "Founded YES TECH FIN while doing my NQF5 Systems Support at Velisa Africa Academy. Built practical experience in client support, problem solving, and delivering simple technology solutions.",
    },
    {
      role: "Systems Support & Digital Assistance",
      company: "Technospeak",
      period: "2025 - 2026",
      details:
        "Supported individuals and small businesses with system support, task assistance, and user-friendly digital guidance. Strengthened communication, troubleshooting, and service delivery skills as an early-career graduate.",
    },
  ],
  education: [
    "NQF5 Systems Support, Velisa Africa Academy (2025)",
    "NQF5 Data Engineering, Explore Data Science Academy (2023)",
  ],
  skills: [
    "Systems Support & Troubleshooting",
    "Network Administration Basics",
    "Data Engineering Foundations",
    "Web Development",
    "Client Communication",
    "Public Speaking & Mentorship",
  ],
}

const pageSize = { width: 595.28, height: 841.89 } // A4
const margin = 50
const lineGap = 6

function splitText(text, font, size, maxWidth) {
  const words = text.split(" ")
  const lines = []
  let current = ""

  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word
    const width = font.widthOfTextAtSize(candidate, size)
    if (width <= maxWidth) {
      current = candidate
    } else {
      if (current) lines.push(current)
      current = word
    }
  }
  if (current) lines.push(current)
  return lines
}

const pdf = await PDFDocument.create()
const page = pdf.addPage([pageSize.width, pageSize.height])
const fontRegular = await pdf.embedFont(StandardFonts.Helvetica)
const fontBold = await pdf.embedFont(StandardFonts.HelveticaBold)

let y = pageSize.height - margin
const contentWidth = pageSize.width - margin * 2

function drawLine(text, options = {}) {
  const {
    size = 11,
    bold = false,
    color = rgb(0.12, 0.12, 0.12),
    indent = 0,
    spacingAfter = 0,
  } = options
  page.drawText(text, {
    x: margin + indent,
    y,
    size,
    font: bold ? fontBold : fontRegular,
    color,
  })
  y -= size + lineGap + spacingAfter
}

function drawParagraph(text, options = {}) {
  const { size = 11, indent = 0, spacingAfter = 0 } = options
  const maxWidth = contentWidth - indent
  const lines = splitText(text, fontRegular, size, maxWidth)
  for (const line of lines) {
    drawLine(line, { size, indent })
  }
  y -= spacingAfter
}

drawLine(profile.name, { size: 24, bold: true, color: rgb(0.08, 0.19, 0.42), spacingAfter: 2 })
drawLine(profile.title, { size: 12, color: rgb(0.16, 0.16, 0.16), spacingAfter: 8 })
drawLine(`${profile.location} | ${profile.email}`, { size: 10 })
drawLine(profile.website, { size: 10, color: rgb(0.0, 0.28, 0.67), spacingAfter: 10 })

drawLine("GRADUATE PROFILE", { size: 12, bold: true, color: rgb(0.08, 0.19, 0.42), spacingAfter: 2 })
drawParagraph(profile.summary, { size: 11, spacingAfter: 8 })

drawLine("GRADUATE EXPERIENCE", { size: 12, bold: true, color: rgb(0.08, 0.19, 0.42), spacingAfter: 2 })
for (const item of profile.experience) {
  drawLine(`${item.role} - ${item.company}`, { size: 11, bold: true })
  drawLine(item.period, { size: 10, color: rgb(0.35, 0.35, 0.35) })
  drawParagraph(item.details, { size: 11, indent: 10, spacingAfter: 6 })
}

drawLine("EDUCATION", { size: 12, bold: true, color: rgb(0.08, 0.19, 0.42), spacingAfter: 2 })
for (const edu of profile.education) {
  drawLine(`• ${edu}`, { size: 11, indent: 8 })
}
y -= 8

drawLine("KEY SKILLS", { size: 12, bold: true, color: rgb(0.08, 0.19, 0.42), spacingAfter: 2 })
for (const skill of profile.skills) {
  drawLine(`• ${skill}`, { size: 11, indent: 8 })
}

const bytes = await pdf.save()
await fs.writeFile(outputPath, bytes)
console.log(`Generated ${outputPath}`)
