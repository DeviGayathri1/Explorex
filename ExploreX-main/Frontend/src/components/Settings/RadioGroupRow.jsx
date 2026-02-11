const RadioGroupRow = ({ label, value, options, onChange }) => {
  return (
    <div>
      <p className="font-medium text-gray-800 mb-2">{label}</p>
      <div className="flex flex-wrap gap-3">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`px-4 py-2 rounded-full border text-sm capitalize transition ${
              value === opt
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RadioGroupRow;

