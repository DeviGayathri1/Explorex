const destinationImages = {
  Goa: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  Paris: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
  Coimbatore:
    "https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e",
};

const HotCard = ({ item, subtitle, onClick }) => {
  return (
    <div
      onClick={() => onClick(item.destination)}
      className="cursor-pointer bg-white rounded-2xl shadow hover:scale-105 transition overflow-hidden"
    >
      <img
        src={
          destinationImages[item.destination] ||
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
        }
        alt={item.destination}
        className="h-40 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold">
          {item.destination}
        </h3>
        <p className="text-sm text-gray-500">
          {subtitle || `${item.totalCount} recent interactions`}
        </p>
      </div>
    </div>
  );
};

export default HotCard;
