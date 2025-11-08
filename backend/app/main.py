from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import investors, analytics, gold_data
from app.core.config import settings

app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.PROJECT_VERSION,
    description="Imperial Frontier - Next Generation Mining Investment"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(investors.router, prefix="/api/v1/investors", tags=["investors"])
app.include_router(analytics.router, prefix="/api/v1/analytics", tags=["analytics"])
app.include_router(gold_data.router, prefix="/api/v1/gold", tags=["gold"])

@app.get("/")
async def root():
    return {
        "message": "Imperial Frontier API",
        "status": "operational",
        "version": settings.PROJECT_VERSION
    }

@app.get("/health")
async def health_check():
    return {"status": "healthy", "service": "Imperial Frontier API"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "app.main:app",
        host="0.0.0.0",
        port=8000,
        reload=True
    )