# 🔐 Password Reset Flow - Frontend

This is the frontend of a full-stack **Password Reset Flow** web application built using **React**, **React Router**, **Tailwind CSS**, and **Vite**. It allows users to register, log in, and securely reset their passwords through email verification and tokenized reset links.

## 🚀 Live Demo

👉 [Click here to view the live site](https://passwordreset-flow-frontend.netlify.app/)

> Example reset link (ensure the token is valid and not expired):
> `https://passwordreset-flow-frontend.netlify.app/reset-password/<token>`

---

## 📁 Project Structure

```
password_reset_flow-frontend/
├── public/
├── src/
│   ├── assets/
│   ├── context/
│   ├── pages/
│   │   ├── ForgotPassword.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── ResetPassword.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── Home.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── vite.config.js
```

---

## ⚙️ Tech Stack

* **React** – SPA framework
* **React Router DOM** – Routing and navigation
* **Tailwind CSS** – Utility-first styling
* **Vite** – Fast dev server and bundler
* **Context API** – Auth state management

---

## 📦 Installation

```bash
git clone https://github.com/your-username/password-reset-frontend.git
cd password-reset-frontend
npm install
npm run dev
```

---

## 🌐 Routes Overview

| Route                    | Description                        |
| ------------------------ | ---------------------------------- |
| `/`                      | Home page                          |
| `/register`              | Register a new user                |
| `/login`                 | Login with email & password        |
| `/forgotPassword`        | Request password reset email       |
| `/reset-password/:token` | Reset password using emailed token |

---


## 🥪 Testing

* Try registering a new user
* Trigger a forgot password email
* Click the reset link from email
* Use the tokenized `/reset-password/:token` route

---

## ✅ Backend Repository

🔗 [Password Reset Flow - Backend](https://github.com/your-username/password-reset-backend)

---
📦 Deployment

This project is deployed using Netlify:

➡️ https://passwordreset-flow-frontend.netlify.app

Make sure to enable redirects by adding the following rule in netlify.toml or a _redirects file:

`/*    /index.html   200`

📌 Notes

Always hide your API keys and tokens using environment variables.

For production, ensure CORS is correctly configured on the backend.

---

## 📄 License

MIT © 2025 [Subramaniyajothi S](https://github.com/Subramaniyajothi6)

---

