// import { Link } from "react-router-dom";

// const Sidebar = ({ isOpen }) => {
//   return (
//     <div
//       className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-transform duration-300 z-50
//       ${isOpen ? "translate-x-0" : "-translate-x-full"} w-64`}
//     >
//       {/* Logo */}
//       <div className="p-6 font-bold text-2xl text-blue-600 border-b">
//         ExploreX
//       </div>

//       {/* Navigation */}
//       <nav className="flex flex-col gap-2 px-6 py-6 text-gray-700 font-medium">

//         <Link
//           to="/home"
//           className="px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
//         >
//           🏠 Home
//         </Link>

//         <Link
//           to="/favorites"
//           className="px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
//         >
//           ⭐ Favorites
//         </Link>

//         <Link
//           to="/hot"
//           className="px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
//         >
//           🔥 What’s Hot
//         </Link>
//       </nav>

//       {/* Settings at Bottom */}
//       <div className="absolute bottom-0 w-full px-6 py-4 border-t">
//         <Link
//           to="/settings"
//           className="block px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition font-medium"
//         >
//           ⚙️ Settings
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-transform duration-300 z-50
      ${isOpen ? "translate-x-0" : "-translate-x-full"} w-64`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b">
        <span className="font-bold text-2xl text-blue-600">
          ExploreX
        </span>

        {/* Small Back / Close Button */}
        <button
  onClick={onClose}
  className="w-10 h-10 flex items-center justify-center
             rounded-full hover:bg-gray-100 transition"
>
  <ArrowLeft size={24} strokeWidth={2.5} />
</button>


      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2 px-6 py-6 text-gray-700 font-medium">
        <Link
          to="/home"
          onClick={onClose}
          className="px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
        >
          🏠 Home
        </Link>

        <Link
          to="/favorites"
          onClick={onClose}
          className="px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
        >
          ⭐ Favorites
        </Link>

        <Link
          to="/Whats-hot"
          onClick={onClose}
          className="px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
        >
          🔥 What’s Hot
        </Link>
      </nav>

      {/* Settings at Bottom */}
      <div className="absolute bottom-0 w-full px-6 py-4 border-t">
        <Link
          to="/settings"
          onClick={onClose}
          className="block px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition font-medium"
        >
          ⚙️ Settings
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
