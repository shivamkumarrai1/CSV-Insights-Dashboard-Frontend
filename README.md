# CSV Insights Dashboard

A small full-stack reporting application where users can upload a CSV, preview the data, generate AI insights, and store reports.

Frontend is deployed on Vercel.  
Backend is deployed on Render.

live app link : https://csv-insights-dashboard-chi.vercel.app/

---

##  What is Done

- CSV upload
- Table preview
- Generate insights using LLM
- Save report to database
- View last 5 reports
- Backend / DB / LLM health status
- Error handling for missing input
- Production deployment
- CORS configuration
- Prompt constraints to reduce hallucinations

---

##  What is NOT Done (Future Improvements)

- Advanced charts / visual analytics
- Authentication & multi-user system
- File storage
- Pagination for huge CSVs
- Download as PDF
- Streaming LLM responses
- Automated tests

---

##  Tech Stack

Frontend: React  
Backend: FastAPI  
Database: SQLite  
LLM Provider: OpenRouter

---

##  Run Locally

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload

Frontend
cd frontend
npm install
npm start

# Environment Variables

Backend requires:

OPENROUTER_API_KEY=your_key


Set via .env locally or Render dashboard in production.

## Deployment

Frontend → Vercel

Backend → Render
