from pydantic import BaseModel, EmailStr
from typing import Optional
from enum import Enum

class InvestmentRange(str, Enum):
    TIER_1 = "$1M - $2M"
    TIER_2 = "$2M - $3M"
    TIER_3 = "$3M - $5M"
    TIER_4 = "$5M+"

class InvestorInquiryCreate(BaseModel):
    name: str
    email: EmailStr
    company: Optional[str] = None
    investment_range: InvestmentRange
    message: Optional[str] = None
    phone: Optional[str] = None

class InvestorInquiry(BaseModel):
    id: int
    name: str
    email: str
    company: Optional[str]
    investment_range: str
    message: Optional[str]
    phone: Optional[str]
    submitted_at: str
    status: str

    class Config:
        from_attributes = True