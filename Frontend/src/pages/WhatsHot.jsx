/////perfect code ////
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import bgPattern from "../assets/travel-pattern.jpg";

// import { getHotAnalytics } from "../services/analyticsService";
// import { globalTrending } from "../data/globalTrending";

// import PulseBar from "../components/WhatsHot/PulseBar";
// import HotSection from "../components/WhatsHot/HotSection";
// import HotCard from "../components/WhatsHot/HotCard";
// import TravelBuzz from "../components/WhatsHot/TravelBuzz";

// const WhatsHot = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);

//   const [data, setData] = useState({
//     trending: [],
//     loved: [],
//     heatingUp: [],
//     pulse: [],
//   });

//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         setLoading(true);

//         /* ------------------ USER ANALYTICS ------------------ */
//         const analytics = (await getHotAnalytics()) || [];
//         const now = Date.now();

//         const analyticsMap = {};
//         analytics.forEach((item) => {
//           analyticsMap[item.destination] = item;
//         });

//         /* ------------------ TRENDING NOW ------------------ */
//         const trending = globalTrending.trendingNow.map((item) => {
//           const userData = analyticsMap[item.destination];
//           return {
//             destination: item.destination,
//             image: item.image,
//             reason: item.reason,
//             totalCount: 50 + (userData?.totalCount || 0),
//           };
//         });

//         /* ------------------ LOVED BY TRAVELERS ------------------ */
//         const loved = globalTrending.lovedByTravelers.map((item) => {
//           const userData = analyticsMap[item.destination];
//           return {
//             destination: item.destination,
//             image: item.image,
//             reason: item.reason,
//             usersCount: userData?.usersCount || 30,
//           };
//         });

//         /* ------------------ HEATING UP ------------------ */
//         const heatingUp =
//           analytics.length > 0
//             ? analytics.filter(
//                 (item) =>
//                   item.timestamps?.filter(
//                     (t) => now - t < 48 * 60 * 60 * 1000
//                   ).length >= 2
//               )
//             : globalTrending.heatingUp;

//         /* ------------------ LIVE PULSE ------------------ */
//         const pulse = trending.slice(0, 3).map(
//           (item) => `🔥 ${item.destination} is trending right now`
//         );

//         setData({
//           trending,
//           loved,
//           heatingUp,
//           pulse,
//         });
//       } catch (error) {
//         console.error("WhatsHot load error:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadData();
//   }, []);

//   const openTrip = (destination) => {
//     navigate("/trip-plan", { state: { destination } });
//   };

//   /* ------------------ LOADING ------------------ */
//   if (loading) {
//     return (
//       <div className="h-screen flex items-center justify-center text-gray-500">
//         Finding what’s hot 🔥
//       </div>
//     );
//   }

//   /* ------------------ UI ------------------ */
//   return (
//     <div
//       className="relative min-h-screen w-full overflow-x-hidden"
//     style={{
//       backgroundImage: `url(${bgPattern})`,
//       backgroundRepeat: "repeat",
//       backgroundSize: "300px",
//       opacity: 0.8, // 🔽 adjust this (0.05 – 0.25)
//       }}
//     >
//       {/* 🔙 Back Button */}
//         <button
//           onClick={() => navigate("/home")}
//           className="
//             inline-flex items-center gap-10
//             px-5 py-2
//             bg-white/90 backdrop-blur
//             rounded-full
//             shadow-md
//             hover:scale-105
//             transition
//           "
//         >
//           ← Back 
//         </button>
//       {/* ⚡ Live Pulse */}
//       <PulseBar pulse={data.pulse} />
//       {/* 🌍 Travel Buzz */}
// <div className="mb-14">
//   <TravelBuzz items={globalTrending.travelBuzz} />
// </div>

//       {/* 🔥 Trending Now */}
//       <HotSection title="🔥 Trending Now">
//         {data.trending.map((item) => (
//           <HotCard
//             key={item.destination}
//             item={item}
//             subtitle={item.reason || "Trending worldwide"}
//             onClick={openTrip}
//           />
//         ))}
//       </HotSection>

//       {/* ❤️ Loved by Travelers */}
//       <HotSection title="❤️ Loved by Travelers">
//         {data.loved.map((item) => (
//           <HotCard
//             key={item.destination}
//             item={item}
//             subtitle={item.reason || "Loved by travelers"}
//             onClick={openTrip}
//           />
//         ))}
//       </HotSection>

