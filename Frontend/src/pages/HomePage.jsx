import { useState} from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TripPlannerCard from "../components/TripPlannerCard";
import RecommendedPlaces from "../components/RecommendedPlaces";
import NearbyPlaces from "../components/NearbyPlaces";
import ChatBot from "../components/ChatBot";
import bgPattern from "../assets/travel-pattern.jpg";
import sample from "../assets/sample.jpg"
import { useEffect} from "react";
import { useLocation } from "react-router-dom";


const HomePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [storedSettings, setStoredSettings] = useState(null);////new change///
const location = useLocation();
const [activeSection, setActiveSection] = useState("home");

useEffect(() => {
  if (location.state?.activeSection) {
    setActiveSection(location.state.activeSection);
  }
}, [location]);



useEffect(() => {
  const settings = JSON.parse(localStorage.getItem("settings"));
  setStoredSettings(settings);
}, []);

  return (
   <div className="min-h-screen relative bg-primary text-primary overflow-hidden">


      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bgPattern})`,
          backgroundRepeat: "repeat",
          backgroundSize: "300px",
          opacity: 0.7, 
        }}
      />

      {/* BACKGROUND COLOR OVERLAY */}
      {/* <div className="absolute inset-0 bg-[#E4EDEB] z-0 opacity-90" /> */}

      {/* CONTENT */}
      <div className="relative z-10">

        {/* Sidebar */}
        <Sidebar
  isOpen={sidebarOpen}
  onClose={() => setSidebarOpen(false)}
  activeSection={activeSection}
  setActiveSection={setActiveSection}
/>


        {/* Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Navbar */}
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <div className="relative w-full h-[320px] md:h-[420px] overflow-hidden">
        <img
          src={sample}
          alt="Travel Banner"
          className="w-full h-full object-cover"
        />

        {/* Optional overlay */}
        {!document.body.classList.contains("midnight-theme") && (
  <div className="absolute inset-0 bg-black bg-opacity-20" />
)}
        {/* Optional text */}
        
      </div>

        {/* Main content */}
        <div className="flex justify-center items-center mt-10 px-4">
          <TripPlannerCard />
        </div>

        {/* Sections */} 
        {storedSettings?.AIrecommendations && (
  <RecommendedPlaces />
)}

{storedSettings?.nearby && (
  <NearbyPlaces />
)}

{storedSettings?.AIrecommendations && (
  <ChatBot />
)}

      </div>
    </div>
  );
};

export default HomePage;