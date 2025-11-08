from fastapi import APIRouter, HTTPException
from datetime import datetime
from app.models.investor import InvestorInquiryCreate

router = APIRouter()
investor_inquiries = []

@router.post("/inquiries")
async def create_investor_inquiry(inquiry: InvestorInquiryCreate):
    inquiry_data = {
        "id": len(investor_inquiries) + 1,
        **inquiry.dict(),
        "submitted_at": datetime.utcnow().isoformat(),
        "status": "new"
    }
    
    investor_inquiries.append(inquiry_data)
    
    print(f"🎯 New Investor Inquiry from {inquiry_data['name']}")
    
    return {
        "message": "Thank you for your interest in Imperial Frontier.",
        "inquiry_id": inquiry_data["id"],
        "status": "success"
    }

@router.get("/inquiries")
async def get_investor_inquiries():
    return investor_inquiries