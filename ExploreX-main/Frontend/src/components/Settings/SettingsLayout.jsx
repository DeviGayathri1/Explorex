import React from "react";
import SettingsSidebar from "./SettingsSidebar";

const SettingsLayout = ({ activeTab, setActiveTab, children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <SettingsSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content */}
      <main className="flex-1 p-6 sm:p-8 lg:p-12 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default SettingsLayout;
