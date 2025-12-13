const Service = () => {
  return (
    <div className="services-wrapper">
      <div className="services-header">
        <h1>Welcome To Our Service Page</h1>
        <h2>What Can We Help You With?</h2>
      </div>

      <div className="services-grid">
        <div className="service-card">
          <h3>Fast Delivery</h3>
          <p>Lightning–fast food delivery from your favorite restaurants near you.</p>
        </div>

        <div className="service-card">
          <h3>24/7 Support</h3>
          <p>Any issue? Our team is always available — day or night.</p>
        </div>

        <div className="service-card">
          <h3>Best Quality</h3>
          <p>Fresh, hygienic, and top-rated meals delivered with care.</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
