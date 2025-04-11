import React from "react";


const HomeSpecialPrograms = () => {
  return (
    <section className="special-programs">
      <div className="special-programs__container">
        <div className="special-programs__text">
          <h2 className="special-programs__title newtitle">
            Special Programs
          </h2>
          <p className="special-programs__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna exercitation. 
            Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
          </p>

          <div className="special-programs__features">
            <div className="feature">
              <div className="feature__icon">
              <img src="/images/Home-Page/special-program-icon-1.png" alt="Icon" />
              </div>
              <div className="feature__content">
                <h4>Influencer Buzz</h4>
                {/* <p>Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl masuda lacinia integea.</p> */}
              </div>
            </div>

            <div className="feature">
              <div className="feature__icon">
              <img src="/images/Home-Page/special-program-icon-2.png" alt="Icon" />
              </div>
              <div className="feature__content">
                <h4>Brand Buzz</h4>
                {/* <p>Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl masuda lacinia integea.</p> */}
              </div>
            </div>
          </div>
        </div>

        <div className="special-programs__image">
          <img src="images/Home-Page/special-program-img.png" alt="special-programs" />
        </div>
      </div>
    </section>
  );
};

export default HomeSpecialPrograms;
