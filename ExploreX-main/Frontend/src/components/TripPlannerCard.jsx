// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const TripPlannerCard = () => {
//   const navigate = useNavigate();

//   // FORM STATES
//   const [destination, setDestination] = useState("");
//   const [days, setDays] = useState(3);
//   const [groupSize, setGroupSize] = useState("Couple");
//   const [perDayBudget, setPerDayBudget] = useState(1000);
//   const [totalBudget, setTotalBudget] = useState(0);
//   const [vibe, setVibe] = useState("");
//   const [skip, setSkip] = useState("");
//   const [loading, setLoading] = useState(false);

//   // GROUP SIZE → PEOPLE COUNT
//   const groupMap = {
//     Solo: 1,
//     Couple: 2,
//     Family: 4,
//     Friends: 5,
//   };

//   // AUTO CALCULATE TOTAL BUDGET
//   useEffect(() => {
//     const people = groupMap[groupSize];
//     setTotalBudget(perDayBudget * days * people);
//   }, [perDayBudget, days, groupSize]);

//   // API CALL
//   const handleGenerate = async () => {
//     if (!destination || !days) {
//       alert("Please fill destination and days");
//       return;
//     }

//     try {
//       setLoading(true);
//       navigate("/loading");

//       const response = await fetch(
//         "http://localhost:5000/api/trip/generate",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             destination,
//             days,
//             perDayBudget,
//             totalBudget,
//             groupSize,
//             vibe,
//             skip,
//           }),
//         }
//       );

//       const data = await response.json();

//       navigate("/plan", {
//         state: {
//           destination,
//           trip: data,
//         },
//       });
//     } catch (error) {
//       console.error(error);
//       alert("Failed to generate trip");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-[#f2faf9] rounded-2xl shadow-xl p-8 w-full max-w-2xl mx-auto">

//       {/* HEADER */}
//       <h1 className="text-3xl font-bold text-center text-black">
//         Plan Your Next Escape
//       </h1>
//       <p className="text-center text-black opacity-70 mt-1 mb-8">
//         Smart budgets. Better trips.
//       </p>

//       {/* FORM GRID */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//         {/* DESTINATION */}
//         <div>
//           <label className="block text-sm font-medium mb-1">📍 Destination</label>
//           <input
//             value={destination}
//             onChange={(e) => setDestination(e.target.value)}
//             className="w-full p-3 rounded-lg bg-[#DFF2EE]"
//             placeholder="Tokyo, Paris, Bali"
//           />
//         </div>

//         {/* DAYS */}
//         <div>
//           <label className="block text-sm font-medium mb-1">📅 Days</label>
//           <input
//             type="number"
//             min="1"
//             value={days}
//             onChange={(e) => setDays(Number(e.target.value))}
//             className="w-full p-3 rounded-lg bg-[#DFF2EE]"
//           />
//         </div>

//         {/* GROUP SIZE */}
//         <div>
//           <label className="block text-sm font-medium mb-1">👥 Group Size</label>
//           <select
//             value={groupSize}
//             onChange={(e) => setGroupSize(e.target.value)}
//             className="w-full p-3 rounded-lg bg-[#DFF2EE]"
//           >
//             <option>Solo</option>
//             <option>Couple</option>
//             <option>Family</option>
//             <option>Friends</option>
//           </select>
//         </div>

//         {/* PER DAY BUDGET */}
//         <div className="md:col-span-2">
//           <label className="block text-sm font-medium mb-2">
//             💸 Per-Day Budget (per person)
//           </label>

//           <div className="bg-[#DFF2EE] p-5 rounded-xl">
//             <div className="flex justify-between mb-3">
//               <span className="font-semibold text-lg">
//                 ₹{perDayBudget.toLocaleString()} / day
//               </span>
//               <span className="text-sm opacity-70">
//                 Min ₹100
//               </span>
//             </div>

//             <input
//               type="range"
//               min="100"
//               max="10000"
//               step="100"
//               value={perDayBudget}
//               onChange={(e) => setPerDayBudget(Number(e.target.value))}
//               className="w-full accent-black"
//             />

