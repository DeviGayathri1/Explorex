import React from "react";

/* ---------- Toggle ---------- */
export const Toggle = ({ enabled, onClick }) => (
  <button
    onClick={onClick}
    className={`relative w-11 h-6 rounded-full transition ${
      enabled ? "bg-indigo-600" : "bg-gray-300"
    }`}
  >
    <span
      className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition ${
        enabled ? "translate-x-5" : ""
      }`}
    />
  </button>
);

/* ---------- Section Card ---------- */
export const SectionCard = ({ title, children }) => (
  <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
    <h2 className="text-xl font-semibold mb-6">{title}</h2>
    {children}
  </div>
);

/* ---------- Setting Row ---------- */
export const SettingRow = ({
  title,
  subtitle,
  enabled,
  onToggle,
  icon: Icon,
}) => (
  <div className="flex justify-between items-center py-4 border-b last:border-none">
    <div className="flex gap-3">
      {Icon && <Icon size={18} className="text-gray-400 mt-1" />}
      <div>
        <p className="font-medium text-gray-800">{title}</p>
        {subtitle && (
          <p className="text-sm text-gray-500">{subtitle}</p>
        )}
      </div>
    </div>

    {enabled !== undefined && (
      <Toggle enabled={enabled} onClick={onToggle} />
    )}
  </div>
);

/* ---------- Select Tile ---------- */
export const SelectTile = ({
  title,
  description,
  active,
  onClick,
}) => (
  <div
    onClick={onClick}
    className={`cursor-pointer p-6 rounded-xl border transition
      ${
        active
          ? "border-indigo-600 bg-indigo-50 shadow-md"
          : "border-gray-200 hover:border-indigo-400 hover:shadow-sm"
      }`}
  >
    <h4 className="font-semibold text-gray-800">{title}</h4>
    <p className="text-sm text-gray-500 mt-2">{description}</p>
  </div>
);
