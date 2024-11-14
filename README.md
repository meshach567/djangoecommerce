# Fullstack MINI E-Commerce Platform

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

## Setup Instructions

### Backend Setup (Django REST API)

1. Clone the repository:
```bash
git clone https://github.com/your-username/ecommerce-platform.git
cd ecommerce-platform/backend
```

2. Create and activate a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Set up environment variables:
```bash
cp .env.example .env
# Edit .env file with your configurations:
# DATABASE_URL=postgresql://postgres:password@localhost:5432/fruits
# SECRET_KEY=django-insecure-0br2ec#)4c2=(%uv!kp8#v99k*f^&zky8u)u(nr&*rz4%f1_%7
```

5. Run migrations:
```bash
python manage.py migrate
```

6. Create superuser:
```bash
python manage.py createsuperuser
```

7. Start the development server:
```bash
python manage.py runserver
```

8. Login to admin
``` bash
email: meshacharinze@gmail.com
password: 1234567890
```

### Mobile App Setup (Flutter)

1. Navigate to the mobile app directory:
```bash
cd ../mobile
```

2. Install Flutter dependencies:
```bash
flutter pub get
```

3. Configure API endpoint:
```bash
# Edit lib/config/environment.dart with your API URL
```

4. Run the app:
```bash
flutter run
```

### Admin Dashboard Setup (Next.js)

1. Navigate to the dashboard directory:
```bash
cd ../dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
# Edit .env.local with your configurations:
# NEXT_PUBLIC_API_URL=http://localhost:8000
# NEXTAUTH_SECRET=FYw/vDJveuCdhSvY+1P7xdfn82fdmLV+igJr1TF2VKU=
# NEXT_EMAIL_LOGIN=meshacharinze@gmail.com
```

4. Run the development server:
```bash
npm run dev
```

## Database Schema

```sql
-- User Model
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP
);
CREATE INDEX idx_user_email ON users(email);

-- Product Model
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INTEGER NOT NULL,
    sku VARCHAR(50) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_product_sku ON products(sku);

-- Order Model
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    status VARCHAR(50) NOT NULL,
    total_amount DECIMAL(10,2) NOT NULL,
    shipping_address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_order_user ON orders(user_id);
CREATE INDEX idx_order_status ON orders(status);

-- OrderItem Model
CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES orders(id),
    product_id INTEGER REFERENCES products(id),
    quantity INTEGER NOT NULL,
    unit_price DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_orderitem_order ON order_items(order_id);
CREATE INDEX idx_orderitem_product ON order_items(product_id);
```

## Scaling and Optimization

To handle 10,000 requests per minute (approximately 167 RPS), the following optimizations are implemented:

### 1. Caching Strategy

#### Application-level Caching:
- Redis cache for frequently accessed data:
  - Product catalog (5-minute TTL)
  - User session data (1-hour TTL)
  - Shopping cart contents (24-hour TTL)
```python
CACHES = {
    'default': {
        'BACKEND': 'django_redis.cache.RedisCache',
        'LOCATION': 'redis://127.0.0.1:6379/1',
        'OPTIONS': {
            'CLIENT_CLASS': 'django_redis.client.DefaultClient',
        }
    }
}
```

#### CDN Integration:
- CloudFront or similar CDN for static assets
- Cache product images and static files at edge locations

### 2. Load Balancing

#### Infrastructure:
- Deploy multiple application instances behind a load balancer
- Use AWS Application Load Balancer or NGINX for request distribution
- Implement sticky sessions for maintaining user state

```nginx
upstream backend {
    least_conn;  # Least connections algorithm
    server backend1.example.com:8000;
    server backend2.example.com:8000;
    server backend3.example.com:8000;
}
```

### 3. Database Optimizations

#### Read Replicas:
- Set up PostgreSQL read replicas for read-heavy operations
- Direct read queries to replicas, writes to primary

#### Connection Pooling:
- Implement PgBouncer for connection pooling
```yaml
pgbouncer:
  pool_mode: transaction
  max_client_conn: 1000
  default_pool_size: 20
```

#### Query Optimization:
- Implement database partitioning for orders table by date
- Use materialized views for complex reports
- Regular VACUUM and analysis of tables

### 4. Application Optimizations

#### API Rate Limiting:
```python
REST_FRAMEWORK = {
    'DEFAULT_THROTTLE_CLASSES': [
        'rest_framework.throttling.AnonRateThrottle',
        'rest_framework.throttling.UserRateThrottle'
    ],
    'DEFAULT_THROTTLE_RATES': {
        'anon': '100/minute',
        'user': '1000/minute'
    }
}
```

#### Asynchronous Processing:
- Use Celery for handling background tasks:
  - Order processing
  - Email notifications
  - Stock updates
  - Report generation

### 5. Monitoring and Performance

- Implement New Relic or Datadog for:
  - Application performance monitoring
  - Database query analysis
  - Error tracking
  - Resource utilization metrics

### 6. Security Considerations

- Implement WAF (Web Application Firewall)
- DDoS protection through CloudFlare
- Regular security audits and penetration testing

Monitor these optimizations and adjust based on actual usage patterns and performance metrics.

