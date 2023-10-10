import "./FooterStyles.css";
import vcmlogo from "../assests/Layer_1.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <img className="logo" src={vcmlogo} alt="this is img" />
          <p>your delivery our responsibility</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
            <i className="fa-brands fa-instagram-square"></i>
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom"></div>
      <div>
        <h4>Visit</h4>
        <br />
        <h5>Registered Office</h5>
        <address>
          Lot C-20, Rd No. 19, Wagle Ind. Estate, Road No. 16V,<br></br> Wagle
          Industrial Estate, MIDC Thane (W), Maharashtra India
        </address>
        <br />
        <h5>Connect with us</h5>

        <p>
          <i class="fa-solid fa-phone"></i>
          {"  "}
          9403335566
        </p>
        <p>
          <i class="fa-solid fa-phone"></i>
          {"  "}9403336655
        </p>
        <p>
          <i class="fa-solid fa-envelope"></i> email:
          <a href="mailto:info@vcmtrans.com">info@vcmtrans.com</a>
          <br></br>
          <a href="mailto:vcmtranssolutionpvtltd@gmail.com">
            vcmtranssolutionpvtltd@gmail.com
          </a>
        </p>
        <br />
      </div>
    </div>
  );
};
export default Footer;
