const CardItems = ({ name, cloudinaryImageId, costForTwo, cuisines, avgRating }) => {
const IMG_CDN_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/";
    
  const imgUrl = IMG_CDN_URL + cloudinaryImageId;
  return (
    <div className="food-item">
      <img className="kfc-item" alt={name} src={imgUrl} />
      <br />
      <h3 className="food-detail">{name}</h3>
      <br />
      <p className="food-desc">{cuisines.join(", ")}</p>
      <p className="Avg-Rating "> {avgRating}</p>
      <p className="food-price">{costForTwo}</p>
      <br />
      <button className="buy-btn">Buy Now</button>
      <br />
    </div>
  );
};


export default CardItems;