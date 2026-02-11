// import { useLocation, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import ChatBot from "../components/ChatBot";
// import BackButton from "../components/BackButton";
// import { saveFavorite } from "../services/favoriteService";




// const destinationImages = {
//   Coimbatore:
//     "https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e",
//   Paris:
//     "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
//   Tokyo:
//     "https://images.unsplash.com/photo-1549693578-d683be217e58",
// };

// const TripPlanPage = () => {
//   const { state } = useLocation();
//   const navigate = useNavigate();

//   const trip = state?.trip ||
//   state?.favorite?.data?.trip;  //new change
//   const destination = state?.destination ||
//   state?.favorite?.data?.destination;

//   const [activeTab, setActiveTab] = useState("plan");
//   const [showMap, setShowMap] = useState(false);
//   const [saving, setSaving] = useState(false);

//   // 🚨 VERY IMPORTANT: prevent crash
//   if (!trip) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center">
//         <p className="text-gray-600 mb-4">
//           No trip data found. Please generate a plan again.
//         </p>
//         <button
//           onClick={() => navigate("/home")}
//           className="px-6 py-2 bg-blue-600 text-white rounded-full"
//         >
//           Go Home
//         </button>
//       </div>
//     );
//   }
//    const saveTripToFavorite = async () => {
//   try {
//     const payload = {
//       userId: localStorage.getItem("userId"),
//       type: "trip",
//       data: {
//         destination,
//         trip,
//       },
//     };

//     console.log("📦 Payload being saved:", payload);

//     const res = await saveFavorite(payload);

//     console.log("✅ Saved response:", res);
//     alert("Trip saved successfully ❤️");
//   } catch (err) {
//     console.error("❌ Save failed:", err);
//     alert("Save failed");
//   }
// };


//   const heroImage =
//     destinationImages[destination] ||
//     "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee";

//   return (
//     <div className="bg-gray-50 min-h-screen relative">
//       <BackButton to="/home" label="Back" />

//       {/* HERO */}
//       <div className="relative rounded-b-3xl overflow-hidden shadow-lg">
//   <img
//     src={heroImage}
//     alt={destination}
//     className="w-full h-80 object-cover"
//   />

//   {/* SAVE BUTTON — FORCE ABOVE OVERLAY */}
//   <button
//     onClick={saveTripToFavorite}
//     className="absolute top-6 right-6 z-20 bg-white px-4 py-2 rounded-full shadow-lg font-semibold cursor-pointer hover:scale-105 transition"
//   >
//     ❤️ Save Plan
//   </button>

//   {/* DARK OVERLAY */}
//   <div className="absolute inset-0 bg-black/40 z-10 flex items-end">
//     <div className="p-6 text-white">
//       <h1 className="text-4xl font-bold">{destination}</h1>
//       <p className="mt-2 max-w-xl text-sm">
//         A curated travel plan crafted just for you.
//       </p>
//     </div>
//   </div>
// </div>

//       {/* TABS */}
//       <div className="max-w-4xl mx-auto mt-6 px-6 flex gap-6 border-b">
//         {["plan", "logistics", "map"].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => {
//               setActiveTab(tab);
//               setShowMap(tab === "map");
//             }}
//             className={`pb-3 font-medium capitalize ${
//               activeTab === tab
//                 ? "border-b-2 border-blue-600 text-blue-600"
//                 : "text-gray-500"
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* CONTENT */}
//       <div className="max-w-4xl mx-auto mt-8 px-6 space-y-8">
//         {activeTab === "plan" &&
//           trip?.days?.map((day) => (
//             <div key={day.day} className="space-y-4">
//               <h2 className="text-2xl font-bold text-blue-600">
//                 Day {day.day} · {day.area}
//               </h2>

//               {day.schedule.map((place, idx) => (
//                 <div
//                   key={idx}
//                   className="bg-white rounded-2xl shadow-md p-6"
//                 >
//                   <div className="flex justify-between">
//                     <h3 className="text-lg font-semibold">
//                       {place.place}
//                     </h3>
//                     <span className="text-sm text-gray-500">
//                       {place.time}
//                     </span>
//                   </div>

//                   <p className="mt-2 text-gray-600 text-sm">
//                     {place.description}
//                   </p>

//                   <div className="mt-3 flex gap-4 text-sm text-gray-500">
//                     <span>⏳ {place.duration}</span>
//                     {place.travelTime && (
//                       <span>🚶 {place.travelTime}</span>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ))}

//         {activeTab === "logistics" && (
//           <div className="bg-white rounded-2xl shadow-md p-6 space-y-3">
//             <p>🏨 Suggested Stay near city center</p>
//             <p>🚕 Local transport: Cab / Metro</p>
//             <p>📱 Maps & navigation recommended</p>
//             <p>💳 Carry digital payments</p>
//           </div>
//         )}
//       </div>

//       {/* MAP */}
//       {showMap && (
//         <div className="fixed top-0 right-0 w-1/2 h-full bg-white shadow-2xl z-50">
//           <button
//             onClick={() => {
//               setShowMap(false);
//               setActiveTab("plan");
//             }}
//             className="absolute top-4 right-4 bg-white rounded-full shadow px-3 py-1 font-bold"
//           >
//             ✕
//           </button>

