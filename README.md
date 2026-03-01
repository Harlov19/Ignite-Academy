# Ignite Academy

![Ignite Academy](https://via.placeholder.com/800x200.png?text=Ignite+Academy)

A comprehensive, modern e-learning platform featuring a sleek React frontend and a robust Node.js backend. Ignite Academy enables user authentication, course browsing and enrollment, progress tracking, and secure payment processing.

## 🚀 Features

- **User Authentication**: Secure signup and login flow leveraging JWT and `bcryptjs`.
- **Course Management**: Explore available courses, enroll, and track your learning progress.
- **Payment Integration**: Seamless and secure checkouts utilizing Stripe, complete with webhook handling.
- **Email Notifications**: Automated email delivery using Nodemailer.
- **Responsive & Modern UI**: Fast, accessible, and beautiful interface built with React 19, Vite, and Tailwind CSS 4.
- **Type-Safe Database Interactions**: Solid and reliable Postgres database operations powered by Prisma ORM.

## 🛠️ Tech Stack

### Frontend (`/client`)
- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS 4
- **Routing**: React Router DOM 7
- **HTTP Client**: Axios
- **Icons**: Lucide React

### Backend (`/Backend/server`)
- **Runtime & Framework**: Node.js + Express 5
- **Database & ORM**: PostgreSQL + Prisma
- **Authentication**: JSON Web Tokens (JWT) & bcryptjs
- **Payments**: Stripe Checkout & Webhooks
- **Email**: Nodemailer

---

## ⚙️ Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [PostgreSQL](https://www.postgresql.org/)
- A [Stripe](https://stripe.com/) account (for testing payments)

### 1. Installation

Navigate to the project directory:
```bash
cd /path/to/ignite
```

**Backend Setup:**
```bash
cd Backend/server
npm install
```

**Frontend Setup:**
```bash
cd ../../client
npm install
```

### 2. Environment Variables

Create a `.env` file in the `Backend/server` directory and add the necessary configuration. Example:

```env
PORT=5000
DATABASE_URL="postgresql://username:password@localhost:5432/ignite_db"
JWT_SECRET="your_super_secret_jwt_key"
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
# Add your Nodemailer/SMTP config if applicable
```

### 3. Database Initialization

Navigate to the backend server directory (if not already there) and set up the Prisma database schema:

```bash
cd Backend/server
npx prisma generate
npx prisma db push
```
*(Alternatively, you can run `npx prisma migrate dev` if you are tracking migration history).*

### 4. Running the Application

You will need two terminal windows to run the client and the server simultaneously.

**Terminal 1: Start the Backend Server**
```bash
cd Backend/server
node server.js # or `npm run dev` if a dev script is configured
```
The server will start at `http://localhost:5000`.

**Terminal 2: Start the Frontend Client**
```bash
cd client
npm run dev
```
The client will start your Vite development server, usually at `http://localhost:5173`.

---

## 📁 Folder Structure

```text
ignite/
├── Backend/
│   └── server/             # Express server and API logic
│       ├── controllers/    # Route controllers (auth, course, payment, etc.)
│       ├── middlewares/    # Custom Express middlewares
│       ├── prisma/         # Prisma schema and migrations
│       ├── routes/         # API route definitions
│       ├── services/       # Business logic layer
│       └── server.js       # Main application entry point
├── client/                 # React frontend application
│   ├── public/             # Static assets
│   ├── src/                # React components, pages, and hooks
│   ├── eslint.config.js    # Linter configuration
│   ├── package.json        
│   └── vite.config.js      # Vite configuration
└── README.md               # Project documentation
```

## 📝 License

This project is licensed under the **ISC License**.
