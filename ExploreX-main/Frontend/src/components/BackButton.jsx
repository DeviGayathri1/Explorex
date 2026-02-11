import { useNavigate } from "react-router-dom";

const BackButton = ({
  to = "/home",
  state = {},
  label = "Back",
  className = "",
}) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to, { state })}
      className={`fixed top-6 left-6 z-50 flex items-center gap-1
        bg-white/80 backdrop-blur-md
        px-4 py-2 rounded-full
        shadow-lg hover:shadow-xl
        transition-all duration-300
        ${className}`}
    >
      {/* Arrow */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 21 24"
        className="w-6 h-6 stroke-current"
        fill="none"
        strokeWidth="2.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>

      <span className="text-sm font-medium"></span>
    </button>
  );
};

export default BackButton;
