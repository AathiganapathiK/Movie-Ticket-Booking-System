@echo off
echo ===== Starting backend =====

call env\Scripts\activate

start cmd /k "cd backend && uvicorn main:app --reload"

echo ===== Starting frontend =====

start cmd /k "cd frontend && npm start"

echo ===== Application running =====
pause