from fastapi import APIRouter

router = APIRouter()

@router.get("/metrics")
async def get_business_metrics():
    return {
        "financial": {
            "monthly_revenue": 3840000,
            "projected_revenue": 4416000,
            "operating_costs": 1536000,
            "net_profit": 2304000,
            "roi_percentage": 76.8
        },
        "operational": {
            "production_capacity": "5,000 kg/month",
            "resource_yield": "5g/tonne",
            "site_hectares": 10,
            "extraction_efficiency": "94%"
        }
    }