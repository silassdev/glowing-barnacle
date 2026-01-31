from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import uvicorn

app = FastAPI(title="image-to-code-api")

class Component(BaseModel):
    type: str
    text: str | None = None
    props: dict | None = {}

@app.post('/convert')
async def convert(file: UploadFile = File(...)):
    # Placeholder: in prod this would run image preprocessing + model inference
    # Return a simple JSON UI schema as an example
    schema = {
        "type": "page",
        "children": [
            {"type": "header", "text": "Demo Header"},
            {"type": "button", "text": "Login", "props": {"variant": "primary"}}
        ]
    }
    return JSONResponse(schema)

if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0', port=8001)
