import { useEffect, useState } from "react";
import MOCKDATA from "../utils/mockData";

const useRestaurantList = () => {
  const [restaurants, setRestaurants] = useState(MOCKDATA);
  const [filteredRestaurants, setFilteredRestaurants] = useState(MOCKDATA);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const res = await fetch(
        "https://proxy.corsfix.com/?https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=30.8660486&lng=75.89272&carousel=true&third_party_vendor=1"
      );

      const json = await res.json();

      const apiData =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      if (apiData && apiData.length > 0) {
        setRestaurants(apiData);
        setFilteredRestaurants(apiData);
      }
    } catch (err) {
      console.error("API Failed, showing mock data", err);
    } 
  };

  const handleSearch = () => {
    const searchedList = restaurants.filter((item) =>
      item.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(searchedList);
  };

  const filterTopRated = () => {
    const topRated = restaurants.filter(
      (item) => item.info?.avgRating > 4
    );
    setFilteredRestaurants(topRated);
  };

  return {
    filteredRestaurants,
    searchText,
    setSearchText,
    handleSearch,
    filterTopRated,
  };
};

export default useRestaurantList;
