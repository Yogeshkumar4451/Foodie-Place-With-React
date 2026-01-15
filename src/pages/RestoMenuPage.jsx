import useRestaurantMenu from "../hooks/useRestaurantMenu";
import { useParams } from "react-router-dom";
import { useState } from "react";
import ShimmerCard from "../components/ShimmerUI";
import Accordion from "../components/Accordion";

const RestoMenuPage = () => {
  const { resId } = useParams();
  const { menu, info } = useRestaurantMenu(resId);

  const [openIndex, setOpenIndex] = useState(null);

  // ✅ FIX 1: Proper guard
  if (!menu || !menu.length || !info) return <ShimmerCard />;

  return (
    <div className="bg-orange-200 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 pt-24 pb-20">

        {/* 🍽️ RESTAURANT INFO */}
        <div className="mb-10 bg-white rounded-xl shadow-sm border border-orange-100 p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {info.name}
          </h2>

          <div className="flex gap-4 text-sm text-gray-600">
            <span className="font-medium text-green-600">
              ⭐ {info.avgRatingString}
            </span>
            <span>{info.costForTwoMessage}</span>
          </div>
        </div>

        {/* 📋 MENU ACCORDIONS */}
        <div className="space-y-4">
          {menu.map((category, index) => (
            <Accordion
              key={category.title || index}
              title={`${category.title} (${category.items?.length || 0})`}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              {/* MENU ITEMS = children */}
              <div className="space-y-6">
                {category.items?.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between gap-6 border-b pb-4 last:border-none"
                  >
                    {/* LEFT */}
                    <div className="flex-1 space-y-1">
                      <h4 className="font-semibold text-gray-800">
                        {item.name}
                      </h4>

                      <p className="text-sm text-orange-600 font-semibold">
                        ₹{(item.price || item.defaultPrice) / 100}
                      </p>

                      {item.description && (
                        <p className="text-sm text-gray-600">
                          {item.description}
                        </p>
                      )}
                    </div>

                    {/* RIGHT */}
                    {item.imageId && (
                      <img
                        className="w-28 h-24 object-cover rounded-lg"
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.imageId}`}
                        alt={item.name}
                      />
                    )}
                  </div>
                ))}
              </div>
            </Accordion>
          ))}
        </div>

      </div>
    </div>
  );
};

export default RestoMenuPage;
