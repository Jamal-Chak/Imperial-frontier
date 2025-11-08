from fastapi import APIRouter
import random
from datetime import datetime

router = APIRouter()

@router.get("/price")
async def get_gold_price():
    base_price = 64250.75
    fluctuation = random.uniform(-0.01, 0.01)
    current_price = base_price * (1 + fluctuation)
    
    # Convert to per ounce (1 kg = 32.1507 oz)
    price_per_ounce = current_price / 32.1507
    
    # Determine trend based on price movement
    trend = "up" if fluctuation > 0 else "down"
    
    return {
        "price_per_kg": round(current_price, 2),
        "price_per_ounce": round(price_per_ounce, 2),
        "currency": "USD",
        "last_updated": datetime.utcnow().isoformat(),
        "trend": trend,
        "change_percent": round(fluctuation * 100, 3)
    }