// import { motion } from "framer-motion";
// import { useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const TripLoading = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     // ✅ If coming BACK from TripPlanPage → skip loading screen
//     if (location.state?.skipTripLoading) {
//       navigate("/home", { replace: true });
//       return;
//     }

//     // ✅ Normal trip generation flow
//     const timer = setTimeout(() => {
//       navigate("/trip-plan", {
//         state: location.state,
//       });
//     }, 700000); // you can tweak timing

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="h-screen flex flex-col items-center justify-center bg-white text-black">

//       {/* Orbit system */}
//       <div className="relative w-48 h-48 flex items-center justify-center mb-6">

//         {/* Earth (center) */}
//         <div className="absolute text-5xl">
//           🌍
//         </div>

//         {/* Plane orbiting (REVERSE direction) */}
//         <motion.div
//           className="absolute w-full h-full"
//           animate={{ rotate: -360 }}
//           transition={{
//             repeat: Infinity,
//             duration: 4,
//             ease: "linear",
//           }}
//         >
//           <div className="absolute top-1/2 right-0 -translate-y-1/2 text-3xl">
//             ✈️
//           </div>
//         </motion.div>
//       </div>

//       {/* Text */}
//       <p className="text-lg font-medium opacity-80 text-center">
//         Sit back. We’re planning something magical ✨
//       </p>

//     </div>
//   );
// };

// export default TripLoading;
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const TripLoading = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const started = useRef(false);

  useEffect(() => {
    // 🚫 Do nothing if no trip data (prevents sudden disappear)
    if (!location.state?.trip) return;

    if (started.current) return;
    started.current = true;

    const timer = setTimeout(() => {
      navigate("/trip-plan", {
        state: location.state,
        replace: true,
      });
    }, 2500); // smooth UX

    return () => clearTimeout(timer);
  }, [location.state, navigate]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white text-black z-50">
      
      {/* Orbit */}
      <div className="relative w-48 h-48 flex items-center justify-center mb-6">
        <div className="absolute text-5xl">🌍</div>

        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: -360 }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "linear",
          }}
        >
          <div className="absolute top-1/2 right-0 -translate-y-1/2 text-3xl">
            ✈️
          </div>
        </motion.div>
      </div>

      <p className="text-lg font-medium opacity-80 text-center">
        Sit back. We’re planning something magical ✨
      </p>
    </div>
  );
};

export default TripLoading;


