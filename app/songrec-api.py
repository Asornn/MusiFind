from fastapi import FastAPI, HTTPException
from songrec import generate_song
from mangum import Mangum
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
handler = Mangum(app)
MAX_INPUT_LENGTH = 32

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/generate_song")
async def generate_song_api(artist: str):
    validate_input_length(artist)
    song = generate_song(artist)
    return {"song": f"{song}"}

def validate_input_length(artist: str):
    if len(artist) >= MAX_INPUT_LENGTH:
        raise HTTPException(status_code=400, detail=f"Input length is too long. Must be under {MAX_INPUT_LENGTH} characters.")