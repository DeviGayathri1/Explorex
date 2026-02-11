import React from "react";

/* ------------------ Dummy Data ------------------ */
const user = {
name: "Devi Gayathri",
tagline: "Nature-First Explorer 🌿",
countries: 8,
cities: 21,
trips: 15,
aiUsed: 43,
};

const trips = [
{ place: "Ooty", date: "Jan 2026", status: "Completed" },
{ place: "Kerala", date: "Feb 2026", status: "Completed" },
{ place: "Manali", date: "Mar 2026", status: "Planned" },
];

const travelDNA = [
{ label: "Nature", value: 80 },
 { label: "Food", value: 60 },
{ label: "Culture", value: 50 },
{ label: "Adventure", value: 40 },
];

 /* ------------------ Components ------------------ */

function ProfileHeader() {
return (
<div className="bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-xl p-6 flex items-center gap-6">
<div className="w-20 h-20 bg-white text-blue-600 rounded-full flex items-center justify-center text-3xl font-bold">
DG
</div>
<div>
<h1 className="text-2xl font-bold">{user.name}</h1>
<p className="opacity-90">{user.tagline}</p>
</div>
</div>
);
}

function StatCard({ title, value }) {
return (
<div className="bg-white rounded-lg shadow p-4 text-center">
      <h2 className="text-gray-500 text-sm">{title}</h2>
     <p className="text-2xl font-bold text-blue-600">{value}</p>
    </div>
  );
}

 function TravelStats() {
  return (
   <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <StatCard title="Countries" value={user.countries} />
      <StatCard title="Cities" value={user.cities} />
      <StatCard title="Trips Planned" value={user.trips} />
      <StatCard title="AI Used" value={user.aiUsed} />
    </div>
  );
}

 function TripTimeline() {
   return (
     <div className="bg-white rounded-xl shadow p-6">
       <h2 className="text-xl font-semibold mb-4">Your Trips</h2>
       <ul className="space-y-3">
         {trips.map((trip, index) => (
           <li
             key={index}
             className="flex justify-between items-center border-b pb-2"
           >
             <div>
               <p className="font-medium">{trip.place}</p>
               <span className="text-sm text-gray-500">{trip.date}</span>
             </div>
             <span
               className={`text-sm px-3 py-1 rounded-full ${
                 trip.status === "Completed"
                   ? "bg-green-100 text-green-700"
                   : "bg-yellow-100 text-yellow-700"
               }`}
             >
               {trip.status}
             </span>
           </li>
         ))}
      </ul>
     </div>
   );
 }

 function TravelDNA() {
   return (
     <div className="bg-white rounded-xl shadow p-6">
       <h2 className="text-xl font-semibold mb-4">Your Travel DNA</h2>
       <div className="space-y-3">
         {travelDNA.map((item, index) => (
           <div key={index}>
             <div className="flex justify-between text-sm">
               <span>{item.label}</span>
               <span>{item.value}%</span>
             </div>
             <div className="w-full bg-gray-200 rounded-full h-2">
               <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${item.value}%` }}
               />
             </div>
           </div>
        ))}
      </div>
    </div>
  );
 }

 /* ------------------ Main Page ------------------ */
 export default function ProfilePage() {
   return (
     <div className="min-h-screen bg-gray-100 p-6 space-y-6">
     <ProfileHeader />
     <TravelStats />
     <div className="grid md:grid-cols-2 gap-6">
        <TripTimeline />
       <TravelDNA />
       </div>
    </div>
 );
}
