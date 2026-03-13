from pydantic import BaseModel

class Credentials(BaseModel):
    username: str
    password: str

class ContentUpdate(BaseModel):
    heading: str
    description: str