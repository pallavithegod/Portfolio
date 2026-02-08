# Deployment Guide

This project is a monorepo containing a **React frontend (Vite)** and a **Node.js backend (Express)**.

## 1. Frontend Deployment (Vercel)
Vercel is the recommended platform for the React frontend.

1.  Push your code to **GitHub**.
2.  Go to [Vercel](https://vercel.com) and sign up/login.
3.  Click **"Add New..."** -> **"Project"**.
4.  Import your repository.
5.  Configure the project:
    *   **Root Directory:** `client` (Very Important!)
    *   **Framework Preset:** Vite (Should be auto-detected)
    *   **Build Command:** `npm run build`
    *   **Output Directory:** `dist`
    *   **Environment Variables:**
        *   `VITE_API_URL`: The URL of your deployed backend (e.g., `https://your-backend.onrender.com`). *You will add this AFTER deploying the backend.*

6.  Click **Deploy**.

## 2. Backend Deployment (Render)
Render is a great free option for Node.js backends.

1.  Go to [Render](https://render.com) and sign up/login.
2.  Click **"New +"** -> **"Web Service"**.
3.  Connect your GitHub repository.
4.  Configure the service:
    *   **Root Directory:** `server` (Very Important!)
    *   **Runtime:** Node
    *   **Build Command:** `npm install`
    *   **Start Command:** `npm start`
    *   **Environment Variables:**
        *   Add any secrets if you have them (e.g., `MONGO_URI`, `EMAIL_USER`, `EMAIL_PASS`).
        *   `PORT`: `5000` (or Render will assign one automatically).

5.  Click **Create Web Service**.
6.  Once deployed, copy the **URL** (e.g., `https://your-backend.onrender.com`).

## 3. Connect Frontend to Backend
1.  Go back to your **Vercel Project Settings**.
2.  Go to **Environment Variables**.
3.  Add/Edit `VITE_API_URL` with your Render Backend URL (e.g., `https://your-backend.onrender.com`). **Do not add a trailing slash.**
4.  Go to **Deployments** in Vercel and **Redeploy** the latest commit for the changes to take effect.

## local Development
To fun locally:
1.  **Backend:**
    ```bash
    cd server
    npm install
    npm run dev
    ```
2.  **Frontend:**
    ```bash
    cd client
    npm install
    # Create a .env file in client/ with: VITE_API_URL=http://localhost:5000
    npm run dev
    ```
