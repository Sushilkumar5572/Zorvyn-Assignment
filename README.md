# Finance Dashboard Backend

## Overview
This project is a backend system for a finance dashboard that manages users, financial records, and analytical insights. It demonstrates backend architecture, role-based access control(RBAC), and API design using Node.js and MongoDB.

---

## Features

### Authentication & Authorization
- User signup and login using JWT
- Role-based access control (RBAC)
- Roles: ADMIN, ANALYST, VIEWER
- Protected routes using middleware

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
git clone https://github.com/your-username/your-repo-name.git
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
MONGO_URI=mongodb://127.0.0.1:27017/financeDB
JWT_SECRET=your_secret_key
```

### 4. Run Server
```
npm run dev
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
- POST /api/auth/register
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