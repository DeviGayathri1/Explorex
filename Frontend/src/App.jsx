import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ChatBot from "./components/ChatBot";
import TripPlanPage from "./pages/TripPlanPage";
import TripLoading from "./pages/TripLoading";
import FavoritesPage from "./pages/FavoritesPage";
import WhatsHot from "./pages/WhatsHot";
import SettingsPage from "./pages/SettingsPage";
import { useEffect } from "react";
import Tickets from "./pages/Tickets";




function App() {
  

  useEffect(() => { /////new change////
    const storedSettings = JSON.parse(localStorage.getItem("settings"));

    if (storedSettings?.ThemePersonality) {
      document.body.classList.remove(
        "classic-theme",
        "sunset-theme",
        "midnight-theme",
        "minimal-theme"
      );

      document.body.classList.add(
        `${storedSettings.ThemePersonality}-theme`
      );
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/chatbot" element={<ChatBot/>}/>
        <Route path="/plan" element={<TripPlanPage/>}/>
        <Route path="/loading" element={<TripLoading/>}/>
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/trip-plan" element={<TripPlanPage />} />
        <Route path="/whats-hot" element={<WhatsHot />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/tickets" element={<Tickets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;