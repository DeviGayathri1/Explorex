// import { useState } from "react";
// import SettingsSection from "../components/Settings/SettingsSection";
// import ToggleRow from "../components/Settings/ToggleRow";
// import RadioGroupRow from "../components/Settings/RadioGroupRow";
// import ActionRow from "../components/Settings/ActionRow";
// import bgPattern from "../assets/travel-pattern.jpg";

// const Settings = () => {
//   const [settings, setSettings] = useState({
//     aiLevel: "balanced",
//     tripDetail: "balanced",
//     autoAdjust: true,

//     showTrending: true,
//     prioritizeFavorites: true,
//     surpriseMe: false,
//     nearbyTrips: true,

//     tripUpdates: true,
//     priceAlerts: true,
//     aiSuggestions: true,

//     useLocation: true,
//     showProfile: false,
//     useActivity: true,

//     language: "English",
//     currency: "INR",
//     dateFormat: "DD/MM/YYYY",

//     layoutDensity: "comfortable",
//   });

//   const updateSetting = (key, value) => {
//     setSettings((prev) => ({ ...prev, [key]: value }));
//   };

//   return (
//     /* 🔥 BACKGROUND WRAPPER */
//     <div
//       className="min-h-screen w-full"
//       style={{
//         backgroundImage: `url(${bgPattern})`,
//         backgroundRepeat: "repeat",
//         backgroundSize: "300px",
//         opacity: 0.8,
//       }}
//     >
//       {/* CONTENT WRAPPER (UNCHANGED) */}
//       <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
//         <h1 className="text-2xl font-semibold text-blue-900">Settings</h1>

//         {/* 1. ExploreX Behavior */}
//         <SettingsSection
//           title="How ExploreX Works for You"
//           subtitle="Control how smart and detailed ExploreX should be."
//         >
//           <RadioGroupRow
//             label="AI Suggestion Level"
//             value={settings.aiLevel}
//             options={["minimal", "balanced", "deep"]}
//             onChange={(v) => updateSetting("aiLevel", v)}
//           />

//           <RadioGroupRow
//             label="Trip Detail Level"
//             value={settings.tripDetail}
//             options={["short", "balanced", "detailed"]}
//             onChange={(v) => updateSetting("tripDetail", v)}
//           />

//           <ToggleRow
//             label="Auto-adjust trips when data changes"
//             checked={settings.autoAdjust}
//             onChange={(v) => updateSetting("autoAdjust", v)}
//           />
//         </SettingsSection>

//         {/* 2. Discover Mode */}
//         <SettingsSection
//           title="Discover Mode"
//           subtitle="Choose how you like to explore new places."
//         >
//           <ToggleRow
//             label="Show trending destinations"
//             checked={settings.showTrending}
//             onChange={(v) => updateSetting("showTrending", v)}
//           />

//           <ToggleRow
//             label="Prioritize places similar to favorites"
//             checked={settings.prioritizeFavorites}
//             onChange={(v) =>
//               updateSetting("prioritizeFavorites", v)
//             }
//           />

//           <ToggleRow
//             label="Surprise me with hidden gems"
//             checked={settings.surpriseMe}
//             onChange={(v) => updateSetting("surpriseMe", v)}
//           />

//           <ToggleRow
//             label="Suggest nearby short trips"
//             checked={settings.nearbyTrips}
//             onChange={(v) => updateSetting("nearbyTrips", v)}
//           />
//         </SettingsSection>

//         {/* 3. Notifications */}
//         <SettingsSection title="Notifications & Alerts">
//           <ToggleRow
//             label="Trip updates"
//             checked={settings.tripUpdates}
//             onChange={(v) => updateSetting("tripUpdates", v)}
//           />

//           <ToggleRow
//             label="Price change alerts"
//             checked={settings.priceAlerts}
//             onChange={(v) => updateSetting("priceAlerts", v)}
//           />

//           <ToggleRow
//             label="AI recommendations"
//             checked={settings.aiSuggestions}
//             onChange={(v) => updateSetting("aiSuggestions", v)}
//           />
//         </SettingsSection>

