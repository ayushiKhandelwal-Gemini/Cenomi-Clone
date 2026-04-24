"use client";

const AppSection = () => {
  return (
    <section className="app-wrapper">

      {/* Top Section */}
      <div className="app-top">

        {/* LEFT SIDE (Purple) */}
        <div className="app-left">
          <img src="/app.png" alt="app" className="phone-img" />

          <div className="qr-box">
            <img src="/qr.png" alt="qr" />
            <p>
              Download the Cenomi Plus App Available on <br />
              Google Play & App Store.
            </p>

            <div className="store-btns">
              <img src="/google-play.png" alt="playstore" />
              <img src="/app-store.png" alt="appstore" />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="app-right">
          <h4>Cenomi Plus App</h4>

          <p>
            We are excited to introduce the Cenomi Plus App—your all-in-one
            destination for everything happening in our malls!
          </p>

          <p>
            Stay informed and connected with real-time updates on everything
            that matter in our malls.
          </p>

          <ul>
            <li>Mall Information</li>
            <li>Exclusive Offers</li>
            <li>Events & Activates</li>
            <li>Interactive Maps & Navigation</li>
          </ul>

          <button className="download-btn">
            Download Now →
          </button>
        </div>

      </div>

      {/* Bottom CTA */}
      <div className="contact-bar">
        <p>We’re always happy to hear from you.</p>
        <button>Contact Cenomi Centers Now! →</button>
      </div>

    </section>
  );
};

export default AppSection;