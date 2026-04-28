"use client";

const AppSection = () => {
  return (
    <section className="app-wrapper">

      <div className="app-top">

        <div className="app-left">
          <img src="https://centers.cenomi.com/wp-content/uploads/sites/2/2026/01/Group-6.webp" alt="app" className="phone-img" />
          <div style={{display:"flex",  alignItems: "center",gap:"15px"}}>
            <div className="qr-box">
              <div><img src="/qr.png" alt="qr" /></div>
            </div>
              <div style={{ display: "flex", flexDirection: "column", justifyItems: "center",flexWrap:"wrap"}}>
                <div className="download-text">
                <p>
                  Download the Cenomi Plus App Available on
                  Google Play & App Store.
                </p>
                </div>

                <div className="store-btns">
                  <div><img src="https://centers.cenomi.com/wp-content/uploads/sites/2/2026/01/Google_Play_Store_badge_EN-1.webp" alt="playstore" /></div>
                  <div><img src="https://centers.cenomi.com/wp-content/uploads/sites/2/2026/01/download-on-the-app-store-apple-2.png" alt="appstore" /></div>
                </div>
              </div>
          </div>
        </div>

        <div className="app-right">
          <div className="center-app-line" />
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
            <div>Download Now </div>
            <div>→</div>
          </button>
        </div>

      </div>

      {/* Bottom CTA */}
      <div className="contact-bar">
        <p>We’re always happy to hear from you.</p>
        <button>
          <div>Contact Cenomi Centers Now!</div>
          <div> →</div>
        </button>
      </div>

    </section>
  );
};

export default AppSection;