const Grocery = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 to-green-400 pt-32 pb-20">
      
      {/* HERO */}
      <div className="flex justify-center px-6 mb-24">
        <div className="w-full max-w-5xl text-center">
          
          <h1 className="text-5xl font-extrabold text-green-700 tracking-tight flex items-center justify-center gap-3">
            Grocery Store
            <span className="text-4xl">🛒</span>
          </h1>

          <p className="mt-6 text-xl text-gray-700 leading-relaxed">
            Fresh, Affordable, And High-Quality Grocery Items Delivered
            Straight To Your Home.
          </p>
        </div>
      </div>

      {/* FEATURES */}
      <div className="flex justify-center px-6 mb-28">
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition text-center">
              <h2 className="text-2xl font-bold text-green-600 mb-4">
                🥦 Fresh Vegetables
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Handpicked farm-fresh vegetables with guaranteed
                quality and hygienic packaging.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition text-center">
              <h2 className="text-2xl font-bold text-green-600 mb-4">
                🍎 Fruits & Essentials
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Seasonal fruits and daily essentials at best prices,
                delivered fresh every day.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition text-center">
              <h2 className="text-2xl font-bold text-green-600 mb-4">
                🚚 Fast Delivery
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Same-day delivery with secure packaging,
                live tracking, and trusted partners.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center pb-20">
        <button
          className="
            inline-flex items-center justify-center
            h-12
            px-20
            rounded-full
            bg-green-600 text-white
            text-lg font-semibold
            shadow-lg
            hover:bg-green-700 hover:scale-105
            active:scale-95
            transition-all duration-200
          "
        >
          Start Shopping
        </button>
      </div>

    </section>
  );
};

export default Grocery;
