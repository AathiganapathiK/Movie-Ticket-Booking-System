@echo off
cd /d %~dp0

echo ===== Starting backend =====

start cmd /k ^
"cd backend ^
& IF NOT EXIST env python -m venv env ^
& call env\Scripts\activate ^
& pip install -r requirements.txt ^
& uvicorn main:app --reload"

echo ===== Starting frontend =====

start cmd /k ^
"cd frontend ^
& npm install ^
& npm start"

pause