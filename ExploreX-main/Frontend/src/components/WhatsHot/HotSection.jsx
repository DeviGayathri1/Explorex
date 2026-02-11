const HotSection = ({ title, children }) => {
  return (
    <section className="mt-9 space-y-9">
      <h2 className="text-xl font-semibold">{title}</h2>

      {children && children.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {children}
        </div>
      ) : (
        <p className="text-gray-400 text-sm">
          No activity yet
        </p>
      )}
    </section>
  );
};

export default HotSection;
