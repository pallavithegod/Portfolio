# Pallavi Jain - Portfolio Website

A modern, animated, and fully responsive portfolio website built with React, Vite, Tailwind CSS, and GSAP. This site acts as a visual narrative companion to my resume.

## Tech Stack

- **Frontend:** React (Vite), Tailwind CSS
- **Animation:** GSAP, Framer Motion
- **Icons:** Lucide React
- **Backend:** Node.js, Express (for contact/fact forms)
- **Deployment:** Vercel / Azure (Planned)

## Setup Instructions

### Prerequisites
- Node.js installed.

### Client (Frontend)
1. Navigate to the `client` directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Server (Backend)
1. Navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
   (Or `node server.js` / `npx nodemon server.js` for development)

## Features

- **Animated Hero Section:** Interactive introduction with GSAP animations.
- **Projects Showcase:** S.T.A.R. format project descriptions with architectural diagrams.
- **Academic Snapshot:** Visual representation of academic achievements.
- **Personal Section:** Highlights music hobbies and includes a "Fact Share" feature.
- **Contact Form:** Functional form integrated with the backend API.
- **Custom Cursor:** Interactive cursor for desktop users.

## Future Improvements

- [ ] Integrate real email service (SendGrid/Nodemailer).
- [ ] Connect to a database (MongoDB/PostgreSQL) for storing messages/facts.
- [ ] Add a blog section.
- [ ] Admin dashboard for managing content.

---
*Built with ❤️ by Pallavi Jain*
