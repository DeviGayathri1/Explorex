///// static data /////
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { getFavorites, deleteFavorite } from "../services/favoriteService";

// const FavoritePage = () => {
//   const [favorites, setFavorites] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const userId = localStorage.getItem("userId");
//     if (!userId) return;

//     getFavorites(userId).then(setFavorites);
//   }, []);

//   const handleDelete = async (id) => {
//     await deleteFavorite(id);
//     setFavorites((prev) => prev.filter((f) => f._id !== id));
//   };

//   return (
//     <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">


//       {/* HEADER */}
//       <div className="flex items-center gap-11 md:gap-11 lg:gap-20 mb-20">

//         <button
//           onClick={() => navigate("/home")}
//           className="rounded-full bg-gray-100 px-4 py-2 hover:bg-gray-200"
//         >
//           ← Back
//         </button>
//         <h1 className="text-2xl font-bold">❤️ Saved Trips</h1>
//       </div>

//       {favorites.length === 0 && (
//         <p className="text-gray-500">No saved trips yet.</p>
//       )}

//       {/* GRID */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">

//         {favorites.map((fav) => (
//           <div
//             key={fav._id}
//             className="rounded-xl overflow-hidden shadow hover:shadow-xl transition cursor-pointer bg-white"
//             onClick={() =>
//               navigate("/trip-plan", {
//                 state: { favorite: fav } // ✅ pass favorite object
//               })
//             }
//           >
//             {/* IMAGE */}
//             <div
//               className="h-40 bg-cover bg-center"
//               style={{
//                 backgroundImage: `url(https://source.unsplash.com/600x400/?${fav.data.destination},travel)`
//               }}
//             />

//             {/* CONTENT */}
//             <div className="p-3 md:p-4 lg:p-6">

//               <h2 className="text-lg font-semibold capitalize">
//                 📍 {fav.data.destination}
//               </h2>

//               <p className="text-sm text-gray-500 mt-1">
//                 {fav.data.trip?.days?.length || 0} Days itinerary
//               </p>

//               <div className="flex justify-between items-center mt-4">
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation(); // prevent parent click
//                     navigate("/trip-plan", { state: { favorite: fav } });
//                   }}
//                   className="text-blue-600 font-medium text-sm"
//                 >
//                   View Plan →
//                 </button>

//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation(); // prevent parent click
//                     handleDelete(fav._id);
//                   }}
//                   className="text-red-500 hover:text-red-700 text-sm"
//                 >
//                   🗑 Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
///// perferct design ////

// export default FavoritePage;
// import { useEffect, useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { getFavorites, deleteFavorite } from "../services/favoriteService";
// import bgPattern from "../assets/travel-pattern.jpg";

// // ✅ Predefined images for known destinations
// const destinationImages = {
//   Paris: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
//   London: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
//   Goa: "https://images.unsplash.com/photo-1580746732800-0b6b0b1b6e2b",
//   Kerala: "https://images.unsplash.com/photo-1602216056096-3b40cc0c66c3",
//   Coimbatore: "https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e",
//   Dubai: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a",
//   Tokyo: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c",
// };

// // ✅ Auto-generate image for unknown destinations
// const getDestinationImage = (destination, id) => {
//   if (destinationImages[destination]) {
//     return destinationImages[destination];
//   }

//   return `https://source.unsplash.com/600x400/?${encodeURIComponent(
//     destination
//   )},travel&sig=${id}`;
// };

// const FavoritePage = () => {
//   const [favorites, setFavorites] = useState([]);
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const userId = localStorage.getItem("userId");
//     if (!userId) return;

//     getFavorites(userId).then(setFavorites);
//   }, []);

//   const handleDelete = async (id) => {
//     await deleteFavorite(id);
//     setFavorites((prev) => prev.filter((f) => f._id !== id));
//   };

//   return (
//     <div
//       className="relative min-h-screen px-1 sm:px-3 lg:px-1 py-3 bg-cover bg-center"
//       style={{
//         backgroundImage: `url(${bgPattern})`,
//         backgroundRepeat: "repeat",
//         backgroundSize: "300px",
//         opacity: 0.8,
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-blue-50/40"></div>

//       {/* Content */}
//       <div className="relative z-10">
//         {/* HEADER */}
//         <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
//           <button
//             onClick={() => {
//               if (location.state?.from) {
//                 navigate(location.state.from);
//               } else {
//                 navigate(-1);
//               }
//             }}
//             className="rounded-full bg-white hover:bg-gray-50 border border-gray-300 shadow-sm hover:shadow-md transition px-4 py-2 sm:px-6 sm:py-3"
//           >
//             ← Back
//           </button>

//           <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-800">
//             ❤️ Saved Trips
//           </h1>
//         </div>

//         {/* EMPTY STATE */}
//         {favorites.length === 0 && (
//           <p className="text-gray-500 text-lg sm:text-xl text-center mt-10">
//             No saved trips yet.
//           </p>
//         )}

