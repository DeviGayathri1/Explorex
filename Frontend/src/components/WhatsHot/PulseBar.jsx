const PulseBar = ({ pulse }) => {
  if (!pulse || pulse.length === 0) return null;

  return (
    <div className="bg-white rounded-xl shadow px-4 py-3 flex gap-10 overflow-x-auto">
      {pulse.map((text, index) => (
        <span
          key={index}
          className="whitespace-nowrap text-sm font-medium text-red-500"
        >
          {text}
        </span>
      ))}
    </div>
  );
};

export default PulseBar;
