from fastapi import FastAPI 
from database import Base, engine
from routes import router
from fastapi.middleware.cors import CORSMiddleware


# DB file will be created automatically

app = FastAPI()
app.include_router(router)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # for development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "API working"}

