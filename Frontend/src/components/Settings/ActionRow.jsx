const ActionRow = ({ label, danger }) => {
  return (
    <button
      className={`w-full flex justify-between items-center px-4 py-3 rounded-xl border transition ${
        danger
          ? "border-red-300 text-red-600 hover:bg-red-50"
          : "border-gray-200 hover:bg-gray-50"
      }`}
    >
      <span>{label}</span>
      <span className="text-sm">→</span>
    </button>
  );
};

export default ActionRow;

