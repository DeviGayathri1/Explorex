// ///perfect code////
// import React, { useState } from "react";
// import { LogOut, Trash2, Menu } from "lucide-react";

// /* ---------------- Toggle ---------------- */

// const Toggle = ({ enabled, onClick }) => (
//   <button
//     onClick={onClick}
//     className={`relative w-14 h-7 rounded-full transition ${
//       enabled ? "bg-indigo-600" : "bg-gray-300"
//     }`}
//   >
//     <span
//       className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition ${
//         enabled ? "translate-x-7" : ""
//       }`}
//     />
//   </button>
// );

// /* ---------------- Row ---------------- */

// const SettingRow = ({ title, enabled, onToggle }) => (
//   <div className="flex items-center justify-between py-6 border-b border-gray-100">
//     <p className="text-lg font-medium text-gray-800">
//       {title}
//     </p>
//     <Toggle enabled={enabled} onClick={onToggle} />
//   </div>
// );

// const SettingsPage = () => {
//   const [activeTab, setActiveTab] = useState("personal");
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const [settings, setSettings] = useState({
//     travelPersonality: "structured",
//     themePersonality: "classic",
//     trending: true,
//     similar: true,
//     hidden: false,
//     nearby: true,
//     tripUpdates: true,
//     priceAlerts: true,
//     aiSuggestions: true,
//     useLocation: true,
//     activityTracking: true,
//   });

//   const toggle = (key) =>
//     setSettings((prev) => ({ ...prev, [key]: !prev[key] }));

//   const update = (key, value) =>
//     setSettings((prev) => ({ ...prev, [key]: value }));

//   return (
//     <div className="flex min-h-screen bg-gray-100">

//       {/* ================= Sidebar ================= */}

//       <div className="w-80 bg-[#0F172A] text-white flex flex-col px-10 py-12">
//         <h2 className="text-2xl font-semibold mb-14">
//           ExploreX
//         </h2>

//         <nav className="space-y-8 text-lg">
//           <p className="bg-slate-800 px-5 py-3 rounded-lg">
//             Settings
//           </p>
//         </nav>

//         <div className="mt-auto pt-16 border-t border-slate-700">
//           <p className="text-lg font-medium">Team-ExplreX</p>
//           <p className="text-sm opacity-60">ExploreX@gmail.com</p>
//         </div>
//       </div>

//       {/* ================= Main Content ================= */}

//       <div className="flex-1 px-20 py-16">

//         {/* Page Title */}
//         <h1 className="text-4xl font-bold text-gray-900 mb-12">
//           Settings
//         </h1>

//         {/* Tabs */}
//         <div className="flex gap-14 border-b border-gray-300 mb-14 text-xl font-medium">
//           {[
//             { key: "personal", label: "Personal" },
//             { key: "discover", label: "Discover" },
//             { key: "notifications", label: "Notifications" },
//             { key: "privacy", label: "Privacy" },
//             { key: "account", label: "Account" },
//           ].map((tab) => (
//             <button
//               key={tab.key}
//               onClick={() => setActiveTab(tab.key)}
//               className={`pb-6 transition ${
//                 activeTab === tab.key
//                   ? "border-b-4 border-indigo-600 text-indigo-600"
//                   : "text-gray-500 hover:text-gray-700"
//               }`}
//             >
//               {tab.label}
//             </button>
//           ))}
//         </div>

//         {/* Content Box */}
//         <div className="bg-white rounded-2xl shadow-sm p-14">

//           {/* PERSONAL */}
//           {activeTab === "personal" && (
//             <>
//               <h2 className="text-2xl font-semibold mb-10">
//                 Travel Personality
//               </h2>

//               <div className="grid grid-cols-3 gap-8 mb-16">
//                 {[
//                   "relaxed",
//                   "structured",
//                   "adventurous",
//                   "business",
//                   "luxury",
//                 ].map((type) => (
//                   <button
//                     key={type}
//                     onClick={() => update("travelPersonality", type)}
//                     className={`py-5 text-lg rounded-xl border capitalize transition ${
//                       settings.travelPersonality === type
//                         ? "border-indigo-600 bg-indigo-50 text-indigo-600"
//                         : "border-gray-200 hover:border-indigo-400"
//                     }`}
//                   >
//                     {type}
//                   </button>
//                 ))}
//               </div>

//               <h2 className="text-2xl font-semibold mb-10">
//                 Theme Personality
//               </h2>

//               <div className="grid grid-cols-4 gap-8">
//                 {["classic", "sunset", "midnight", "minimal"].map(
//                   (theme) => (
//                     <button
//                       key={theme}
//                       onClick={() =>
//                         update("themePersonality", theme)
//                       }
//                       className={`py-5 text-lg rounded-xl border capitalize transition ${
//                         settings.themePersonality === theme
//                           ? "border-indigo-600 bg-indigo-50 text-indigo-600"
//                           : "border-gray-200 hover:border-indigo-400"
//                       }`}
//                     >
//                       {theme}
//                     </button>
//                   )
//                 )}
//               </div>
//             </>
//           )}

//           {/* DISCOVER */}
//           {activeTab === "discover" && (
//             <>
//               <SettingRow
//                 title="Show trending destinations"
//                 enabled={settings.trending}
//                 onToggle={() => toggle("trending")}
//               />
//               <SettingRow
//                 title="Prioritize similar places"
//                 enabled={settings.similar}
//                 onToggle={() => toggle("similar")}
//               />
//               <SettingRow
//                 title="Surprise me with hidden gems"
//                 enabled={settings.hidden}
//                 onToggle={() => toggle("hidden")}
//               />
//               <SettingRow
//                 title="Suggest nearby short trips"
//                 enabled={settings.nearby}
//                 onToggle={() => toggle("nearby")}
//               />
//             </>
//           )}

//           {/* NOTIFICATIONS */}
//           {activeTab === "notifications" && (
//             <>
//               <SettingRow
//                 title="Trip updates"
//                 enabled={settings.tripUpdates}
//                 onToggle={() => toggle("tripUpdates")}
//               />
//               <SettingRow
//                 title="Price alerts"
//                 enabled={settings.priceAlerts}
//                 onToggle={() => toggle("priceAlerts")}
//               />
//               <SettingRow
//                 title="AI recommendations"
//                 enabled={settings.aiSuggestions}
//                 onToggle={() => toggle("aiSuggestions")}
//               />
//             </>
//           )}

//           {/* PRIVACY */}
//           {activeTab === "privacy" && (
//             <>
//               <SettingRow
//                 title="Use location for smarter suggestions"
//                 enabled={settings.useLocation}
//                 onToggle={() => toggle("useLocation")}
//               />
//               <SettingRow
//                 title="Use activity data to improve AI"
//                 enabled={settings.activityTracking}
//                 onToggle={() => toggle("activityTracking")}
//               />
//             </>
//           )}

//           {/* ACCOUNT */}
//           {activeTab === "account" && (
//             <div className="space-y-8 text-lg">
//               <button className="flex items-center gap-3 text-gray-700 hover:text-indigo-600">
//                 <LogOut size={22} />
//                 Log out
//               </button>

//               <button className="flex items-center gap-3 text-red-600 hover:text-red-700">
//                 <Trash2 size={22} />
//                 Delete account
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Save Button */}
//         <div className="flex justify-end mt-12">
//           <button className="bg-[#0F172A] text-white px-10 py-4 text-lg rounded-xl hover:opacity-90 transition">
//             Save Changes
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SettingsPage;


import React, { useState, useEffect } from "react";
import { LogOut, Trash2 } from "lucide-react";
import API from "../api"; // Axios instance
import { useNavigate } from "react-router-dom";

/* ---------------- Toggle ---------------- */
const Toggle = ({ enabled, onClick }) => (
  <button
    onClick={onClick}
    className={`relative w-14 h-7 rounded-full transition ${
      enabled ? "bg-indigo-600" : "bg-gray-300"
    }`}
  >
    <span
      className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition ${
        enabled ? "translate-x-7" : ""
      }`}
    />
  </button>
);

/* ---------------- Setting Row ---------------- */
const SettingRow = ({ title, enabled, onToggle }) => (
  <div className="flex items-center justify-between py-6 border-b border-gray-100">
    <p className="text-lg font-medium text-gray-800">{title}</p>
    <Toggle enabled={enabled} onClick={onToggle} />
  </div>
);

const SettingsPage = () => {
  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem("user"));
const userId = storedUser?._id;
  const [activeTab, setActiveTab] = useState("personal");
  const [settings, setSettings] = useState({
  TravelPersonality: "structured",
  ThemePersonality: "classic",
  trending: true,
  similar: true,
  hidden: false,
  nearby: true,
  Tripupdates: true,
  Pricealerts: true,
  AIrecommendations: true,
  Uselocation: true,
  activityTracking: true,
});


  // ---------------- Fetch settings from backend ----------------
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await API.get(`/settings/${userId}`);
        if (res.data) {
  setSettings(res.data);

  // Make settings globally available
  localStorage.setItem("settings", JSON.stringify(res.data));

  // Apply theme immediately
  document.body.classList.remove(
    "classic-theme",
    "sunset-theme",
    "midnight-theme",
    "minimal-theme"
  );

  if (res.data.ThemePersonality) {
    document.body.classList.add(
      `${res.data.ThemePersonality}-theme`
    );
  }
}
      }
         catch (err) {
        console.error("Error fetching settings:", err);
      }
    };
    if (userId) fetchSettings();
  }, [userId]);

  // ---------------- Toggle / Update handlers ----------------
  const toggle = (key) =>
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));

  const update = (key, value) =>
    setSettings((prev) => ({ ...prev, [key]: value }));

  // ---------------- Save settings ----------------
  const handleSave = async () => { ///new change////
  try {
    await API.put(`/settings/${userId}`, settings);

    // 🔥 Save globally
    localStorage.setItem("settings", JSON.stringify(settings));

    // 🔥 Apply theme immediately
    document.body.classList.remove(
      "classic-theme",
      "sunset-theme",
      "midnight-theme",
      "minimal-theme"
    );
    

    if (settings.ThemePersonality) {
      document.body.classList.add(
        `${settings.ThemePersonality}-theme`
      );
    }

    alert("Settings saved successfully!");
  } catch (err) {
    console.error("Error saving settings:", err);
    alert("Failed to save settings.");
  }
};


const setTheme = (themeName) => {
  document.body.classList.remove(
    "classic-theme",
    "sunset-theme",
    "midnight-theme",
    "minimal-theme"
  );

  document.body.classList.add(themeName);
};

  // ---------------- Logout ----------------
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* ================= Sidebar ================= */}
      <div className="w-80 bg-[#0F172A] text-white flex flex-col px-10 py-12">
        <h2 className="text-2xl font-semibold mb-14">ExploreX</h2>
        <nav className="space-y-8 text-lg">
          <p className="bg-slate-800 px-5 py-3 rounded-lg">Settings</p>
        </nav>
        <div className="mt-auto pt-16 border-t border-slate-700">
          <p className="text-lg font-medium">Team-ExploreX</p>
          <p className="text-sm opacity-60">ExploreX@gmail.com</p>
        </div>
      </div>

      {/* ================= Main Content ================= */}
      <div className="flex-1 px-20 py-16">
        <div className="flex items-center gap-6 mb-12">
  <button
    onClick={() => navigate("/home",{ state: { activeSection: "home" } })}
    className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition text-gray-800"
  >
    ← Back
  </button>

  <h1 className="text-4xl font-bold text-gray-900">
    Settings
  </h1>
</div>


        {/* ---------------- Tabs ---------------- */}
        <div className="flex gap-14 border-b border-gray-300 mb-14 text-xl font-medium">
          {[
            { key: "personal", label: "Personal" },
            { key: "discover", label: "Discover" },
            { key: "notifications", label: "Notifications" },
            { key: "privacy", label: "Privacy" },
            { key: "account", label: "Account" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`pb-6 transition ${
                activeTab === tab.key
                  ? "border-b-4 border-indigo-600 text-indigo-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ---------------- Content Box ---------------- */}
        <div className="bg-white rounded-2xl shadow-sm p-14">
          {/* PERSONAL */}
          {activeTab === "personal" && (
            <>
              <h2 className="text-2xl font-semibold mb-10">Travel Personality</h2>
              <div className="grid grid-cols-3 gap-8 mb-16">
                {["relaxed", "structured", "adventurous", "business", "luxury"].map(
                  (type) => (
                    <button
                      key={type}
                      onClick={() => update("TravelPersonality", type)}
                      className={`py-5 text-lg rounded-xl border capitalize transition ${
                        settings.TravelPersonality === type
                          ? "border-indigo-600 bg-indigo-600/20 text-indigo-600"
                          : "border-gray-200 hover:border-indigo-400"
                      }`}
                    >
                      {type}
                    </button>
                  )
                )}
              </div>

              <h2 className="text-2xl font-semibold mb-10">Theme Personality</h2>
              <div className="grid grid-cols-4 gap-8">
                {["classic", "sunset", "midnight", "minimal"].map((theme) => (
                  <button
                    key={theme}
                    onClick={() => update("ThemePersonality", theme)}
                    className={`py-5 text-lg rounded-xl border capitalize transition ${
                      settings.ThemePersonality === theme
                        ? "border-indigo-600 bg-indigo-600/20 text-indigo-600"
                        : "border-gray-200 hover:border-indigo-400"
                    }`}
                  >
                    {theme}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* DISCOVER */}
          {activeTab === "discover" && (
            <>
              <SettingRow
                title="Show trending destinations"
                enabled={settings.trending}
                onToggle={() => toggle("trending")}
              />
              <SettingRow
                title="Prioritize similar places"
                enabled={settings.similar}
                onToggle={() => toggle("similar")}
              />
              <SettingRow
                title="Surprise me with hidden gems"
                enabled={settings.hidden}
                onToggle={() => toggle("hidden")}
              />
              <SettingRow
                title="Suggest nearby short trips"
                enabled={settings.nearby}
                onToggle={() => toggle("nearby")}
              />
            </>
          )}

          {/* NOTIFICATIONS */}
          {activeTab === "notifications" && (
            <>
              <SettingRow
                title="Trip updates"
                enabled={settings.Tripupdates}
                onToggle={() => toggle("Tripupdates")}
              />
              <SettingRow
                title="Price alerts"
                enabled={settings.Pricealerts}
                onToggle={() => toggle("Pricealerts")}
              />
              <SettingRow
                title="AI recommendations"
                enabled={settings.AIrecommendations}
                onToggle={() => toggle("AIrecommendations")}
              />
            </>
          )}

          {/* PRIVACY */}
          {activeTab === "privacy" && (
            <>
              <SettingRow
                title="Use location for smarter suggestions"
                enabled={settings.Uselocation}
                onToggle={() => toggle("Uselocation")}
              />
              <SettingRow
                title="Use activity data to improve AI"
                enabled={settings.activityTracking}
                onToggle={() => toggle("activityTracking")}
              />
            </>
          )}

          {/* ACCOUNT */}
          {activeTab === "account" && (
            <div className="space-y-8 text-lg">
              <button
                className="flex items-center gap-3 text-gray-700 hover:text-indigo-600"
                onClick={handleLogout}
              >
                <LogOut size={22} />
                Log out
              </button>

              <button
                className="flex items-center gap-3 text-red-600 hover:text-red-700"
                onClick={async () => {
  const confirmDelete = window.confirm(
    "⚠️ Are you sure you want to delete your account?\n\n❌ This action cannot be undone."
  );

  if (!confirmDelete) return;

  try {
    const response = await API.delete(`/settings/${userId}`);

    if (response.status === 200) {
      alert("✅ Your account has been deleted successfully.");
      localStorage.clear();
      navigate("/");
    }

  } catch (err) {
    console.error("Delete account error:", err);
    alert("❌ Failed to delete account. Please try again.");
  }
}}


              >
                <Trash2 size={22} />
                Delete account
              </button>
            </div>
          )}
        </div>

        {/* Save Button */}
        <div className="flex justify-end mt-12">
          <button
            onClick={handleSave}
            className="bg-[#0F172A] text-white px-10 py-4 text-lg rounded-xl hover:opacity-90 transition"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
