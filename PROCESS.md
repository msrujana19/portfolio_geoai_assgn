1. Architecture: Folder Structure Decision

This project follows a component-based architecture using React + Vite, which is well-suited for building a scalable Single Page Application (SPA).

Folder Structure Overview
src/
 ├── components/
 │    ├── Hero.jsx
 │    ├── Navigation.jsx
 │    ├── TechStack.jsx
 │    ├── Projects.jsx
 │    ├── Footer.jsx
 │    └── corresponding CSS files
 ├── photo/
 │    └── profile.webp
 ├── App.jsx
 ├── main.jsx
 └── index.css

Why this structure?

Separation of concerns:
Each UI section (Hero, Tech Stack, Projects, Footer) is isolated into its own component, making the code easier to maintain and debug.

Reusability & readability:
Components can be reused or modified independently without affecting the rest of the application.

Performance-friendly:
Vite enables fast builds and optimized bundling, which helps improve loading speed.

Scalable:
New sections (blogs, achievements, etc.) can be added easily without restructuring the entire project.

2. AI Usage: Prompt Engineering & AI Assistance

I used Claude AI as a development assistant to speed up UI creation, structure the application, and refine responsiveness and accessibility.

Primary Prompt Used
React.js (Vite/CRA), HTML/CSS — use these and help me create a portfolio page.

Your portfolio must be a Single Page Application (SPA) containing:

1. Hero Section:
   - Name
   - Role ("Gesix GeoAI Intern")
   - Professional summary

2. Tech Stack:
   - A visual grid of skills
   - Separate "Proficient" (Can code without Google)
     from "Familiar" (Need documentation)

3. Project Showcase (Critical):
   - Cards displaying previous projects (Academic/Hackathon)
   - MANDATORY: Each card must have a direct link to the GitHub Repository
   - MANDATORY: A 2-line description explaining the problem solved

4. Publications:
   - Include only if applicable (do not include if none)

5. Footer:
   - Links to LinkedIn, GitHub/GitLab, and Email

The site must be fully responsive and functional on mobile devices.

How AI was used responsibly

AI generated initial layout and component structure

I manually edited:

Content wording

Styling

Folder structure

Performance optimizations

Accessibility fixes

All logic, deployment, debugging, and optimization decisions were done by me

AI was used as a productivity tool, not a replacement for understanding.

3. Challenges Faced & How I Solved Them
Challenge: Poor Lighthouse Performance & Accessibility Issues

After deploying the site to Vercel, I noticed:

Low mobile Lighthouse performance score

Warnings about:
Unused JavaScript & CSS
Render-blocking resources
Missing accessibility labels
Large LCP (hero image)

How I fixed it

Image optimization
Compressed and converted the hero image to WebP
Added proper width, height, and alt attributes

Accessibility improvements

Added aria-label to navigation links and social icons
Ensured buttons and links had discernible names

Performance tuning

Reduced unnecessary CSS
Optimized font loading (display=swap)
Verified production build with vite build and vite preview
Understanding trade-offs

Learned that React SPAs naturally score lower on mobile PageSpeed due to JS hydration

Focused on real optimizations rather than artificial score inflation

This process helped me better understand real-world performance trade-offs and how to balance UI quality with optimization.
