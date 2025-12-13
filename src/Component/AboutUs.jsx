const AboutUs = () => {
  return (
    <div className="about-wrapper">
      <section className="about-hero">
        <h1>About The Foodie Place</h1>
        <p>
          Where Flavors Meet Passion And Every Order Feels Like Home.
        </p>
      </section>

      <section className="about-content">
        <h2>Who We Are</h2>
        <p>
          Foodie Place started with a simple idea — make great food accessible
          to everyone. Whether you’re craving street-style chole bhature, a warm
          cheesy pizza, or something healthy for that “new-me” mood, we bring
          the best from your favorite restaurants right to your doorstep.
        </p>
        <p>
          What began as a tiny 2-person project is now a buzzing platform
          trusted by thousands. Still, we run with the same hunger:
          <strong> top quality, fast delivery, and honest service.</strong>
        </p>
      </section>

      <section className="about-stats">
        <div className="stat-card">
          <h3>500+</h3>
          <p>Partner Restaurants</p>
        </div>
        <div className="stat-card">
          <h3>15,000+</h3>
          <p>Happy Customers</p>
        </div>
        <div className="stat-card">
          <h3>30+ Cities</h3>
          <p>Across India</p>
        </div>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          To redefine food delivery with trust, transparency, and unbeatable
          taste. We don’t just deliver meals — we deliver moments: late-night
          cravings, Sunday family lunch, breakup ice-cream orders, and
          everything in between.
        </p>
      </section>

      <section className="about-values">
        <h2>Our Core Values</h2>
        <ul>
          <li>Quality You Can Taste</li>
          <li>Speed You Can Rely On</li>
          <li>Service That Feels Personal</li>
          <li>Innovation That Never Stops</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;