//             <div className="flex justify-between text-xs opacity-60 mt-1">
//               <span>₹100</span>
//               <span>₹10,000</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* BUDGET SUMMARY */}
//       <div className="mt-6 bg-[#ABDEE6] p-5 rounded-xl text-black">
//         <h3 className="font-bold mb-2">💡 Budget Breakdown</h3>
//         <p className="text-sm">
//           ₹{perDayBudget.toLocaleString()} × {days} days × {groupMap[groupSize]} people
//         </p>
//         <p className="text-xl font-bold mt-2">
//           Total ≈ ₹{totalBudget.toLocaleString()}
//         </p>
//       </div>

//       {/* VIBE */}
//       <div className="mt-6">
//         <label className="block text-sm font-medium mb-1">✨ Vibe</label>
//         <textarea
//           value={vibe}
//           onChange={(e) => setVibe(e.target.value)}
//           className="w-full p-3 rounded-lg bg-[#DFF2EE]"
//           placeholder="Adventure, relaxed, foodie..."
//         />
//       </div>

//       {/* SKIP */}
//       <div className="mt-4">
//         <label className="block text-sm font-medium mb-1">🚫 Skip</label>
//         <input
//           value={skip}
//           onChange={(e) => setSkip(e.target.value)}
//           className="w-full p-3 rounded-lg bg-[#DFF2EE]"
//           placeholder="Crowds, museums..."
//         />
//       </div>

//       {/* BUTTON */}
//       <button
//         onClick={handleGenerate}
//         disabled={loading}
//         className="mt-8 w-full bg-black text-white py-3 rounded-xl font-bold"
//       >
//         {loading ? "Generating..." : "Generate ExploreX Plan →"}
//       </button>
//     </div>
//   );
// };

// export default TripPlannerCard;






// import { useNavigate } from "react-router-dom";

// const TripPlannerCard = () => {
//   const navigate = useNavigate();

//   const handleGenerate = () => {
//     navigate("/plan");
//   };

//   return (
//     <div className="bg-[#f2faf9] rounded-2xl shadow-xl p-8 w-full max-w-2xl">

//       <h1 className="text-3xl font-bold text-black text-center">
//         Plan Your Next Escape
//       </h1>
//       <p className="text-center text-black opacity-70 mt-1 mb-8">
//         Explore beyond. Live beyond.
//       </p>

//       {/* FORM GRID */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//         <div>
//           <label className="text-sm font-medium text-black mb-1 block">
//             📍 Destination
//           </label>
//           <input
//             className="w-full p-3 border rounded-lg bg-[#DFF2EE] text-black focus:ring-2 focus:ring-black outline-none"
//             placeholder="e.g. Tokyo, Paris, Bali"
//           />
//         </div>

//         <div>
//           <label className="text-sm font-medium text-black mb-1 block">
//             📅 Duration (Days)
//           </label>
//           <input
//             type="number"
//             className="w-full p-3 border rounded-lg bg-[#DFF2EE] text-black focus:ring-2 focus:ring-black outline-none"
//             placeholder="3"
//           />
//         </div>

//         <div>
//           <label className="text-sm font-medium text-black mb-1 block">
//             💲 Budget
//           </label>
//           <select className="w-full p-3 border rounded-lg bg-[#DFF2EE] text-black focus:ring-2 focus:ring-black outline-none">
//             <option>Moderate</option>
//             <option>Low</option>
//             <option>Luxury</option>
//           </select>
//         </div>

//         <div>
//           <label className="text-sm font-medium text-black mb-1 block">
//             👥 Group Size
//           </label>
//           <select className="w-full p-3 border rounded-lg bg-[#DFF2EE] text-black focus:ring-2 focus:ring-black outline-none">
//             <option>Couple</option>
//             <option>Solo</option>
//             <option>Family</option>
//             <option>Friends</option>
//           </select>
//         </div>
//       </div>

