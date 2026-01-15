const Service = () => {
  return (
    <div className="bg-orange-200 min-h-screen pt-32 pb-20">
      {/* CONTAINER */}
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Welcome To Our Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Designed To Make Your Food Ordering Experience Faster, Safer,
            And More Enjoyable.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* CARD 1 */}
          <div className="bg-white rounded-3xl shadow-md p-10 text-center hover:-translate-y-3 hover:shadow-xl transition">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Fast Delivery
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Lightning-fast food delivery from your favorite restaurants near you,
              right when hunger strikes.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-3xl shadow-md p-10 text-center hover:-translate-y-3 hover:shadow-xl transition">
            <div className="text-4xl mb-4">🕒</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              24/7 Support
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Any issue? Any time? Our support team is always available —
              day or night, no excuses.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-3xl shadow-md p-10 text-center hover:-translate-y-3 hover:shadow-xl transition">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Best Quality
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Fresh, hygienic, and top-rated meals delivered with care,
              quality you can trust every time.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Service;
