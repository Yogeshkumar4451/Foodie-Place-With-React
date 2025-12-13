import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import ShimmerCard from "./ShimmerUI";

const RestoMenuPage = () => {
  const { resId } = useParams(); 
  const [Menu, setMenu] = useState(null);
  const [info, setInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const res = await fetch(
        `https://proxy.corsfix.com/?https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.8660486&lng=75.89272&restaurantId=${resId}&submitAction=ENTER`
      );
      const json = await res.json();
      console.log(json);

      const arrangedMenuInfo =
        json?.data?.cards?.find((c) => c.card?.card?.info)?.card?.card?.info || {};

      const arrangedMenuAPI =
        json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards
          ?.flatMap((c) =>
            c?.card?.card?.itemCards?.map((item) => item.card.info)
          ) || [];

      setMenu(arrangedMenuAPI);
      setInfo(arrangedMenuInfo);
    } catch (err) {
      console.error("Error fetching menu:", err);
    }
  };

  if (!Menu || !info) return <ShimmerCard />;

  return (
    <div className="RestroName">
      <h2 className="info-name">{info?.name}</h2>
      <h3 className="info-rating">{info?.avgRatingString}</h3>
      <h4 className="info-priceRating">{info?.costForTwoMessage}</h4>
      <ul>
        {Menu.filter((item) => item).map((item, index) => (
          <li key={`${item.id || 'item'}-${index}`}>
            <span className="res-name">{item?.name}</span>
            <span className="res-price">₹{item?.defaultPrice / 100 || item.price /100}</span>
            <span className="res-rating">
              ⭐ {item?.ratings?.aggregatedRating?.rating} (
              {item?.ratings?.aggregatedRating?.ratingCountV2})
            </span>
            <span className="res-category">{item?.category}</span>
            <span className="res-description">{item?.description}</span>
            <span className="res-imgid">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item?.imageId}`}
                alt={item?.name}
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestoMenuPage;
