# Backend Structure Documentation

This document provides an overview of the backend architecture and directory structure for the project.

---

## `/backend`

The root folder for the backend application, containing the main server entry point and organized subdirectories for different backend functionalities.


# Backend Folder Structure

```plaintext
/backend
│   ├── /config          # Configuration files (e.g., environment variables, database config)
│   │   ├── sqlConfig.js
│   ├── /controllers     # Logic for API routes
│   │   ├── navStylesController.js
│   │   ├── portfolioManagerController.js
│   │   └── userController.js
│   ├── /database        # Database connection setup
│   │   ├── sql.js
│   ├── /middlewares     # Middlewares for authentication, validation, etc.
│   │   ├── adminMiddleware.js
│   │   └── authMiddleware.js
│   ├── /models          # Database models for MySQL and MongoDB
│   │   ├── aboutStylesModel.js
│   │   ├── contactStylesModel.js
│   │   ├── index.js
│   │   ├── portfolioManagerModel.js
│   │   ├── sectionStyleModel.js
│   │   └── userModel.js
│   ├── /routes          # API routes organized by feature
│   │   ├── aboutStylesRouter.js
│   │   ├── ContactStylesRouter.js
│   │   ├── index.js
│   │   ├── navStylesRouter.js
│   │   ├── portfolioManagerRouter.js
│   │   ├── sectionStylesRouter.js
│   │   └── userRoutes.js
│   ├── /seeders  
│   │   └──userSeeder.js
│   ├── /utils           # Utility functions (e.g., helpers, formatters)
│   │   ├── validation.js
│   │   └── logger.js
│   └── server.js        # Main entry point for the backend server
```

### `/config`
Configuration files for the project.

- **`sqlConfig.js`**: Contains database configuration details (e.g., connection parameters for MySQL).

---

### `/controllers`
Controllers contain the logic for handling API requests and responses.

- **`navStylesController.js`**: Handles CRUD operations for navigation styles.
- **`portfolioManagerController.js`**: Manages operations related to portfolio managers.
- **`userController.js`**: Contains logic for user-related actions, such as authentication and management.

---

### `/database`
Handles database connections and related initialization.

- **`sql.js`**: Establishes and manages the connection to the MySQL database.

---

### `/middlewares`
Custom middleware for handling request-specific operations like authentication and authorization.

- **`adminMiddleware.js`**: Middleware to check if the current user has admin privileges.
- **`authMiddleware.js`**: Middleware to verify JWT tokens and authenticate users.

---

### `/models`
Database models for MySQL (and MongoDB if needed). Each model defines the schema for a table or collection.

- **`aboutStylesModel.js`**: Defines the schema for "about styles."
- **`contactStylesModel.js`**: Defines the schema for "contact styles."
- **`index.js`**: Entry point for initializing and exporting all models.
- **`portfolioManagerModel.js`**: Defines the schema for managing portfolio managers.
- **`sectionStyleModel.js`**: Defines the schema for "section styles."
- **`userModel.js`**: Defines the schema for user management.

---

### `/routes`
Defines the API routes for the backend. Each route file is focused on a specific feature.

- **`index.js`**: Group and handles all of the project for clarity.
- **`authRoutes.js`**: Handles routes for authentication (e.g., login, register).
- **`portfolioRoutes.js`**: Routes for portfolio management features.
- **`userRoutes.js`**: Routes related to user management.

---

### `/seeders`
Defines the API routes for the backend. Each route file is focused on a specific feature.
to run the seeders type : **`docker exec -it portfoliomaker-backend-1 npx sequelize-cli db:seed:all`**

- **`create-users.js`**: Seed the database with fake information (default 1 admin and 25).
- **`navigate-styles-seeders.js`**: Seed the database with 5 navigation styles .


---

### `server.js`
The main entry point for the backend server. Responsible for:

1. Initializing and configuring the Express app.
2. Connecting to the database.
3. Setting up routes, middleware, and error handling.

---

## Development Notes
- **Organized Directory**: The structure separates concerns, making the codebase easy to maintain and scale.
- **Scalability**: New features can be added by creating corresponding models, controllers, and routes.
- **Reusability**: Services and utilities encourage code reuse, reducing duplication.

--- 

For API-specific documentation, refer to `docs/backend/API.md`.
