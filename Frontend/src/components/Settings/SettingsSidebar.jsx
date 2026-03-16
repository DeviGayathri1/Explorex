import React from "react";
import {
  Palette,
  Compass,
  Bell,
  Shield,
  Database,
  User,
} from "lucide-react";

const SidebarItem = ({ icon: Icon, label, tab, activeTab, setActiveTab }) => (
  <button
    onClick={() => setActiveTab(tab)}
    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition w-full text-left
      ${
        activeTab === tab
          ? "bg-indigo-600 text-white shadow-md"
          : "text-gray-600 hover:bg-gray-100"
      }`}
  >
    <Icon size={18} />
    {label}
  </button>
);

const SettingsSidebar = ({ activeTab, setActiveTab }) => {
  return (
    <aside className="hidden md:flex flex-col w-64 bg-white border-r p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      <SidebarItem
        tab="personality"
        label="Personalization"
        icon={Palette}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <SidebarItem
        tab="discover"
        label="Discover"
        icon={Compass}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <SidebarItem
        tab="notifications"
        label="Notifications"
        icon={Bell}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <SidebarItem
        tab="privacy"
        label="Privacy"
        icon={Shield}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <SidebarItem
        tab="data"
        label="Data & Storage"
        icon={Database}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <SidebarItem
        tab="account"
        label="Account"
        icon={User}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </aside>
  );
};

export default SettingsSidebar;
