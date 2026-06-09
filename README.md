# 🚀 Shivansh Shukla — Professional Developer Portfolio

A high-performance, responsive developer portfolio website built with **Next.js**, **TypeScript**, and **Tailwind CSS v4**. Engineered with a product-minded perspective, featuring premium animations, context-aware theme switching, and modular, recruiter-centric storytelling.

🌐 **Live Website:** [https://shivanshs673s.vercel.app](https://shivanshs673s.vercel.app)

---

## 🎨 Design & Key Features

*   **⚡ GPU-Accelerated Performance:** Uses hardware-accelerated transforms (`translate3d` coordinates) mapping GSAP `ScrollTrigger` animations directly to GPU rendering. Eliminates CPU-heavy blur triggers, guaranteeing a smooth 120fps scrolling experience.
*   **🌓 Adaptive Light/Dark Theme:** Styled variables built natively into Tailwind CSS v4 to support context-aware theme toggles. Utilizes a custom theme-responsive SVG tab icon configured with `@media (prefers-color-scheme)` queries.
*   **📖 Collapsible behind-the-code stories:** Offers clear and detailed "Behind the Code" sections for all key projects, describing the **Why I Built It**, **Key Technical Challenges**, **Impact**, and **My Learnings** for recruiters.
*   **🏆 Professional Credentials section:** Displays verified Infosys Springboard certifications (Software Engineering & Agile Software Development; Angular Web Developer) equipped with direct digital verification and PDF download actions.
*   **✉️ Secure contact workflow:** Backed by Next.js API route integrating **Resend**. Includes smart client-side error states and an automated `mailto:` pre-filled draft fallback.

---

## 🛠️ Technology Stack

| Category | Technology |
| :--- | :--- |
| **Core Architecture** | [Next.js](https://nextjs.org/) (App Router, Turbopack), [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/) |
| **Styling & Layout** | [Tailwind CSS v4](https://tailwindcss.com/), [Lucide Icons](https://lucide.dev/) |
| **Animation Suite** | [GSAP](https://gsap.com/) (ScrollTrigger), [Framer Motion](https://www.framer.com/motion/), [Lenis Scroll](https://lenis.darkroom.engineering/) |
| **Backend & APIs** | [Resend Email API](https://resend.com/), Next.js API Routes |

---

## 📂 Project Structure

```text
├── public/                 # Static assets (Certificates, PDFs, assets)
├── src/
│   ├── app/                # Next.js App Router (Layouts, routes, APIs, favicon configurations)
│   │   ├── api/            # API Route endpoints (Contact form)
│   │   ├── icon.svg        # Theme-responsive browser tab SVG favicon
│   │   └── globals.css     # CSS Variables and Tailwind core setup
│   ├── components/         # Reusable layout and layout components
│   │   ├── motion/         # Animation elements (GSAP and Framer Motion wrappers)
│   │   ├── sections/       # UI Sections (Hero, About, Projects, Experience, Certifications, Contact)
│   │   ├── ui/             # Reusable UI primitives (Buttons, Cards, Badges, Inputs)
│   │   └── logo.tsx        # Custom SVG Developer Logo Component
│   ├── hooks/              # Custom React Hooks
│   ├── lib/                # Config files, constants, and helper data scripts
```

---

## 🚀 Getting Started

To run the project locally, follow these steps:

### Prerequisites

*   [Node.js](https://nodejs.org/) (v18.x or higher recommended)
*   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/shivanshs673/protfolio.git
    cd protfolio
    ```

2.  **Install the dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Variables:**
    Create a `.env.local` file in the root directory and append your Resend API credentials:
    ```env
    RESEND_API_KEY=your_resend_api_key_here
    RESEND_FROM_EMAIL=Portfolio <onboarding@resend.dev>
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser to view the local site.

5.  **Build for Production:**
    To test the production Turbopack compilation and TS compilation:
    ```bash
    npm run build
    ```

---

## ⚖️ License

Distributed under the MIT License. See `LICENSE` for more details.
