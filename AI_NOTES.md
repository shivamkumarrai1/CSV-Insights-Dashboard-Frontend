# AI Notes

This project uses AI both in development and in the application itself.

---

##  AI Used Inside the App

Provider: OpenRouter  
Role: Generate data insights from uploaded CSV.

Why OpenRouter:
- supports multiple models
- easy API
- cost efficient
- quick integration

---

## Prompt Safety

To reduce hallucinations, the model is instructed to:

- use ONLY the provided rows
- not assume extra data
- say when information is missing

Additionally, only a subset of rows is sent to control token usage.

---

##  AI Used During Development

AI tools helped with:

- boilerplate generation
- React component organization
- debugging CORS issues
- improving prompts

---

##  What I Verified Myself

I manually validated:

- API routes match Swagger
- network requests via browser inspect
- Render logs vs frontend behavior
- DB writes
- health endpoints
- environment variable setup

I ensured the system works end-to-end beyond AI suggestions.

---

##  Limitations of AI

LLMs may:
- infer trends not strongly supported
- miss numeric nuances
- vary wording across runs
