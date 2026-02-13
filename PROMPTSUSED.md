# Prompts Used During Development

Below are example prompts used to assist in building the application.

Note:
- Responses are not included.
- No secrets or API keys are shared.
---

## LLM Integration

"Write a function to call OpenRouter API from FastAPI and return a summarized response."

---

## Prompt Improvement

"You are a senior data analyst.

You MUST ONLY use the data provided below.
Do NOT use prior knowledge.
Do NOT assume missing years or values.
If something is not present, say "Not available in dataset".

Analyze strictly from the given rows.

CSV DATA
========
Columns:
{columns}

Rows:
{rows[:20]}

Provide:
1) Key trends
2) Possible outliers
3) What should be checked next

Keep the answer factual and based only on the dataset."

---

## Debugging

"Why am I getting CORS blocked between Vercel frontend and Render backend?"

"Why does server log show a different path than my frontend code?"

---
