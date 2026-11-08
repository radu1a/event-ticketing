# Event Booking

A full-stack event booking application built with React, Node.js, Express and PostgreSQL.

## Tech Stack

**Frontend**
- React
- Vite
- JavaScript (ES Modules)

**Backend**
- Node.js
- Express
- Sequelize ORM
- JavaScript (ES Modules)

**Database**
- PostgreSQL

**Infrastructure**
- Docker
- Docker Compose

## Project Structure

```text
event-ticketing/
├── frontend/       # React application
├── backend/        # Express REST API
├── compose.yaml    # Docker Compose configuration
├── .env.example    # Docker environment variables
└── README.md
```

## Prerequisites

Before starting, make sure you have installed:

- Git
- Docker Desktop (Windows/macOS) or Docker Engine with Docker Compose (Linux)

You do not need to install Node.js, npm or PostgreSQL locally. Docker handles these dependencies.

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd event-ticketing
```

### 2. Configure environment variables

Create local environment files from the provided examples:

```bash
cp .env.example .env
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

These files contain the configuration required by Docker Compose, the backend and the frontend.

You can modify their values if necessary.

**Note:** Never commit actual `.env` files. Only `.env.example` files should be tracked by Git.

### 3. Start the application

Make sure Docker Desktop is running, then execute:

```bash
docker compose up --build
```

This command builds the application images, creates the containers and starts all services.

On subsequent runs, you can use:

```bash
docker compose up
```

### 4. Access the application

Once all services are running:

| Service | URL |
|---|---|
| Frontend | http://localhost:5173 |
| Backend API | http://localhost:3000 |
| Backend health check | http://localhost:3000/api/health |
| PostgreSQL | localhost:5432 |

## Useful Docker Commands

Start services in the background:

```bash
docker compose up -d
```

View running containers:

```bash
docker compose ps
```

View logs:

```bash
docker compose logs -f
```

View backend logs:

```bash
docker compose logs -f backend
```

Stop services:

```bash
docker compose down
```

Stop services and delete all volumes:

```bash
docker compose down -v
```

**Warning:** The last command permanently deletes the PostgreSQL data stored in the Docker volume.

## Development

The project uses Docker volumes to synchronize local source code with the containers.

Changes made to frontend and backend source files are reflected automatically through hot reload.

When adding or removing npm dependencies, update the corresponding `package.json` and `package-lock.json`. Rebuild the affected service:

```bash
docker compose up --build -d backend
```

Or, for frontend dependencies:

```bash
docker compose up --build -d frontend
```

## Environment Variables

The project uses separate environment files:

- Root `.env` – Docker Compose and PostgreSQL configuration.
- `backend/.env` – Backend application configuration.
- `frontend/.env` – Frontend application configuration.

Frontend variables exposed to the browser must use the `VITE_` prefix. Never store secrets in frontend environment variables.

## Git Workflow

Do not commit:

- `.env` files
- `node_modules/`
- Build output (`dist/`)
- Logs and coverage reports

Always commit:

- `package.json`
- `package-lock.json`
- `.env.example` files
- Source code and configuration files