//       {/* VIBE */}
//       <div className="mt-6">
//         <label className="text-sm font-medium text-black mb-1 block">
//           ✨ Vibe Check
//         </label>
//         <textarea
//           className="w-full p-3 border rounded-lg bg-[#DFF2EE] text-black focus:ring-2 focus:ring-black outline-none"
//           placeholder="Describe the vibe..."
//         />
//       </div>

//       {/* TAGS */}
//       <div className="flex flex-wrap gap-2 mt-3">
//         {[
//           "Relaxing & Chill",
//           "Cyberpunk Nightlife",
//           "Historical Deep Dive",
//           "Foodie Heaven",
//           "Nature & Adventure",
//         ].map((tag) => (
//           <span
//             key={tag}
//             className="text-xs px-3 py-1 rounded-full border bg-[#DFF2EE] text-black"
//           >
//             {tag}
//           </span>
//         ))}
//       </div>

//       {/* SKIP */}
//       <div className="mt-6">
//         <label className="text-sm font-medium text-black mb-1 block">
//           🚫 Things to Skip
//         </label>
//         <input
//           className="w-full p-3 border rounded-lg bg-[#DFF2EE] text-black focus:ring-2 focus:ring-black outline-none"
//           placeholder="Avoid crowds, No museums"
//         />
//       </div>

//       {/* BUTTON */}
//       <button
//         onClick={handleGenerate}
//         className="mt-8 w-full bg-[#ABDEE6] hover:bg-[#DFF2EE] text-black font-bold py-3 rounded-xl transition"
//       >
//         Generate ExploreX Plan →
//       </button>
//     </div>
//   );
// };

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

/* ✅ MOVE SECTION OUTSIDE */
const Section = ({ title, children }) => (
  <div className="mt-10">
    <h2 className="text-lg font-semibold text-black mb-4">{title}</h2>
    <div className="space-y-4">{children}</div>
  </div>
);