//         {/* 4. Privacy & Safety */}
//         <SettingsSection title="Privacy & Safety">
//           <ToggleRow
//             label="Use location for nearby trips"
//             description="Improves nearby recommendations"
//             checked={settings.useLocation}
//             onChange={(v) => updateSetting("useLocation", v)}
//           />

//           <ToggleRow
//             label="Show profile to others"
//             description="Visible in future social features"
//             checked={settings.showProfile}
//             onChange={(v) => updateSetting("showProfile", v)}
//           />

//           <ToggleRow
//             label="Use activity data for smarter suggestions"
//             description="Helps ExploreX learn your travel style"
//             checked={settings.useActivity}
//             onChange={(v) => updateSetting("useActivity", v)}
//           />
//         </SettingsSection>

//         {/* 5. Language & Region */}
//         <SettingsSection title="Language & Region">
//           <RadioGroupRow
//             label="Layout Preference"
//             value={settings.layoutDensity}
//             options={["compact", "comfortable", "spacious"]}
//             onChange={(v) =>
//               updateSetting("layoutDensity", v)
//             }
//           />
//         </SettingsSection>

//         {/* 6. Data Control */}
//         <SettingsSection title="Your ExploreX Data">
//           <ActionRow label="Clear search history" />
//           <ActionRow label="Reset recommendations" />
//           <ActionRow label="Clear cached trips" />
//         </SettingsSection>

//         {/* 7. Account */}
//         <SettingsSection title="Account" danger>
//           <ActionRow label="Log out" danger />
//           <ActionRow label="Reset ExploreX experience" danger />
//           <ActionRow label="Delete account" danger />
//         </SettingsSection>
//       </div>
//     </div>
//   );
// };

// export default Settings;

import { useState } from "react";
import SettingsSection from "../components/Settings/SettingsSection";
import ToggleRow from "../components/Settings/ToggleRow";
import ActionRow from "../components/Settings/ActionRow";
import bgPattern from "../assets/travel-pattern.jpg";

