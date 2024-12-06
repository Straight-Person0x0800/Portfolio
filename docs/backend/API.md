# API Documentation

This document provides an overview of the API endpoints available in the backend application.

---

## **Users API**

### **Base URL:** `/api/users`

| HTTP Method | Endpoint   | Description              | Middleware                  | Required Fields                                   |
|-------------|------------|--------------------------|-----------------------------|-------------------------------------------------|
| POST        | `/register`| Add a new user           | None                        | `name`, `email`, `password`                     |
| GET         | `/`        | Get all users            | `authMiddleware`, `adminMiddleware` | None                                            |
| POST        | `/login`   | Login a user             | None                        | `email`, `password`                             |
| GET         | `/`     | Get user by ID           | `authMiddleware`            |  None                   |
| PUT         | `/`     | Update a user            | `authMiddleware`            | `name`, `email` |
| DELETE      | `/`     | Soft delete a user       | `authMiddleware`            |      None                  |


---

## **Portfolio Manager API**

### **Base URL:** `/api/portfolio`

| HTTP Method | Endpoint         | Description                       | Middleware       |
|-------------|------------------|-----------------------------------|------------------|
| GET         | `/`              | Fetch all portfolios             | `authMiddleware` |
| POST        | `/add`           | Add a new portfolio              | `authMiddleware` |
| GET         | `/:id`           | Get a portfolio by ID            | `authMiddleware` |

---

## **Navigation Styles API**

### **Base URL:** `/api/nav_styles`

| HTTP Method | Endpoint         | Description                       | Middleware |
|-------------|------------------|-----------------------------------|------------|
| GET         | `/`              | Get all navigation styles         | None       |
| GET         | `/:id`           | Get a navigation style by ID      | None       |
| POST        | `/add`           | Add a new navigation style        | None       |

---

## **Authentication and Middleware**

### Middleware Used:
- `authMiddleware`: Ensures that the user is authenticated before accessing certain endpoints.
- `adminMiddleware`: Verifies that the user has administrative privileges.

### Authentication Flow:
1. **User Login**:
   - Endpoint: `/api/users/login`
   - Upon successful login, a JWT token is returned to the client.
2. **Using JWT**:
   - Attach the token in the `Authorization` header (`Bearer <token>`) for endpoints requiring authentication.

---

## **Notes**
- **Soft Delete**: The `DELETE /api/users/:id` endpoint marks a user as deleted by setting the `deleted` flag to `true` in the database, instead of removing the record permanently.
- **JWT Protection**: Endpoints with `authMiddleware` require a valid JWT token in the `Authorization` header.

