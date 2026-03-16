const HotSection = ({ title, children }) => {
  return (
    <section className="mt-9 space-y-9">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">
  {title}
</h2>

      {children && children.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {children}
        </div>
      ) : (
        <p className="text-gray-700 text-sm">
          No activity yet
        </p>
      )}
    </section>
  );
};

export default HotSection;
