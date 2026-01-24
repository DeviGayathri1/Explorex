import { useEffect, useState } from "react";

const ProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">

      {/* 🌄 HERO IMAGE */}
      <div
        className="relative w-full h-[300px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-simple-gradient-on-gray-background-image_557021.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* 👤 PROFILE OVERLAP SECTION */}
      <div className="relative max-w-6xl mx-auto px-6">

        {/* Avatar + Hello */}
        <div className="flex items-center gap-6 -mt-16">
          {/* Avatar */}
          <div className="w-28 h-28 rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl font-bold shadow-xl border-4 border-white">
            {user.username.charAt(0).toUpperCase()}
          </div>

          {/* Hello Text */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Hello, {user.username} 👋
            </h1>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>

        {/* 📍 DETAILS */}
        <div className="mt-6 flex flex-wrap gap-8 items-center">
          <p className="text-gray-600 flex items-center gap-1">
            📍 Chennai, India
          </p>

          <div className="flex gap-10">
            <div>
              <p className="text-xl font-bold text-gray-900">18</p>
              <p className="text-sm text-gray-500">Trips</p>
            </div>

            <div>
              <p className="text-xl font-bold text-gray-900">7</p>
              <p className="text-sm text-gray-500">Rewards</p>
            </div>
          </div>
        </div>

        {/* 📝 ABOUT YOU */}
        <div className="mt-8 bg-white rounded-2xl shadow-md p-6 max-w-3xl">
          <h2 className="text-lg font-semibold mb-2">About You</h2>
          <p className="text-gray-600">
            Passionate traveler who enjoys discovering hidden gems,
            planning smart itineraries, and capturing memories 🌍✨
          </p>
        </div>

        {/* 🔘 ACTIONS */}
        <div className="mt-6 flex gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">
            Edit Profile
          </button>

          <button className="px-6 py-3 border border-gray-300 rounded-full font-semibold hover:bg-gray-50 transition">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;