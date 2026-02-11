const SettingsSection = ({ title, subtitle, icon, children, danger }) => {
  return (
    <div
      className={`rounded-2xl overflow-hidden shadow-lg ${
        danger ? "border border-red-200" : "border border-blue-100"
      }`}
    >
      {/* HEADER */}
      <div
        className={`px-5 py-4 flex items-center gap-3 ${
          danger
            ? "bg-red-50"
            : "bg-gradient-to-r from-blue-50 to-indigo-50"
        }`}
      >
        <span className="text-xl">{icon}</span>
        <div>
          <h2
            className={`font-semibold ${
              danger ? "text-red-600" : "text-blue-900"
            }`}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm text-gray-500">{subtitle}</p>
          )}
        </div>
      </div>

      {/* CONTENT */}
      <div className="bg-white px-5 py-4 space-y-4">
        {children}
      </div>
    </div>
  );
};

export default SettingsSection;

