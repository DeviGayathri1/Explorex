const EmptyHotState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center space-y-4">
      <div className="text-5xl">🔥</div>
      <h2 className="text-xl font-semibold">
        Nothing’s hot yet
      </h2>
      <p className="text-gray-500 max-w-md">
        Start exploring destinations and planning trips.
        What’s hot will appear here automatically.
      </p>
    </div>
  );
};

export default EmptyHotState;
