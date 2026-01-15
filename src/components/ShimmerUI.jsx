const ShimmerCard = () => {
  return (
    /* 🔹 OUTER BACKGROUND CARD */
    <div className="w-[300px] p-3 rounded-xl bg-orange-100 animate-pulse">
      
      {/* 🔸 INNER CARD */}
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        
        {/* IMAGE SHIMMER */}
        <div className="w-full h-44 bg-gray-200"></div>

        {/* CONTENT SHIMMER */}
        <div className="p-5 space-y-3">
          
          {/* NAME */}
          <div className="h-4 w-3/4 bg-gray-200 rounded"></div>

          {/* CUISINE */}
          <div className="h-3 w-full bg-gray-200 rounded"></div>

          {/* RATING */}
          <div className="h-3 w-1/3 bg-gray-200 rounded"></div>

          {/* PRICE */}
          <div className="h-3 w-1/4 bg-gray-200 rounded"></div>

          {/* BUTTON */}
          <div className="h-9 w-full bg-gray-300 rounded-lg mt-3"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerCard;
