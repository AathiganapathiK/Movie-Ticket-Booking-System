@echo off
cd /d %~dp0

echo ===== Starting backend =====
start cmd /k ^
cd /d %~dp0backend ^&^& ^
call env\Scripts\activate ^&^& ^
pip install -r requirements.txt ^&^& ^
uvicorn main:app --reload

timeout /t 3 > nul

echo ===== Starting frontend =====
start cmd /k ^
cd /d %~dp0frontend ^&^& ^
npm install ^&^& ^
npm start

echo ===== Application running =====
pause