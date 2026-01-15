import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [menu, setMenu] = useState([]);
  const [info, setInfo] = useState(null);

  const fetchMenu = async () => {
    const res = await fetch(
      `https://proxy.corsfix.com/?https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.8660486&lng=75.89272&restaurantId=${resId}&submitAction=ENTER`
    );

    const json = await res.json();

    console.log(json);

 
    // ✅ Restaurant Info
    const arrangedMenuInfo =
      json?.data?.cards?.find(
        (c) => c?.card?.card?.info
      )?.card?.card?.info;

console.log(arrangedMenuInfo);

    // ✅ Find REGULAR Menu Cards (Safe Way)
    const regularCards =
      json?.data?.cards?.find(
        (c) => c?.groupedCard?.cardGroupMap?.REGULAR
      )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

      console.log(regularCards);
    // ✅ ONLY ItemCategory (Recommended, Biryani, etc.)
    const arrangedMenuAPI =
      regularCards
        ?.filter(
          (c) =>
            c?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
        ?.map((c) => ({
          title: c.card.card.title,
          items: c.card.card.itemCards.map(
            (item) => item.card.info
          ),
        }));

        
console.log(arrangedMenuAPI);

    setMenu(arrangedMenuAPI || []);
    setInfo(arrangedMenuInfo);
  };
    useEffect(() => {
    if (!resId) return;
    fetchMenu();
  }, [resId]);
    

 

  return { menu, info };
};

export default useRestaurantMenu;
