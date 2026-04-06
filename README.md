# Finance Dashboard Backend

## Overview
This project is a backend system for a finance dashboard that manages users, financial records, and analytical insights. It demonstrates backend architecture, role-based access control(RBAC), and API design using Node.js and MongoDB.

---

## 🌐 Live API

Base URL:
https://zorvyn-assignment-sushilkumar.onrender.com

## 📘 API Docs
https://zorvyn-assignment-sushilkumar.onrender.com/api-docs

---

## Features

### Authentication & Authorization
- User signup and login using JWT
- Role-based access control (RBAC)
- Roles: ADMIN, ANALYST, VIEWER
- Protected routes using middleware
- Automatic admin seeding to ensure system usability

### User Management (Admin Only)
- Create users
- Update user roles and status
- Delete users
- View all users

### Financial Records
- Create, update, delete records (Admin)
- View records (Admin, Analyst)
- Filtering by type, category, date
- Pagination support

### Dashboard Analytics
- Total income and expenses
- Net balance
- Category-wise totals
- Monthly trends
- Recent transactions

---

## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Swagger (API Documentation)

---

## Project Structure

```
src/
├── controllers/
├── services/
├── models/
├── routes/
├── middlewares/
├── utils/
├── constants/
├── config/
└── app.js

server.js
```

---

## Installation & Setup

### 1. Clone Repository
```
git clone https://github.com/Sushilkumar5572/Zorvyn-Assignment.git
cd your-repo-name
```

### 2. Install Dependencies
```
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root:

```
PORT=5000
MONGO_URI=your_mongodb_URI
JWT_SECRET=your_secret_key
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
```

## Initial Admin Setup

By design, all newly registered users are assigned the `VIEWER` role.  
Only users with the `ADMIN` role are allowed to manage users and update roles.

To avoid a locked system (where no admin exists), if no admin is found in the database. a default admin user is automatically created with the credientials you provide in .env file as mentioned above when the server starts.

### 4. Run Server
```
npm start
```

Server will start at:
```
http://localhost:5000
```

---

## API Documentation (Swagger)

Access Swagger UI at:
```
http://localhost:5000/api-docs
```

You can:
- View all endpoints
- Test APIs directly
- Authorize using JWT token

---

## API Endpoints

### Auth
- POST /api/auth/register  (only user with VIEWER role)
- POST /api/auth/login

### Users (Admin)
- POST /api/users
- GET /api/users
- GET /api/users/:id
- PUT /api/users/:id
- DELETE /api/users/:id

### Records
- POST /api/records
- GET /api/records
- GET /api/records/:id
- PUT /api/records/:id
- DELETE /api/records/:id

### Dashboard
- GET /api/dashboard/summary
- GET /api/dashboard/category-totals
- GET /api/dashboard/monthly-trends
- GET /api/dashboard/recent-records

---

## Roles & Permissions

| Role    | Permissions |
|---------|------------|
| Viewer  | View dashboard only |
| Analyst | View records and dashboard |
| Admin   | Full access (users + records) |

---

## Key Concepts Implemented

- Layered architecture (Controller → Service → Model)
- Role-based access control (RBAC)
- JWT authentication
- API validation and error handling
- MongoDB aggregation for analytics
- Swagger documentation

---

## Assumptions

- Each record belongs to a single user
- Only admins can modify records
- Users must be active to access APIs
- Dates are stored in standard format

---

## Future Improvements

- Refresh token implementation
- Rate limiting
- Unit and integration testing
- Advanced analytics
- Frontend integration

---

## Author

Sushilkumar Utkekar