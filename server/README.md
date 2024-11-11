# E-Commerce Backend API

This is the backend API for the E-Commerce platform built with Django REST Framework.

## Tech Stack

- Python 3.9+
- Django 4.2
- Django REST Framework
- PostgreSQL
- JWT Authentication

## Setup Instructions

### Prerequisites

- Python 3.9 or higher
- PostgreSQL
- pip (Python package manager)





### Backend folder structure

```bash

ecommerce_backend/
├── .env
├── .gitignore
├── README.md
├── requirements.txt
├── manage.py
├── core/
│   ├── migrations/
│   │   └── __init__.py
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── serializers.py
│   ├── urls.py
│   ├── views.py
│   └── tests/
│       ├── __init__.py
│       ├── test_models.py
│       ├── test_views.py
│       └── test_serializers.py
└── ecommerce_backend/
    ├── __init__.py
    ├── asgi.py
    ├── settings.py
    ├── urls.py
    └── wsgi.py




```
### API Endpoints
# Authentication Endpoints

POST /auth/users/ - Register a new user
POST /auth/jwt/create/ - Get JWT token
POST /auth/jwt/refresh/ - Refresh JWT token
POST /auth/jwt/verify/ - Verify JWT token
```

```
###  Create virtual environment
python -m venv env

# Activate virtual environment
# For Windows:
.\env\Scripts\activate
# For Unix or MacOS:
source env/bin/activate

# Install dependencies
pip freeze > requirements.txt

pip install django

pip install virtualenvwrapper-win  

mkvirtualenv  miniserver

django-admin startproject server

dir

l

deactivate

workon miniserver

pip install djangorestframework

python -m pip install django-cors-headers

pip install djoser

pip install pillow

pip install stripe

pip install -U djangorestframework_simplejwt

pip install -U social-auth-app-django

pip install psycopg2

python manage.py makemigration

python manage.py migrate

python manage.py createsuperuser

python manage.py runserver

pip freeze > requirements.txt

pip install django-environ

```