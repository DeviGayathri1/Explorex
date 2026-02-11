import { useEffect, useRef } from "react";

const TravelBuzz = ({ items }) => {
  const scrollRef = useRef(null);

  /* Auto horizontal scroll */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let pos = 0;
    const interval = setInterval(() => {
      pos += 0.6;
      el.scrollLeft = pos;

      if (pos >= el.scrollWidth - el.clientWidth) {
        pos = 0;
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden rounded-3xl">
      {/* 🌄 Common background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee)",
        }}
      >
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* 📰 Paragraph cards */}
      <div
        ref={scrollRef}
        className="
          relative z-10
          flex gap-40
          px-10 py-10
          overflow-x-hidden
        "
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="
              min-w-[420px]
              max-w-[420px]
              bg-white/95 backdrop-blur
              rounded-2xl
              shadow-xl
              overflow-hidden
              flex flex-col
            "
          >
            <img
              src={item.image}
              alt="travel buzz"
              className="h-44 w-full object-cover"
            />

            <div className="p-6">
              <p className="text-sm leading-relaxed text-gray-700">
                {item.paragraph}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TravelBuzz;
