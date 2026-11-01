# Restaurant Table Reservation System

A Node.js and Express backend for a restaurant table reservation application. The current repository contains the server-side entry point and supporting backend files; the React client described in earlier documentation is not present in this repository snapshot.

## Implemented backend structure

- Express server with JSON request parsing
- MongoDB connection through a dedicated database module
- JWT-oriented authentication routes
- Table and reservation route modules
- Waitlist and audit-log route modules
- Socket.IO server for real-time client communication
- Request logging with Morgan
- Environment-based configuration with dotenv

## Technology stack

- **Runtime:** Node.js
- **Backend:** Express
- **Database:** MongoDB / Mongoose
- **Authentication:** JSON Web Token and bcryptjs (dependencies)
- **Real-time communication:** Socket.IO
- **Middleware:** CORS, Helmet, Morgan, dotenv

## Getting started

### Prerequisites

- Node.js and npm
- A local MongoDB instance or MongoDB connection string

### 1. Clone and install

```bash
git clone https://github.com/SHREYASKURANE/Web-Technology-Table-Reservation-System-for-hotels.git
cd Web-Technology-Table-Reservation-System-for-hotels
npm install
```

### 2. Configure environment variables

Copy the example file and replace the placeholder values:

```bash
# Windows PowerShell
Copy-Item .env.example .env

# macOS / Linux
cp .env.example .env
```

Set a private MongoDB connection string and a strong, unique JWT secret in `.env`. Never commit `.env` or publish credentials.

### 3. Run the server

```bash
npm run dev
```

The server listens on port `5000` by default, or the port configured through `PORT`.

## API route groups

The server mounts these route groups:

| Route prefix | Purpose |
|---|---|
| `/api/auth` | Authentication |
| `/api/tables` | Table management |
| `/api/reservations` | Reservations |
| `/api/waitlist` | Waitlist |
| `/api/audit-logs` | Audit logs |

Check the route modules for the currently implemented endpoints and request formats.

## Development notes

- Configure a specific allowed frontend origin before production deployment; do not leave permissive CORS settings in a public production environment.
- Add automated tests and API documentation as the project evolves.
- The frontend, deployment configuration, and production readiness should be documented only when those components are present and verified.

## Author

**Shreyas Kurane**  
[GitHub](https://github.com/SHREYASKURANE) · [LinkedIn](https://www.linkedin.com/in/shreyas-kurane-2344b52a0)
