const API_BASE = "http://localhost:5000/api/settings";

// Fetch user settings
export const fetchSettings = async () => {
  const userId = localStorage.getItem("userId");
  if (!userId) return null;

  const res = await fetch(API_BASE, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId }),
  });

  return res.json();
};

// Update settings
export const updateSettings = async (newSettings) => {
  const userId = localStorage.getItem("userId");
  if (!userId) return null;

  const res = await fetch(API_BASE, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, ...newSettings }),
  });

  return res.json();
};

