# Mondenkuna TS Portfolio Project

A modern portfolio web application built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**.

This guide is written for complete beginners. Even if you have never used Next.js or React before, you can follow these step-by-step instructions to get this project running on your computer.

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started (Step-by-Step)](#getting-started-step-by-step)
  - [Step 1: Clone the Repository](#step-1-clone-the-repository)
  - [Step 2: Install Project Dependencies](#step-2-install-project-dependencies)
  - [Step 3: Run the Development Server](#step-3-run-the-development-server)
  - [Step 4: Open in Your Browser](#step-4-open-in-your-browser)
- [Available Scripts](#available-scripts)
- [Project Folder Structure](#project-folder-structure)
- [Key Technologies Used](#key-technologies-used)
- [Generating the Resume PDF](#generating-the-resume-pdf)
- [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before running this project, install these two free tools on your machine:

### 1. Node.js (Version 18 or Higher)

- Download and install the **LTS (Long Term Support)** version from **https://nodejs.org/**
- Installing Node.js automatically installs **npm (Node Package Manager)**, which downloads project dependencies and runs project scripts.

### 2. Git

- Download and install Git from **https://git-scm.com/**

---

# Getting Started (Step-by-Step)

## Step 1: Clone the Repository

Open **Command Prompt** (Windows) or **Terminal** (macOS/Linux), navigate to the folder where you want to save the project, then run:

```bash
git clone https://github.com/BMNKUNA/mondenkunats.git
cd mondenkunats
```

---

## Step 2: Install Project Dependencies

Next.js projects rely on packages listed in the `package.json` file.

Download all required dependencies by running:

```bash
npm install
```

> **Note:** This may take a minute or two depending on your internet connection.

---

## Step 3: Run the Development Server

Start the local development server by running:

```bash
npm run dev
```

You should see output similar to:

```text
▲ Next.js
- Local: http://localhost:3000
```

---

## Step 4: Open in Your Browser

Open your preferred browser (Chrome, Edge, Firefox, etc.) and visit:

```text
http://localhost:3000
```

The website should now be running locally.

Whenever you edit the source code, the browser will automatically refresh with the latest changes.

---

# Available Scripts

| Command | Description |
|----------|-------------|
| `npm run dev` | Starts the development server at `http://localhost:3000`. |
| `npm run build` | Creates an optimized production build. |
| `npm start` | Runs the production build after `npm run build`. |
| `node generate-resume-pdf.mjs` | Generates or exports the resume PDF. |

---

# Project Folder Structure

```
mondenkunats/
├── app/                      # Next.js App Router pages
│   ├── globals.css           # Global styles and Tailwind CSS
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
│
├── components/               # Reusable React components
│   ├── sections/             # Hero, About, Projects, Contact, etc.
│   ├── ui/                   # shadcn/ui components
│   ├── footer.tsx
│   ├── navigation.tsx
│   ├── theme-provider.tsx
│   └── whatsapp-button.tsx
│
├── hooks/                    # Custom React hooks
├── lib/                      # Shared utilities
├── public/                   # Static assets
├── styles/                   # Additional styling
│
├── generate-resume-pdf.mjs   # Resume PDF generation script
├── components.json           # shadcn/ui configuration
├── next.config.mjs           # Next.js configuration
├── package.json              # Project metadata and dependencies
├── package-lock.json         # Exact dependency versions
├── postcss.config.mjs        # PostCSS configuration
└── tsconfig.json             # TypeScript configuration
```

---

# Key Technologies Used

- **Next.js** – React framework for modern full-stack applications.
- **TypeScript** – Strongly typed JavaScript.
- **Tailwind CSS** – Utility-first CSS framework.
- **shadcn/ui** – Accessible and customizable UI component library.

---

# Generating the Resume PDF

This project includes a standalone script that exports the resume as a PDF.

Run:

```bash
node generate-resume-pdf.mjs
```

---

# Troubleshooting

### `'npm' is not recognized as an internal or external command`

Node.js is either not installed or your terminal needs to be restarted after installation.

---

### Port 3000 is already in use

If another application is using port **3000**, Next.js will ask whether you'd like to use another available port (such as **3001**).

Simply type:

```text
y
```

and press **Enter**.

---

### Module Not Found Errors

Delete the `node_modules` folder (if it exists) and reinstall all dependencies:

```bash
npm install
```

---

## License

This project is intended for educational and portfolio purposes.

---

**Author:** Monde Nkuna  
**Repository:** https://github.com/BMNKUNA/mondenkunats
