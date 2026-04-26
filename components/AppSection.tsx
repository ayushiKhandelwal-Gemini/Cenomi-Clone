"use client";

const AppSection = () => {
  return (
    <section className="app-wrapper">

      <div className="app-top">

        <div className="app-left">
          <img src="/app.png" alt="app" className="phone-img" />
          <div style={{display:"flex",  alignItems: "center",gap:"15px"}}>
            <div className="qr-box">
              <div><img src="/qr.png" alt="qr" /></div>
            </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" ,flexWrap:"wrap"}}>
                <div>
                <p style={{fontSize:"30px"}}>
                  Download the Cenomi Plus App Available on <br />
                  Google Play & App Store.
                </p>
                </div>

                <div className="store-btns">
                  <img src="/playstore.png" alt="playstore" />
                  <img src="/appstore.png" alt="appstore" />
                </div>
              </div>
          </div>
        </div>

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