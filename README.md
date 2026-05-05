# Fluxyn — AI-Powered Website Builder

Fluxyn is a high-performance, cinematic AI website builder designed to transform natural language descriptions into production-ready React code. Built with a focus on premium aesthetics, Fluxyn utilizes a monochrome design system, liquid-glass effects, and fluid animations to provide a state-of-the-art creation experience.

## 🚀 Features

- **AI-Driven Generation**: Powered by Google Gemini 2.0 Flash to synthesize full-stack frontend code from simple prompts.
- **Cinematic UI**: Full-page video backgrounds, scroll-driven word reveals, and liquid-glass components.
- **Monochrome Design System**: A clean, professional dark-mode aesthetic using HSL-based design tokens.
- **Project Dashboard**: A dedicated workspace to manage generations and explore templates.
- **Real-time Preview**: Integrated iframe-based preview for instant visualization of AI-generated websites.

---

## 📂 Project Structure

The project is split into a **Client-Server** architecture:

### 🖥️ Backend (Node.js/Express)
```text
backend/
├── src/
│   ├── controllers/   # Logic for AI generation
│   ├── routes/        # API endpoint definitions
│   └── index.js       # Entry point & Server config
├── .env               # Environment variables (API keys)
└── package.json       # Backend dependencies
```

### 🎨 Frontend (React/Vite/TS)
```text
frontend/
├── src/
│   ├── components/    # Reusable UI sections & Dashboard components
│   ├── pages/         # Main application routes (Landing, Build, Resources)
│   ├── services/      # Axios API integration
│   ├── lib/           # Animation helpers and styling utilities
│   ├── App.tsx        # Routing logic
│   └── index.css      # Global styles & Liquid Glass implementation
├── public/            # Static assets & cinematic videos
└── package.json       # Frontend dependencies
```

---

## 🛠️ Local Setup Instructions

Follow these steps to get Fluxyn running on your local machine.

### 1. Clone the Repository
```bash
git clone https://github.com/Apurvk28/Fluxyn.git
cd Fluxyn
```

### 2. Configure & Run Backend
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend/` root and add your Gemini API Key:
   ```env
   PORT=8000
   GEMINI_API_KEY=your_gemini_api_key_here
   ```
   *Get your key at: [Google AI Studio](https://aistudio.google.com/app/apikey)*
4. Start the server:
   ```bash
   node src/index.js
   ```
   The backend will run on `http://localhost:8000`.

### 3. Configure & Run Frontend
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`).

---

## 🧬 Technology Stack

- **Frontend**: React 19, Vite, TypeScript, Tailwind CSS, Framer Motion, Lucide React.
- **Backend**: Node.js, Express, Axios.
- **AI**: Google Generative AI (Gemini 2.0 Flash).
- **Styling**: Vanilla CSS (Liquid Glass), Tailwind Utilities.

---

## 📄 License
© 2026 Fluxyn. All rights reserved.
