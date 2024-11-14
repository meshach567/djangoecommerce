# Fullstack E-Commerce Platform

This project is a mini e-commerce application built to demonstrate my skills in mobile, backend, and web development using **Flutter (Dart)**, **Django (Python)**, and **Next.js (Node.js)**. The application includes a Flutter mobile app, a Django REST API backend, and a Next.js admin dashboard.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [System Architecture](#system-architecture)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [CI/CD Pipeline](#cicd-pipeline)
- [Database Schema](#database-schema)
- [Scaling & Optimization](#scaling--optimization)
- [Testing](#testing)
- [Screenshots](#screenshots)
- [License](#license)

---

## Project Overview

This e-commerce platform includes:

1. **Mobile App (Flutter)** - Allows users to browse products, add items to the cart, and place orders.
2. **Backend API (Django)** - Provides product management, user authentication, and order management through RESTful endpoints.
3. **Admin Dashboard (Next.js)** - A web interface for managing products and viewing orders.

## Features

### Mobile Application (Flutter)
- **Product Browsing**: View a list of products fetched from the Django API.
- **Cart Functionality**: Add/remove products to/from the cart.
- **User Authentication**: JWT-based login and registration.
- **Responsive UI/UX**: Mobile-friendly interface with simple navigation.

### Backend API (Django)
- **Product Management**: CRUD operations for products.
- **User Authentication**: Registration, login, and JWT-based auth.
- **Order Management**: Place and retrieve orders.
- **Database**: PostgreSQL with indexed fields for optimized performance.

### Admin Dashboard (Next.js)
- **Product Management**: Create, edit, delete, and list products.
- **Order Viewing**: List recent orders with user details.
- **Responsive Design**: Mobile and desktop-friendly.

## Tech Stack

- **Mobile**: Flutter (Dart)
- **Backend**: Django (Python), PostgreSQL
- **Web Admin**: Next.js (Node.js, TypeScript)
- **CI/CD**: GitHub Actions, Docker, AWS

## System Architecture


## Getting Started

### Prerequisites

- **Flutter**: v3.10.0 or later
- **Python**: v3.10 or later
- **Node.js**: v18.x
- **PostgreSQL**: v13 or later
- **Docker**: v24.x
- **Git**

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/meshach567/djangoecommerce.git
cd ecommerce-platform

cd backend
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
pip install -r requirements.txt
python manage.py migrate
python manage.py runservers 

cd ../mobile
flutter pub get
flutter run

cd ../frontend
npm install
npm run dev