const TripPlannerCard = () => {
  const navigate = useNavigate();

  // FORM STATES
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState(3);

  const [groupSize, setGroupSize] = useState("Couple");
  const [peopleCount, setPeopleCount] = useState(2);

  const [perDayBudget, setPerDayBudget] = useState(1000);
  const [totalBudget, setTotalBudget] = useState(0);

  const [vibe, setVibe] = useState("");
  const [avoidList, setAvoidList] = useState("");

  const [loading, setLoading] = useState(false);

  /* AUTO PEOPLE COUNT */
  useEffect(() => {
    if (groupSize === "Solo") setPeopleCount(1);
    if (groupSize === "Couple") setPeopleCount(2);
    if (groupSize === "Family" && peopleCount < 3) setPeopleCount(3);
    if (groupSize === "Friends" && peopleCount < 3) setPeopleCount(3);
  }, [groupSize]);

  /* TOTAL BUDGET */
  useEffect(() => {
    setTotalBudget(perDayBudget * days * peopleCount);
  }, [perDayBudget, days, peopleCount]);

  /* API CALL */
  const handleGenerate = async () => {
    if (!destination || !days) {
      alert("Please fill destination and days");
      return;
    }

    try {
      setLoading(true);
      navigate("/loading");

      const response = await fetch(
        "http://localhost:5000/api/trip/generate",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            destination,
            days,
            groupSize,
            peopleCount,
            perDayBudget,
            totalBudget,
            vibe,
            skip: avoidList,
          }),
        }
      );

      const data = await response.json();

      navigate("/plan", {
        state: { destination, trip: data },
      });
    } catch (err) {
      console.error(err);
      alert("Failed to generate trip");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#F4FBFA] rounded-2xl shadow-xl p-8 w-full max-w-2xl mx-auto">

      <h1 className="text-3xl font-bold text-center text-black">
        Plan Your Next Escape
      </h1>
      <p className="text-center text-black opacity-70 mt-1">
        Smart budgets. Better trips.
      </p>

      {/* TRIP BASICS */}
      <Section title="🧭 Destination & Days">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Destination (Tokyo, Paris, Bali)"
            className="w-full p-3 rounded-lg bg-[#EAF6F4] focus:ring-2 focus:ring-black outline-none"
          />

          <input
            type="number"
            min="1"
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
            className="w-full p-3 rounded-lg bg-[#EAF6F4] focus:ring-2 focus:ring-black outline-none"
          />
        </div>
      </Section>

      {/* GROUP */}
      <Section title="👥 Who’s Going">
        <select
          value={groupSize}
          onChange={(e) => setGroupSize(e.target.value)}
          className="w-full p-3 rounded-lg bg-[#EAF6F4] focus:ring-2 focus:ring-black outline-none"
        >
          <option>Solo</option>
          <option>Couple</option>
          <option>Family</option>
          <option>Friends</option>
        </select>

        {(groupSize === "Family" || groupSize === "Friends") && (
          <div className="bg-[#EAF6F4] rounded-xl p-4 flex justify-between items-center">
            <span className="text-sm font-medium">Number of people</span>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setPeopleCount(p => Math.max(3, p - 1))}
                className="w-9 h-9 bg-white rounded-full shadow font-bold"
              >
                −
              </button>

              <span className="text-lg font-semibold w-6 text-center">
                {peopleCount}
              </span>

              <button
                onClick={() =>
                  setPeopleCount(p =>
                    Math.min(groupSize === "Family" ? 10 : 15, p + 1)
                  )
                }
                className="w-9 h-9 bg-white rounded-full shadow font-bold"
              >
                +
              </button>
            </div>
          </div>
        )}
      </Section>

      {/* BUDGET */}
      <Section title="💸 Budget Plan">
        <div className="bg-[#EAF6F4] rounded-xl p-5">
          <div className="flex justify-between mb-3 font-semibold">
            <span>₹{perDayBudget.toLocaleString()} / day</span>
            <span className="text-xs opacity-60">₹100 – ₹10,000</span>
          </div>

          <input
            type="range"
            min="100"
            max="10000"
            step="100"
            value={perDayBudget}
            onChange={(e) => setPerDayBudget(Number(e.target.value))}
            className="w-full accent-black"
          />
        </div>

        <div className="bg-[#CDEDEC] rounded-xl p-4">
          <p className="text-sm opacity-70">
            ₹{perDayBudget} × {days} days × {peopleCount} people
          </p>
          <p className="text-lg font-bold">
            Total ≈ ₹{totalBudget.toLocaleString()}
          </p>
        </div>
      </Section>

      {/* VIBE */}
      <Section title="✨ Vibe Check">
        <textarea
          rows={4}
          value={vibe}
          onChange={(e) => setVibe(e.target.value)}
          placeholder="Adventure, relaxed pace, foodie experiences…"
          className="w-full p-4 rounded-xl bg-[#EAF6F4] focus:ring-2 focus:ring-black outline-none resize-none"
        />
      </Section>

      {/* AVOID */}
      <Section title="🚫 Avoid List">
        <p className="text-sm opacity-60">
          Tell us what you don’t enjoy — we’ll plan around it.
        </p>

        <input
          value={avoidList}
          onChange={(e) => setAvoidList(e.target.value)}
          placeholder="Crowds, nightlife, trekking…"
          className="w-full p-3 rounded-lg bg-[#EAF6F4] focus:ring-2 focus:ring-black outline-none"
        />
      </Section>

      <button
        onClick={handleGenerate}
        disabled={loading}
        className="mt-12 w-full bg-black text-white py-4 rounded-xl font-semibold hover:opacity-90"
      >
        {loading ? "Generating..." : "Generate ExploreX Plan →"}
      </button>

    </div>
  );
};

export default TripPlannerCard;





// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// const TripPlannerCard = () => {
//   const navigate = useNavigate();
//   const [budget, setBudget] = useState(5000);

//   const handleGenerate = () => {
//     navigate("/plan");
//   };

//   return (
//     <div className="relative bg-gradient-to-br from-[#E8F8F6] to-[#FDFEFE]
//       rounded-3xl shadow-2xl p-10 w-full max-w-3xl
//       hover:scale-[1.02] transition-transform duration-300">

