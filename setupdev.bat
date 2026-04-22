@echo off
echo ===== Setting up backend =====

REM Create virtual environment if not exists
IF NOT EXIST env (
    python -m venv env
)

call env\Scripts\activate

echo Installing backend requirements...
pip install -r backend\requirements.txt

echo Running database migrations...
cd backend
alembic upgrade head
cd ..

echo ===== Setting up frontend =====
cd frontend
npm install
cd ..

echo ===== Setup complete =====
pause