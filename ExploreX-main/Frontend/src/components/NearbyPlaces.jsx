
 import { useEffect, useState, useRef } from "react";

 /* ---------- IMAGE WITH FALLBACK ---------- */
const ImageWithFallback = ({ name }) => {
const imageUrl = `https://source.unsplash.com/400x300/?${encodeURIComponent(
name
 )},tourism`;

return (
<img
src={imageUrl}
 alt={name}
 className="w-full h-40 object-cover rounded-t-xl"
loading="lazy"
 />
 );
};

 /* ---------- DISTANCE CALCULATION ---------- */
 const getDistanceKm = (lat1, lon1, lat2, lon2) => {
const toRad = (v) => (v * Math.PI) / 180;
const R = 6371;

 const dLat = toRad(lat2 - lat1);
const dLon = toRad(lon2 - lon1);

const a =
 Math.sin(dLat / 2) ** 2 +
 Math.cos(toRad(lat1)) *
Math.cos(toRad(lat2)) *
 Math.sin(dLon / 2) ** 2;

return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};

/* ---------- MAIN COMPONENT ---------- */
const NearbyPlaces = () => {
const [places, setPlaces] = useState([]);
const [loading, setLoading] = useState(true);
const scrollRef = useRef(null);

useEffect(() => {
navigator.geolocation.getCurrentPosition(
(pos) => {
const { latitude, longitude } = pos.coords;

fetch(
 `http://localhost:5000/api/nearby?lat=${latitude}&lng=${longitude}`
 )
  .then((res) => res.json())
.then((data) => {
 if (Array.isArray(data)) {
 const enriched = data.map((p) => ({
 ...p,
  distance: getDistanceKm(
 latitude,
 longitude,
   p.location.coordinates[1],
p.location.coordinates[0]
 ),
 }));

 setPlaces(enriched);
         }
     })
.catch(console.error)
 .finally(() => setLoading(false));
  },
 () => setLoading(false)
 );
}, []);

 const scroll = (dir) => {
 scrollRef.current.scrollBy({
 left: dir * 320,
 behavior: "smooth",
 });
 };

 if (loading) {
 return (
 <div className="max-w-6xl mx-auto mt-16 px-4">
  <h2 className="text-2xl font-bold mb-6">📍 Nearby Places</h2>
  <div className="flex gap-6">
  {[1, 2, 3, 4].map((i) => (
 <div
     key={i}
      className="w-[280px] h-64 bg-gray-200 rounded-xl animate-pulse"
  />
     ))}
  </div>
 </div>
 );
 }

 if (!places.length) {
 return (
 <p className="text-center text-gray-500 mt-10">
 No nearby places found.
 </p>
 );
 }

 return (
 <div className="max-w-6xl mx-auto mt-16 px-4">
 <h2 className="text-2xl font-bold mb-6">📍 Nearby Places</h2>

  <div className="relative">
  {/* LEFT ARROW — OUTSIDE */}
        <button
          onClick={() => scrollByCards(-1)}
          className="
            -ml-20
            bg-gray-100 hover:bg-gray-200
            rounded-full w-8 h-14
            flex items-center justify-center
            shadow-md hover:scale-110 transition
            z-30
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-7 h-7 text-gray-700"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

  {/* CARDS */}
 <div
 ref={scrollRef}
 className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
  >
   {places.map((place, i) => (
    <div
       key={i}
     className="min-w-[280px] bg-white rounded-xl shadow hover:shadow-lg transition"
   >
     <ImageWithFallback name={place.name} />

   <div className="p-4">
    <h3 className="font-semibold text-lg">{place.name}</h3>

   <p className="text-sm text-gray-500 mt-1 line-clamp-2">
        {place.category}
       </p>

        <p className="text-sm text-blue-600 mt-2">
           📍 {place.distance.toFixed(1)} km away
         </p>
        </div>
        </div>
    ))}
     </div>

  {/* RIGHT ARROW — OUTSIDE */}
        <button
          onClick={() => scrollByCards(1)}
          className="
            mr-20
            bg-gray-100 hover:bg-gray-200
            rounded-full w-14 h-14
            flex items-center justify-center
            shadow-md hover:scale-110 transition
            z-20
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-7 h-7 text-gray-700"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
 </div>
 </div>
 );
};
export default NearbyPlaces;