//       {/* HEADER */}
//       <h1 className="text-4xl font-extrabold text-gray-900 text-center">
//         Plan Your Next Escape ✈️
//       </h1>
//       <p className="text-center text-gray-600 mt-2 mb-10">
//         Explore beyond. Live beyond.
//       </p>

//       {/* FORM GRID */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

//         {/* DESTINATION */}
//         <div>
//           <label className="text-sm font-semibold text-gray-800 mb-2 block">
//             📍 Destination
//           </label>
//           <input
//             className="w-full p-4 rounded-xl bg-[#DFF2EE]
//             focus:ring-2 focus:ring-black outline-none"
//             placeholder="Tokyo, Paris, Bali"
//           />
//         </div>

//         {/* DURATION */}
//         <div>
//           <label className="text-sm font-semibold text-gray-800 mb-2 block">
//             📅 Duration (Days)
//           </label>
//           <input
//             type="number"
//             className="w-full p-4 rounded-xl bg-[#DFF2EE]
//             focus:ring-2 focus:ring-black outline-none"
//             placeholder="3"
//           />
//         </div>

//         {/* BUDGET SLIDER */}
//         <div className="md:col-span-2">
//           <label className="text-sm font-semibold text-gray-800 mb-3 block">
//             💰 Budget (₹)
//           </label>

//           <div className="flex items-center gap-6">
//             <input
//               type="range"
//               min="0"
//               max="10000"
//               step="1000"
//               value={budget}
//               onChange={(e) => setBudget(e.target.value)}
//               className="w-full accent-black cursor-pointer"
//             />

//             <span className="min-w-[90px] text-lg font-bold text-gray-900">
//               ₹{budget}
//             </span>
//           </div>

//           {/* MARKERS */}
//           <div className="flex justify-between text-xs text-gray-500 mt-2 px-1">
//             <span>0</span>
//             <span>1k</span>
//             <span>5k</span>
//             <span>10k</span>
//           </div>
//         </div>

//         {/* GROUP SIZE */}
//         <div>
//           <label className="text-sm font-semibold text-gray-800 mb-2 block">
//             👥 Group Size
//           </label>
//           <select className="w-full p-4 rounded-xl bg-[#DFF2EE]
//             focus:ring-2 focus:ring-black outline-none">
//             <option>Solo</option>
//             <option>Couple</option>
//             <option>Family</option>
//             <option>Friends</option>
//           </select>
//         </div>

//         {/* VIBE */}
//         <div>
//           <label className="text-sm font-semibold text-gray-800 mb-2 block">
//             ✨ Trip Vibe
//           </label>
//           <input
//             className="w-full p-4 rounded-xl bg-[#DFF2EE]
//             focus:ring-2 focus:ring-black outline-none"
//             placeholder="Relaxing, Adventure, Party..."
//           />
//         </div>
//       </div>

//       {/* TAGS */}
//       <div className="flex flex-wrap gap-3 mt-6">
//         {[
//           "🌿 Chill",
//           "🌃 Nightlife",
//           "🏛 History",
//           "🍜 Foodie",
//           "🏔 Adventure",
//         ].map((tag) => (
//           <span
//             key={tag}
//             className="px-4 py-1.5 text-sm rounded-full
//             bg-white/70 backdrop-blur border hover:scale-105 transition"
//           >
//             {tag}
//           </span>
//         ))}
//       </div>

//       {/* SKIP */}
//       <div className="mt-6">
//         <label className="text-sm font-semibold text-gray-800 mb-2 block">
//           🚫 Things to Skip
//         </label>
//         <input
//           className="w-full p-4 rounded-xl bg-[#DFF2EE]
//           focus:ring-2 focus:ring-black outline-none"
//           placeholder="Crowds, Museums, Long travel"
//         />
//       </div>

//       {/* BUTTON */}
//       <button
//         onClick={handleGenerate}
//         className="mt-10 w-full bg-black text-white
//         font-bold py-4 rounded-2xl text-lg
//         hover:tracking-wide hover:bg-gray-900 transition-all"
//       >
//         Generate ExploreX Plan →
//       </button>
//     </div>
//   );
// };

// export default TripPlannerCard;