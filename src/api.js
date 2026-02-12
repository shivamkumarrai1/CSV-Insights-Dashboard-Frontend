const BASE_URL = "http://localhost:8000";

export const generateInsights = async(payload) => {
    const res = await fetch(`${BASE_URL}/reports/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });
    return res.json();
};

export const saveReport = async(payload) => {
    const res = await fetch(`${BASE_URL}/reports`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });
    return res.json();
};

export const getReports = async() => {
    const res = await fetch(`${BASE_URL}/reports`);
    return res.json();
};

export const getHealth = async() => {
    const res = await fetch(`${BASE_URL}/health`);
    return res.json();
};