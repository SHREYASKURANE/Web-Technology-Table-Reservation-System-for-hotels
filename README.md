# Restaurant Table Reservation System (MERN)

A full-stack MERN application for restaurant table management and reservations.

## Features
- **User Authentication**: Register, Login (JWT)
- **Table Management**: Admin can manage tables availability
- **Reservations**: Users can book tables with real-time updates
- **Visual Floor Plan**: Interactive map for table selection
- **Admin Dashboard**: Analytics and reservation management

## Tech Stack
- **Frontend**: React, Tailwind CSS, Vite, Recharts
- **Backend**: Node.js, Express, MongoDB, Socket.IO
- **Real-time**: Socket.IO

## Setup Instructions

### Prerequisites
- Node.js installed
- MongoDB installed and running locally

### 1. Server Setup
```bash
cd server
npm install
# Create .env file based on .env.example (Already created)
npm run dev
```
Server runs on http://localhost:5000

### 2. Client Setup
```bash
cd client
npm install
npm run dev
```
Client runs on http://localhost:5173

## Default Admin
Ideally, create a user via register page, then manually update their role to 'admin' in MongoDB using Compass or CLI for full admin access.

## Project Structure
- `/server` - Backend API
- `/client` - React Frontend
