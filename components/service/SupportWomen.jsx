import React from "react";

const SupportWomen = () => {
  return (
    <section className="support-women m-5">
      <img src="/images/Home-Page/i-support-women-img-1.png" alt="Mascot Left" className="mascot left" />
      <div className="support-women__content">
        <h2 className="newtitle">I Support Women</h2>
        <div className="sup-women-mbl">
        <img  src="/images/Home-Page/i-support-women-img-1.png" alt="support-women" />
        </div>
       
        <p>I believe in supporting women entrepreneurs on their journey to success, and I prioritize hiring and providing a supportive platform for women and encouraging those who have taken a career break </p>
        <button className="cta-button">Let's Get Started</button>
      </div>
      <div className="discount one"><span style={{fontSize:"22px", fontStyle:"italic"}}>10% OFF</span> <br /> for <br /> <span style={{fontSize:"14px", color:"#000"}}>Women Entreprenour</span></div>
      <div className="discount two"> <span style={{fontSize:"20px",fontStyle:"italic"}}>Support</span> <br /> <span style={{color:"#000"}}>Career Breaks</span> <br /> for women </div>
      <img src="/images/Home-Page/i-support-women-img-2.png" alt="Mascot Right" className="mascot right" />
    </section>
  );
};

export default SupportWomen;
