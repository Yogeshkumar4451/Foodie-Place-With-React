import CardItems from "../components/CardItem";
import ShimmerCard from "../components/ShimmerUI";
import { Link } from "react-router-dom";
import useRestaurantList from "../hooks/useRestaurantlist";
import withPromotedLabel from "../Utils/withPromotedLabel";

const Body = () => {
  const {
    filteredRestaurants,
    searchText,
    setSearchText,
    handleSearch,
    filterTopRated,
  } = useRestaurantList();

  console.log(filteredRestaurants);
  
  const PromotedCardItems = withPromotedLabel(CardItems);

  if (filteredRestaurants.length === 0) {
    return (
      <div className="bg-orange-100 min-h-screen">
        <div className="max-w-3xl mx-auto px-6 pt-18 pb-20 flex flex-wrap gap-10 justify-center">
          {[...Array(15)].map((_, i) => (
            <ShimmerCard key={i} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-orange-200 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 pt-11 pb-20">

        {/* SEARCH & FILTER */}
        <div className="mb-12 bg-white border border-orange-100 rounded-xl shadow-sm p-6 flex flex-wrap gap-4 items-center">
          
          <input
            type="text"
            placeholder="Search Your Favorite Dish..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="
              flex-1 min-w-[260px] sm:min-w-[360px]
              h-12 px-4
              rounded-lg
              border border-gray-300
              bg-gray-50
              text-sm text-gray-700
              placeholder-gray-400
              focus:bg-white
              focus:border-orange-500
              focus:ring-2 focus:ring-orange-200
              focus:outline-none
              transition
            "
          />

          <button
            onClick={handleSearch}
            className="
              h-12 px-6
              rounded-lg
              bg-orange-500
              text-white text-sm font-semibold
              hover:bg-orange-600
              active:scale-95
              transition
              shadow-sm hover:shadow-md
              whitespace-nowrap
            "
          >
            Search
          </button>

          <button
            onClick={filterTopRated}
            className="
              h-12 px-6
              rounded-lg
              bg-orange-700
              text-white text-sm font-semibold
              hover:bg-orange-800
              active:scale-95
              transition
              shadow-sm hover:shadow-md
              inline-flex items-center gap-2
              whitespace-nowrap
            "
          >
            ⭐ Top Rated
          </button>
        </div>

        {/* CARDS GRID */}
        <div className="flex flex-wrap justify-center gap-10">
       {filteredRestaurants.map((food) => {
  const CardComponent =
    food.info?.aggregatedDiscountInfoV3
      ? PromotedCardItems
      : CardItems;

  return (
    <Link
      key={food.info.id}
      to={`/Restaurants/${food.info.id}`}
      className="
        transition-transform duration-300
        hover:-translate-y-2
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-orange-400
        focus-visible:ring-offset-2
      "
    >
      <CardComponent {...food.info} />
    </Link>
  );
})}

        </div>

      </div>
    </div>
  );
};

export default Body;