//           <iframe
//             title="map"
//             className="w-full h-full"
//             loading="lazy"
//             src={`https://www.google.com/maps?q=${destination}&output=embed`}
//           />
//         </div>
//       )}

//       <ChatBot />
//     </div>
//   );
// };

// export default TripPlanPage;
import { useLocation, useNavigate } from "react-router-dom";
import { useState ,useEffect} from "react";
import ChatBot from "../components/ChatBot";
import BackButton from "../components/BackButton";
import { saveFavorite } from "../services/favoriteService";
import { logHotEvent } from "../services/analyticsService";

const destinationImages = {
  Coimbatore:
    "https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e",
  Paris:
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
  Tokyo:
    "https://images.unsplash.com/photo-1549693578-d683be217e58",
};

const TripPlanPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // ✅ unified handling: either state.trip or state.favorite.data.trip
  const trip = state?.trip || state?.favorite?.data?.trip;
  const destination = state?.destination || state?.favorite?.data?.destination;

  const [activeTab, setActiveTab] = useState("plan");
  const [showMap, setShowMap] = useState(false);
  const [saving, setSaving] = useState(false);
  useEffect(() => {
  if (destination) {
    logHotEvent(destination);
  }
}, [destination]);

  // debug to ensure state is coming correctly
  console.log("TripPlanPage state:", state);

  // 🚨 prevent crash if no trip data
  if (!trip) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-gray-600 mb-4">
          No trip data found. Please generate a plan again.
        </p>
        <button
          onClick={() => navigate("/home")}
          className="px-6 py-2 bg-blue-600 text-white rounded-full"
        >
          Go Home
        </button>
      </div>
    );
  }

  const saveTripToFavorite = async () => {
    try {
      const payload = {
        userId: localStorage.getItem("userId"),
        type: "trip",
        data: {
          destination,
          trip,
        },
      };

      console.log("📦 Payload being saved:", payload);

      const res = await saveFavorite(payload);

      console.log("✅ Saved response:", res);
      alert("Trip saved successfully ❤️");
    } catch (err) {
      console.error("❌ Save failed:", err);
      alert("Save failed");
    }
  };

  const heroImage =
    destinationImages[destination] ||
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee";

  return (
    <div className="bg-gray-50 min-h-screen relative">
      <BackButton to="/home" label="Back" />

      {/* HERO */}
      <div className="relative rounded-b-3xl overflow-hidden shadow-lg">
        <img
          src={heroImage}
          alt={destination}
          className="w-full h-80 object-cover"
        />

        {/* SAVE BUTTON — FORCE ABOVE OVERLAY */}
        <button
          onClick={saveTripToFavorite}
          className="absolute top-6 right-6 z-20 bg-white px-4 py-2 rounded-full shadow-lg font-semibold cursor-pointer hover:scale-105 transition"
        >
          ❤️ Save Plan
        </button>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/40 z-10 flex items-end">
          <div className="p-6 text-white">
            <h1 className="text-4xl font-bold">{destination}</h1>
            <p className="mt-2 max-w-xl text-sm">
              A curated travel plan crafted just for you.
            </p>
          </div>
        </div>
      </div>

      {/* TABS */}
      <div className="max-w-4xl mx-auto mt-6 px-6 flex gap-6 border-b">
        {["plan", "logistics", "map"].map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setShowMap(tab === "map");
            }}
            className={`pb-3 font-medium capitalize ${
              activeTab === tab
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto mt-8 px-6 space-y-8">
        {activeTab === "plan" &&
          trip?.days?.map((day) => (
            <div key={day.day} className="space-y-4">
              <h2 className="text-2xl font-bold text-blue-600">
                Day {day.day} · {day.area}
              </h2>

              {day.schedule.map((place, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-md p-6"
                >
                  <div className="flex justify-between">
                    <h3 className="text-lg font-semibold">
                      {place.place}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {place.time}
                    </span>
                  </div>

                  <p className="mt-2 text-gray-600 text-sm">
                    {place.description}
                  </p>

                  <div className="mt-3 flex gap-4 text-sm text-gray-500">
                    <span>⏳ {place.duration}</span>
                    {place.travelTime && (
                      <span>🚶 {place.travelTime}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}

        {activeTab === "logistics" && (
          <div className="bg-white rounded-2xl shadow-md p-6 space-y-3">
            <p>🏨 Suggested Stay near city center</p>
            <p>🚕 Local transport: Cab / Metro</p>
            <p>📱 Maps & navigation recommended</p>
            <p>💳 Carry digital payments</p>
          </div>
        )}
      </div>

      {/* MAP */}
      {showMap && (
        <div className="fixed top-0 right-0 w-1/2 h-full bg-white shadow-2xl z-50">
          <button
            onClick={() => {
              setShowMap(false);
              setActiveTab("plan");
            }}
            className="absolute top-4 right-4 bg-white rounded-full shadow px-3 py-1 font-bold"
          >
            ✕
          </button>

          <iframe
            title="map"
            className="w-full h-full"
            loading="lazy"
            src={`https://www.google.com/maps?q=${destination}&output=embed`}
          />
        </div>
      )}

      <ChatBot />
    </div>
  );
};

export default TripPlanPage;
