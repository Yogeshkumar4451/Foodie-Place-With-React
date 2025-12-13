import CardItems from "../Utils/Carditem-Template";
import { useState, useEffect } from "react";
import MOCKDATA from "../Utils/MockData";
import ShimmerCard from "./ShimmerUI";
import { Link } from "react-router-dom";


const Body = () => {
const [DummyData, setDummyData] = useState(MOCKDATA);
const [FilteredRestaurant, setFilteredRestaurant] = useState([])
const [SearchBtn,setSearchBtn] = useState("");

useEffect ( () => {
  FetchData();
}, [])

const  FetchData = async ()=> {

  const API_URL= await fetch("https://proxy.corsfix.com/?https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=30.8660486&lng=75.89272&carousel=true&third_party_vendor=1");

  const json = await API_URL.json();

  console.log(json);

  setDummyData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}

//Conditional Rendering Using  ( if-else )
 
// if (DummyData.length===0){      
//   return (     
//    <div className="resturant-container">
//       {[...Array(15)].map((_, i) => <ShimmerCard key={i} />)}  // This Is Normal Js Logic Of (If-else)
//     </div>   
//           );
//                           };

  // Conditional Rendering Using  Ternary Operator ( "?" [Means if] , ":" [Means else] )
 
    return DummyData.length === 0 ?

   ( 
    <div className="resturant-container">
      {[...Array(15)].map((_, i) => <ShimmerCard key={i} />)}
    </div> )

   :  (

    <div className="body-container">
    <div className="Search-bar">

        <input

          className="search-input"
          type="text"
          placeholder="Search Your Favorite Dish..."
          value={SearchBtn}
          onChange = { (e) => {
            setSearchBtn(e.target.value);
          }
         }
        />
      <button className="search-btn" onClick = { () => {

      const SearchedList = DummyData.filter((item) =>
      item.info?.name?.toLowerCase().includes(SearchBtn.toLowerCase())
    
    ) ;

    setFilteredRestaurant(SearchedList);
     } } >  Search </button>

      </div>
      <div className="left-filter">
    <button className="Filter-btn" onClick = { ()=> { 
    const filtered = MOCKDATA.filter(item => item.info.avgRating > 4 );
       setFilteredRestaurant(filtered);
      } }  >

  Top Rated Food Items   </button>


      </div>

      <div className="resturant-container">
    {FilteredRestaurant?.map((food) => (
          <Link to={/Restaurants/ +food.info.id } key={food.info.id}>   <CardItems
            {...food.info}
           
          /> </Link>
        )) } 
      </div>
    </div>
  );
};

export default Body;