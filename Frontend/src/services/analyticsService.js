const STORAGE_KEY = "hot_analytics";

export const logHotEvent = (destination) => {
  const raw = localStorage.getItem(STORAGE_KEY);
  const data = raw ? JSON.parse(raw) : [];

  const now = Date.now();
  const existing = data.find((d) => d.destination === destination);

  if (existing) {
    existing.totalCount += 1;
    existing.timestamps.push(now);
    existing.usersCount = existing.usersCount || 1;
  } else {
    data.push({
      destination,
      totalCount: 1,
      usersCount: 1,
      timestamps: [now],
    });
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const getHotAnalytics = async () => {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
};
