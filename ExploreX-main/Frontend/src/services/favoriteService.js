// const API_URL = "http://localhost:5000/api/favorites";

// export const toggleFavorite = async (payload) => {
//   const res = await fetch(API_URL, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(payload),
//   });

//   if (!res.ok) {
//     throw new Error("Save failed");
//   }

//   return res.json();
// };

// export const getFavorites = async (userId) => {
//   const res = await fetch(`${API_URL}/${userId}`);
//   return res.json();
// };
export const saveFavorite = async (payload) => {
  const res = await fetch("http://localhost:5000/api/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
};

export const getFavorites = async (userId) => {
  const res = await fetch(`http://localhost:5000/api/favorites/${userId}`);
  return res.json();
};
export const deleteFavorite = async (id) => {
  const res = await fetch(`http://localhost:5000/api/favorites/${id}`, {
    method: "DELETE",
  });
  return res.json();
};
