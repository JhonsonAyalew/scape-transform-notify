# scape-transform-notify

Plugin-driven job/queue framework (scrape → transform → notify)

## Tech Stack
- Python (FastAPI + Celery)
- Node.js (Express + Socket.IO)
- React (Vite)
- PostgreSQL
- Redis
- Docker Compose

## Overview
This project allows users to create jobs that run plugin-based scraping and transformations. The Node API handles requests and notifications, Python workers execute jobs, and the React dashboard shows live job status.

## Setup
1. Copy environment variables:
