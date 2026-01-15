const CardItems = ({
  name,
  cloudinaryImageId,
  costForTwo,
  cuisines,
  avgRating,
}) => {
  
  const IMG_CDN_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/";

  const imgUrl = IMG_CDN_URL + cloudinaryImageId;

  return (
    /* 🔹 OUTER BACKGROUND CARD (SOFTER ROUND) */
    <div className="w-[300px] p-3 rounded-xl bg-orange-100 transition hover:-translate-y-2 hover:shadow-lg">
      
      {/* 🔸 INNER CONTENT CARD */}
      <div className="bg-white rounded-lg overflow-hidden shadow-md">

        {/* IMAGE */}
        <img
          src={imgUrl}
          alt={name}
          className="w-full h-44 object-cover"
        />

        {/* CONTENT */}
        <div className="p-5 text-center space-y-2">
          
          <h3 className="text-lg font-semibold text-gray-900 truncate">
            {name}
          </h3>

          <p className="text-sm text-gray-600">
            {cuisines.join(", ")}
          </p>

          <p className="text-sm font-semibold text-orange-500">
            ⭐ {avgRating}
          </p>

          <p className="text-sm font-bold text-gray-800">
            {costForTwo}
          </p>

          <button
            className="
              mt-3
              w-full
              py-2
              rounded-lg
              bg-orange-500
              text-white
              font-semibold
              hover:bg-orange-600
              active:scale-95
              transition
              shadow-sm hover:shadow-md
            "
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItems;
