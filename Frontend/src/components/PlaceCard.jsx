import { useState } from "react";
import { toggleFavorite } from "../services/favoriteService";

const PlaceCard = ({ place }) => {
  const [fav, setFav] = useState(false);

  const handleFavorite = async () => {
    await toggleFavorite({
      userId: localStorage.getItem("userId"),
      type: "place",
      data: place,
    });
    setFav(!fav);
  };

  return (
    <div className="relative bg-white rounded-2xl shadow-md overflow-hidden">
      <img
        src={place.image}
        alt={place.name}
        className="w-full h-40 object-cover"
      />

      {/* FAVORITE ICON */}
      <button
        onClick={handleFavorite}
        className="absolute top-3 right-3 text-2xl"
      >
        {fav ? "❤️" : "🤍"}
      </button>

      <div className="p-4">
        <h3 className="font-semibold">{place.name}</h3>
        <p className="text-sm text-gray-500">{place.location}</p>
      </div>
    </div>
  );
};

export default PlaceCard;
