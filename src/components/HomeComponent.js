import "./HomeComponent.css";

import Office1 from "../assests/work1.jpeg";
import Office2 from "../assests/work2.jpeg";

const HomeComponent = () => {
  return (
    <>
      <div className="vcm-trans">
        <h1>Welcome to VCM trans solution</h1>
        <p>Delivering Dreams</p>

        <div className="first-des">
          <div className="des-text">
            <p>
              <strong>VCM Trans Solutions (P) Ltd.</strong> is based in India,is
              a beacon of excellence in the world of transportation and
              logistics. With a rich history spanning over 27 years, we have
              become synonymous with reliability, innovation, and
              customer-centric solutions.
            </p>{" "}
            <br />
            <p>
              Established in 1993 by the visionary Bharatbhushan Sharma, our
              journey has been a testament to unwavering commitment and
              transformative leadership. Today, we continue to thrive under the
              dynamic leadership of Shashibhushan Sharma and Vijay Sharma, who
              bring a wealth of expertise and a fresh perspective to the
              industry.
            </p>
          </div>
          <div className="image">
            <img alt="img" src={Office1} />
            <img alt="img" src={Office2} />
          </div>
        </div>
        <br />
        <h1 className="section-two">Why Choose Us?</h1>
        <div className="second-des">
          <div className="des-text">
            <div className="box">
              <div className="box-one">
                <ul className="box-one-list">
                  <li class="animate fadeInLeft" data-anim-type="fadeInLeft">
                    Reliable Service <i class="fa-solid fa-clock fa-lg"></i>
                  </li>
                  <li>
                    Experience and Expertise{" "}
                    <i className="fa-solid fa-graduation-cap fa-lg"></i>
                  </li>
                  <li>24/7 Availability </li>
                  <li>Custom Solutions </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeComponent;
