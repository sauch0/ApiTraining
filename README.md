# Mercy Technology API Training Project

This is a RESTful API project built with Node.js, Express, TypeScript, and TypeORM. It connects to a MySQL database to manage students, courses, and enrollments.

## Prerequisites

Before setting up the project, ensure you have the following installed:
- Node.js
- npm
- MySQL

## Getting Started

Follow these steps to set up the project on your local machine.

### 1. Clone the repository

```bash
git clone https://github.com/sauch0/ApiTraining.git
cd ApiTraining
```

### 2. Install dependencies

```bash
npm install
```

### 3. Database Setup

Ensure you have a MySQL server running locally. You will need to create a database named `training` (or update `src/config/data-source.ts` to match your database credentials).

### 4. Run Migrations

Before starting the server, run the database migrations to set up the required tables (`Students`, `Courses`, `Enrollments`).

```bash
npm run migration
```

### 5. Start the Development Server

Start the server using `npm run dev` script:

```bash
npm run dev
```

The server should now be running. Check your console to see the database connection success message.
