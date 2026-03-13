from sqlalchemy import Column, String, Integer
from database import Base

class Credentials(Base):
    __tablename__ = "credentials"

    username = Column(String, primary_key=True, index=True)
    password = Column(String)

class UpcomingEvent(Base):
    __tablename__ = "upcoming_events"

    id = Column(Integer, primary_key=True, index=True)
    heading = Column(String)
    description = Column(String)

class UpcomingOffer(Base):
    __tablename__ = "upcoming_offers"

    id = Column(Integer, primary_key=True, index=True)
    heading = Column(String)
    description = Column(String)