//         {/* GRID */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
//           {favorites.map((fav) => (
//             <div
//               key={fav._id}
//               className="w-full p-3 rounded-lg bg-[#EAF6F4] hover:bg-[#DFF1EE] hover:ring-1 hover:ring-black/10 focus:ring-2 focus:ring-black outline-none transition cursor-pointer"
//               onClick={() =>
//                 navigate("/trip-plan", { state: { favorite: fav } })
//               }
//             >
//               {/* IMAGE */}
//               <div
//                 className="h-48 sm:h-56 lg:h-64 w-full bg-cover bg-center rounded-md bg-gray-100 transition"
//                 style={{
//                   backgroundImage: `url(${getDestinationImage(
//                     fav.data.destination,
//                     fav._id
//                   )})`,
//                 }}
//               />

//               {/* CONTENT */}
//               <div className="p-4 sm:p-6">
//                 <h2 className="text-lg sm:text-xl font-semibold text-black capitalize mb-1">
//                   📍 {fav.data.destination}
//                 </h2>

//                 <p className="text-sm sm:text-md text-blue-700">
//                   {fav.data.trip?.days?.length || 0} Days itinerary
//                 </p>

//                 <div className="flex justify-between items-center mt-4 sm:mt-6">
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       navigate("/trip-plan", { state: { favorite: fav } });
//                     }}
//                     className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 shadow-sm hover:shadow transition px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium text-sm sm:text-base"
//                   >
//                     View Plan →
//                   </button>

//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleDelete(fav._id);
//                     }}
//                     className="text-red-400 hover:text-red-600 text-sm sm:text-base font-medium"
//                   >
//                     🗑 Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FavoritePage;

import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getFavorites, deleteFavorite } from "../services/favoriteService";
import bgPattern from "../assets/travel-pattern.jpg";

/* ✅ PATTERN SET (Option 4) */
const patterns = [
  {
    bg: "bg-[#EAF6F4]",
    style: {
      backgroundImage:
        "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0)",
      backgroundSize: "18px 18px",
    },
  },
  {
    bg: "bg-[#F3F0FF]",
    style: {
      backgroundImage:
        "linear-gradient(45deg, rgba(0,0,0,0.06) 25%, transparent 25%, transparent 50%, rgba(0,0,0,0.06) 50%, rgba(0,0,0,0.06) 75%, transparent 75%, transparent)",
      backgroundSize: "24px 24px",
    },
  },
  {
    bg: "bg-[#FFF7ED]",
    style: {
      backgroundImage:
        "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px)",
      backgroundSize: "20px 20px",
    },
  },
];

// Stable pattern per destination
const getPattern = (destination) => {
  const index = destination.length % patterns.length;
  return patterns[index];
};

// Emoji variation
const emojis = ["🏖️", "🏔️", "🌆", "🌍", "🗺️"];

const FavoritePage = () => {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) return;

    getFavorites(userId).then(setFavorites);
  }, []);

  const handleDelete = async (id) => {
    await deleteFavorite(id);
    setFavorites((prev) => prev.filter((f) => f._id !== id));
  };

  return (
    <div
      className="relative min-h-screen px-1 sm:px-3 lg:px-1 py-3 bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgPattern})`,
        backgroundRepeat: "repeat",
        backgroundSize: "300px",
        opacity: 0.8,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-50/40"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <button
            onClick={() => {
              if (location.state?.from) {
                navigate(location.state.from);
              } else {
                navigate(-1);
              }
            }}
            className="rounded-full bg-white hover:bg-gray-50 border border-gray-300 shadow-sm hover:shadow-md transition px-4 py-2 sm:px-6 sm:py-3"
          >
            ← Back
          </button>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-800">
            ❤️ Saved Trips
          </h1>
        </div>

        {/* EMPTY STATE */}
        {favorites.length === 0 && (
          <p className="text-gray-500 text-lg sm:text-xl text-center mt-10">
            No saved trips yet.
          </p>
        )}

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {favorites.map((fav) => {
            const pattern = getPattern(fav.data.destination);
            const emoji =
              emojis[fav.data.destination.length % emojis.length];

            return (
              <div
                key={fav._id}
                className="w-full p-3 rounded-lg bg-[#EAF6F4] hover:bg-[#DFF1EE] hover:ring-1 hover:ring-black/10 transition cursor-pointer hover:shadow-md"
                onClick={() =>
                  navigate("/trip-plan", { state: { favorite: fav } })
                }
              >
                {/* PATTERN CARD (Option 4) */}
                <div
                  className={`h-48 sm:h-56 lg:h-64 w-full rounded-md flex items-center justify-center transition-transform duration-300 hover:scale-[1.02] ${pattern.bg}`}
                  style={pattern.style}
                >
                  <div className="text-center">
                    <div className="text-5xl mb-2">{emoji}</div>
                    <p className="text-lg font-semibold text-gray-800 capitalize">
                      {fav.data.destination}
                    </p>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-4 sm:p-6">
                  <h2 className="text-lg sm:text-xl font-semibold text-black capitalize mb-1">
                    📍 {fav.data.destination}
                  </h2>

                  <p className="text-sm sm:text-md text-blue-700">
                    {fav.data.trip?.days?.length || 0} Days itinerary
                  </p>

                  <div className="flex justify-between items-center mt-4 sm:mt-6">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate("/trip-plan", { state: { favorite: fav } });
                      }}
                      className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 shadow-sm hover:shadow transition px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium text-sm sm:text-base"
                    >
                      View Plan →
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(fav._id);
                      }}
                      className="text-red-400 hover:text-red-600 text-sm sm:text-base font-medium"
                    >
                      🗑 Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FavoritePage;
