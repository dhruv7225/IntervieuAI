# IntervieuAI 🎯

**IntervieuAI** is an AI-powered mock interview preparation platform that generates customized interview questions based on your input. It uses speech-to-text for answering, provides AI-driven feedback, and saves every session — making your interview prep smarter and more interactive.

🌐 Live Demo: [intervieuai.codeofbytes.com](https://intervieuai.codeofbytes.com/)

---

## ✨ Features

- 🧠 **AI-Based Question Generation** using Gemini API
- 📝 **Form-Based Input** for:
  - Job position
  - Experience level
  - Tech stack
  - Number of questions
- 🎤 **Answer with Your Voice** using `react-hook-speech-to-text`
- 🤖 **Instant AI Feedback** on your spoken answers
- 📁 **All Sessions Are Saved** to Firestore for future review
- 📄 **Export Q&A as PDF** using `jsPDF`
- 🔐 **Authentication** via Clerk

---

## 🧠 Tech Stack

<p align="left">
  <img src="https://img.shields.io/badge/React-18.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-4.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-4.x-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Clerk_Auth-Auth-4A5568?style=for-the-badge&logo=clerk&logoColor=white" />
  <img src="https://img.shields.io/badge/Firebase-Firestore-FFCA28?style=for-the-badge&logo=firebase&logoColor=white" />
  <img src="https://img.shields.io/badge/Gemini_AI-API-4285F4?style=for-the-badge&logo=google&logoColor=white" />
  <img src="https://img.shields.io/badge/jsPDF-PDF_Export-F44336?style=for-the-badge&logo=adobe-acrobat-reader&logoColor=white" />
  <img src="https://img.shields.io/badge/Speech_To_Text-react--hook--speech--to--text-3B82F6?style=for-the-badge&logo=google&logoColor=white" />
</p>

---

## 🧪 Core Workflow

### 🎤 Voice-Based Answering

- User inputs job details and number of questions
- Questions are generated via Gemini AI
- User speaks their answers via mic (speech-to-text)
- Gemini API provides feedback on those answers
- Entire session (questions, answers, feedback) is saved to Firestore
- Users can generate topic wise questions and export the it with PDF

---

## 📸 Screenshots

### 🏠 Home Page

<img width="1710" height="1107" alt="Screenshot 2025-07-16 at 10 22 28 PM" src="https://github.com/user-attachments/assets/dad5bd1e-c05a-42c5-90f1-58aecdff1bb9" />

### 📄 All Mock Interviews 
<img width="1710" height="1107" alt="Screenshot 2025-07-16 at 10 30 08 PM" src="https://github.com/user-attachments/assets/2ab90e30-cecc-4344-b750-3f8a43eed6cb" />

### ⚙️ Prepare Interview Page
<img width="1710" height="1107" alt="Screenshot 2025-07-16 at 10 30 45 PM" src="https://github.com/user-attachments/assets/928ac400-fa7a-4ed1-a4ac-c98b8bfcd00c" />

### 🎤 Answer with Speech + Feedback
<img width="1710" height="1107" alt="Screenshot 2025-07-16 at 10 30 26 PM" src="https://github.com/user-attachments/assets/e95158e2-5034-4dbf-8458-c7ce443fab43" />

### 📄 Generate Q&A and Export PDF
<img width="1710" height="1107" alt="Screenshot 2025-07-16 at 10 29 50 PM" src="https://github.com/user-attachments/assets/56bd10c8-61c7-4998-8137-db894c7bc07a" />

