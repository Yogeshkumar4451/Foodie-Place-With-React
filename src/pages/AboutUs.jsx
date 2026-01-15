import { useState } from "react";
import Accordion from "../components/Accordion";

const AboutUs = () => {

  //For Accordion State
  const [openIndex,setOpenIndex] =useState(null);

    const sections = [
    {
      title: "Who We Are",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed mb-4">
            Foodie Place started with a simple idea — make great food accessible
            to everyone. Whether you’re craving street-style chole bhature, a
            warm cheesy pizza, or something healthy for that “new-me” mood, we
            bring the best from your favorite restaurants right to your doorstep.
          </p>

          <p className="text-gray-600 leading-relaxed">
            What began as a tiny 2-person project is now a buzzing platform
            trusted by thousands. Still, we run with the same hunger:
            <span className="font-semibold text-gray-800">
              top quality, fast delivery, and honest service.
            </span>
          </p>
        </>
      ),
    },
    {
      title: "Our Mission",
      content: (
        <p className="text-gray-600 leading-relaxed">
          To redefine food delivery with trust, transparency, and unbeatable
          taste. We don’t just deliver meals — we deliver moments: late-night
          cravings, Sunday family lunch, breakup ice-cream orders, and
          everything in between.
        </p>
      ),
    },
    {
      title: "Our Core Values",
      content: (
        <ul className="space-y-4">
          {[
            "Quality You Can Taste",
            "Speed You Can Rely On",
            "Service That Feels Personal",
            "Innovation That Never Stops",
          ].map((value, index) => (
            <li key={index} className="flex items-center gap-3 text-gray-700">
              <span className="text-orange-500 text-lg">✔</span>
              <span className="text-lg">{value}</span>
            </li>
          ))}
        </ul>
      ),
    },
  ];

  return(
      <div className="bg-orange-200 min-h-screen pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* HERO SECTION */}
        <section className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About The Foodie Place
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Where Flavors Meet Passion And Every Order Feels Like Home.
          </p>
        </section>

        {/* ACCORDION SECTIONS */}
        <section className="space-y-6 mb-20">
          {sections.map((section, index) => (
            <Accordion
              key={index}
              title={section.title}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              {section.content}
            </Accordion>
          ))}
        </section>

        {/* STATS (STATIC, NO ACCORDION) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:-translate-y-2 transition">
            <h3 className="text-3xl font-bold text-orange-500 mb-2">500+</h3>
            <p className="text-gray-600 font-medium">Partner Restaurants</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:-translate-y-2 transition">
            <h3 className="text-3xl font-bold text-orange-500 mb-2">15,000+</h3>
            <p className="text-gray-600 font-medium">Happy Customers</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:-translate-y-2 transition">
            <h3 className="text-3xl font-bold text-orange-500 mb-2">30+ Cities</h3>
            <p className="text-gray-600 font-medium">Across India</p>
          </div>
        </section>

      </div>
    </div>
    );
  };

export default AboutUs;