/* =========================
   SEGMENTED CONTROL (NEW UI)
========================= */
const SegmentedControl = ({ label, value, options, onChange, hint }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-800">
          {label}
        </span>
        {hint && (
          <span className="text-xs text-gray-500">{hint}</span>
        )}
      </div>

      <div className="flex rounded-xl bg-gray-100 p-1">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`flex-1 py-2 text-sm capitalize rounded-lg transition ${
              value === opt
                ? "bg-blue-600 text-white shadow"
                : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

/* =========================
   MAIN SETTINGS PAGE
========================= */
const Settings = () => {
  const [settings, setSettings] = useState({
    aiLevel: "balanced",
    tripDetail: "balanced",
    autoAdjust: true,

    showTrending: true,
    prioritizeFavorites: true,
    surpriseMe: false,
    nearbyTrips: true,

    tripUpdates: true,
    priceAlerts: true,
    aiSuggestions: true,

    useLocation: true,
    showProfile: false,
    useActivity: true,

    language: "English",
    currency: "INR",
    dateFormat: "DD/MM/YYYY",

    layoutDensity: "comfortable",
  });

  const updateSetting = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  return (
    /* 🔥 BACKGROUND WRAPPER */
    <div
      className="min-h-screen w-full"
      style={{
        backgroundImage: `url(${bgPattern})`,
        backgroundRepeat: "repeat",
        backgroundSize: "300px",
      }}
    >
      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        <h1 className="text-2xl font-semibold text-blue-900">
          Settings
        </h1>

        {/* 1. ExploreX Behavior */}
        <SettingsSection
          title="How ExploreX Works for You"
          subtitle="Tune how intelligent and detailed your trips feel."
        >
          <SegmentedControl
            label="AI Suggestion Level"
            value={settings.aiLevel}
            options={["minimal", "balanced", "deep"]}
            hint="How much the AI thinks ahead"
            onChange={(v) => updateSetting("aiLevel", v)}
          />

          <p className="text-xs text-gray-500">
            {settings.aiLevel === "minimal" &&
              "Light suggestions with flexibility."}
            {settings.aiLevel === "balanced" &&
              "Smart planning without overloading you."}
            {settings.aiLevel === "deep" &&
              "Deep analysis of routes, timing, and costs."}
          </p>

          <SegmentedControl
            label="Trip Detail Level"
            value={settings.tripDetail}
            options={["short", "balanced", "detailed"]}
            hint="How detailed plans should be"
            onChange={(v) => updateSetting("tripDetail", v)}
          />

          <ToggleRow
            label="Auto-adjust trips when data changes"
            checked={settings.autoAdjust}
            onChange={(v) => updateSetting("autoAdjust", v)}
          />
        </SettingsSection>

        {/* 2. Discover Mode */}
        <SettingsSection
          title="Discover Mode"
          subtitle="Choose how ExploreX finds new places for you."
        >
          <ToggleRow
            label="Show trending destinations"
            checked={settings.showTrending}
            onChange={(v) => updateSetting("showTrending", v)}
          />

          <ToggleRow
            label="Prioritize places similar to favorites"
            checked={settings.prioritizeFavorites}
            onChange={(v) =>
              updateSetting("prioritizeFavorites", v)
            }
          />

          <ToggleRow
            label="Surprise me with hidden gems"
            checked={settings.surpriseMe}
            onChange={(v) => updateSetting("surpriseMe", v)}
          />

          <ToggleRow
            label="Suggest nearby short trips"
            checked={settings.nearbyTrips}
            onChange={(v) => updateSetting("nearbyTrips", v)}
          />
        </SettingsSection>

        {/* 3. Notifications */}
        <SettingsSection title="Notifications & Alerts">
          <ToggleRow
            label="Trip updates"
            checked={settings.tripUpdates}
            onChange={(v) => updateSetting("tripUpdates", v)}
          />

          <ToggleRow
            label="Price change alerts"
            checked={settings.priceAlerts}
            onChange={(v) => updateSetting("priceAlerts", v)}
          />

          <ToggleRow
            label="AI recommendations"
            checked={settings.aiSuggestions}
            onChange={(v) => updateSetting("aiSuggestions", v)}
          />
        </SettingsSection>

        {/* 4. Privacy & Safety */}
        <SettingsSection title="Privacy & Safety">
          <ToggleRow
            label="Use location for nearby trips"
            description="Improves nearby recommendations"
            checked={settings.useLocation}
            onChange={(v) => updateSetting("useLocation", v)}
          />

          <ToggleRow
            label="Show profile to others"
            description="Visible in future social features"
            checked={settings.showProfile}
            onChange={(v) => updateSetting("showProfile", v)}
          />

          <ToggleRow
            label="Use activity data for smarter suggestions"
            description="Helps ExploreX learn your travel style"
            checked={settings.useActivity}
            onChange={(v) => updateSetting("useActivity", v)}
          />
        </SettingsSection>

        {/* 5. Language & Region */}
        <SettingsSection title="Layout & Display">
          <SegmentedControl
            label="Layout Density"
            value={settings.layoutDensity}
            options={["compact", "comfortable", "spacious"]}
            hint="How much content fits on screen"
            onChange={(v) =>
              updateSetting("layoutDensity", v)
            }
          />

          <p className="text-xs text-gray-500">
            {settings.layoutDensity === "compact" &&
              "More content, less spacing."}
            {settings.layoutDensity === "comfortable" &&
              "Balanced spacing for daily use."}
            {settings.layoutDensity === "spacious" &&
              "Relaxed layout with extra breathing room."}
          </p>
        </SettingsSection>

        {/* 6. Data Control */}
        <SettingsSection title="Your ExploreX Data">
          <ActionRow label="Clear search history" />
          <ActionRow label="Reset recommendations" />
          <ActionRow label="Clear cached trips" />
        </SettingsSection>

        {/* 7. Account */}
        <SettingsSection title="Account" danger>
          <ActionRow label="Log out" danger />
          <ActionRow label="Reset ExploreX experience" danger />
          <ActionRow label="Delete account" danger />
        </SettingsSection>
      </div>
    </div>
  );
};

export default Settings;

