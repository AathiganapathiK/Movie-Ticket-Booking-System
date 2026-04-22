@echo off
cd /d %~dp0

echo ===== Setting up backend =====

echo [1/5] Setting up Python virtual environment...

cd backend

IF NOT EXIST env (
    python -m venv env
)

if %errorlevel% neq 0 (
    echo ERROR: Python not found. Install Python 3.11+
    pause
    exit /b 1
)

echo       Virtual environment ready.
echo.

echo [2/5] Activating environment and installing packages...
call env\Scripts\activate

pip install -r requirements.txt
if %errorlevel% neq 0 (
    echo ERROR: Failed to install packages.
    pause
    exit /b 1
)

echo       Python packages installed.
echo.

echo [3/5] Running database migrations...
alembic upgrade head
if %errorlevel% neq 0 (
    echo ERROR: Migration failed.
    pause
    exit /b 1
)

echo       Database ready.
echo.

echo [4/5] Seeding sample data...
sqlite3 movies.db < ..\seed_data.sql 2>nul

if %errorlevel% neq 0 (
    echo       sqlite3 not found, skipping seed.
) else (
    echo       Sample data added.
)

cd ..

echo.
echo ===== Setting up frontend =====

echo [5/5] Installing frontend dependencies...

cd frontend
call npm install --silent

if %errorlevel% neq 0 (
    echo ERROR: npm install failed. Install Node.js.
    pause
    exit /b 1
)

cd ..

echo       Frontend ready.

echo.
echo ============================================================
echo   Setup Complete!
echo   Run: runapplication.bat
echo ============================================================
pause