"use client";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Column 1 */}
        <div className="footer-column">
          <p>COMPANY</p>
          <span>About Us</span>
          <span>Careers</span>
          <span>News</span>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <p>BUSINESS</p>
          <span>Leasing</span>
          <span>Investors</span>
          <span>Partners</span>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <p>SUPPORT</p>
          <span>Contact</span>
          <span>FAQs</span>
          <span>Privacy Policy</span>
        </div>

        {/* Social Section */}
        <div className="footer-social">
          <h2>FOLLOW US</h2>
          <div className="icons">
            <span>IN</span>
            <span>FB</span>
            <span>IG</span>
            <span>TT</span>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <span>© 2026 Cenomi Centers</span>
        <span>Terms & Conditions</span>
      </div>
    </footer>
  );
};

export default Footer;