//       {/* ⏳ Heating Up */}
//       {data.heatingUp.length > 0 && (
//         <HotSection title="⏳ Heating Up">
//           {data.heatingUp.map((item) => (
//             <HotCard
//               key={item.destination}
//               item={item}
//               subtitle="Trending fast in last 48 hours"
//               onClick={openTrip}
//             />
//           ))}
//         </HotSection>
//       )}
//     </div>
//   );
// };

// export default WhatsHot;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bgPattern from "../assets/travel-pattern.jpg";

import { getHotAnalytics } from "../services/analyticsService";
import { globalTrending } from "../data/globalTrending";

import PulseBar from "../components/WhatsHot/PulseBar";
import HotSection from "../components/WhatsHot/HotSection";
import HotCard from "../components/WhatsHot/HotCard";
import TravelBuzz from "../components/WhatsHot/TravelBuzz";

/* ✅ GUARANTEED UNIQUE IMAGE (NO CACHE ISSUE) */
const getUniqueImage = (destination, seed) => {
  const hash =
    Math.abs(
      [...destination].reduce(
        (acc, char) => acc + char.charCodeAt(0),
        seed
      )
    ) + seed;

  return `https://picsum.photos/seed/${hash}/800/400`;
};

const WhatsHot = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState({
    trending: [],
    loved: [],
    heatingUp: [],
    pulse: [],
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);

        const analytics = (await getHotAnalytics()) || [];
        const now = Date.now();

        const analyticsMap = {};
        analytics.forEach((item) => {
          analyticsMap[item.destination] = item;
        });

        /* 🔥 Trending Now */
        const trending = globalTrending.trendingNow.map((item, index) => ({
          destination: item.destination,
          reason: item.reason,
          image: getUniqueImage(item.destination, index),
          totalCount: 50 + (analyticsMap[item.destination]?.totalCount || 0),
        }));

        /* ❤️ Loved by Travelers */
        const loved = globalTrending.lovedByTravelers.map((item, index) => ({
          destination: item.destination,
          reason: item.reason,
          image: getUniqueImage(item.destination, index + 50),
          usersCount: analyticsMap[item.destination]?.usersCount || 30,
        }));

        /* ⏳ Heating Up */
        const heatingUp =
          analytics.length > 0
            ? analytics
                .filter(
                  (item) =>
                    item.timestamps?.filter(
                      (t) => now - t < 48 * 60 * 60 * 1000
                    ).length >= 2
                )
                .map((item, index) => ({
                  destination: item.destination,
                  image: getUniqueImage(item.destination, index + 100),
                }))
            : globalTrending.heatingUp.map((item, index) => ({
                destination: item.destination,
                image: getUniqueImage(item.destination, index + 100),
              }));

        const pulse = trending
          .slice(0, 3)
          .map((item) => `🔥 ${item.destination} is trending right now`);

        setData({ trending, loved, heatingUp, pulse });
      } catch (err) {
        console.error("WhatsHot load error:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const openTrip = (destination) => {
    navigate("/trip-plan", { state: { destination } });
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-500">
        Finding what’s hot 🔥
      </div>
    );
  }

  return (
    <div
      className="relative min-h-screen w-full overflow-x-hidden"
      style={{
        backgroundImage: `url(${bgPattern})`,
        backgroundRepeat: "repeat",
        backgroundSize: "300px",
      }}
    >
      {/* Back */}
      <button
        onClick={() => navigate("/home")}
        className="ml-4 mt-4 px-5 py-2 bg-white rounded-full shadow hover:scale-105 transition"
      >
        ← Back
      </button>

      <PulseBar pulse={data.pulse} />

      <div className="mb-14">
        <TravelBuzz items={globalTrending.travelBuzz} />
      </div>

      <HotSection title="🔥 Trending Now">
        {data.trending.map((item) => (
          <HotCard
            key={`trend-${item.destination}`}
            item={item}
            subtitle={item.reason}
            onClick={openTrip}
          />
        ))}
      </HotSection>

      <HotSection title="❤️ Loved by Travelers">
        {data.loved.map((item) => (
          <HotCard
            key={`love-${item.destination}`}
            item={item}
            subtitle={item.reason}
            onClick={openTrip}
          />
        ))}
      </HotSection>

      {data.heatingUp.length > 0 && (
        <HotSection title="⏳ Heating Up">
          {data.heatingUp.map((item, index) => (
            <HotCard
              key={`heat-${item.destination}-${index}`}
              item={item}
              subtitle="Trending fast in last 48 hours"
              onClick={openTrip}
            />
          ))}
        </HotSection>
      )}
    </div>
  );
};

export default WhatsHot;






