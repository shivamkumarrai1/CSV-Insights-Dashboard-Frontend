import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Status from "./pages/Status";
import Reports from "./pages/Reports";

export default function App() {
    return (
        <BrowserRouter>
            <div style={{ padding: 20 }}>
                <h2>CSV Insights Dashboard</h2>

                <nav style={{ marginBottom: 20 }}>
                    <Link to="/">Home</Link> |{" "}
                    <Link to="/reports">Reports</Link> |{" "}
                    <Link to="/status">Status</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/status" element={<Status />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}