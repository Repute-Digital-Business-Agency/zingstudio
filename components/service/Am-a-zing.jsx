import Image from "next/image";
import Link from "next/link";


export default function Am_a_Zing() {
  return (
    <div className="section-full box-about-list Am_a_Zing">
      <div className="row spno">
        <div className="col-lg-6 col-md-12 wow fadeInLeft"
              data-wow-delay="0.2s">
          <Image
            alt=""
            className="img-cover"
            src="/images/about-us/img-2.jpg"
            width="1000"
            height="674"
          />
        </div>
        <div className="col-lg-6 col-md-12 bg-primary wow fadeInRight"
              data-wow-delay="0.2s" style={{backgroundColor:"#97989b"}}>
          <div className="max-w700 m-auto p-tb50 p-lr20">
            <div >
             <Link href="/am-a-zing"> <h2>
              <b>Am-A-Zing</b>&nbsp; Program:<br /> Empowering women to lead the future
                
              </h2></Link>
              <p style={{color:"black"}}>At Zing Studio, we strive to create opportunities to uplift women, enabling them to realize
their potential and take control of the decisions that shape their lives. We do this through
leadership capacity building, digital literacy, skills development and employment, ensuring
equal access to opportunities for women to thrive and succeed.</p>
            </div>
            <div className="icon-bx-wraper m-b30 left">
              <div className="icon-md">
                <a href="#" className="icon-cell text-white">
                  <i className="flaticon-factory"></i>
                </a>
              </div>
              <div className="icon-content">
                <h4 className="dlab-tilte">10% disounted cost for Women Entrepreneurs:</h4>
                <p className="text-white">
                We believe in supporting women
entrepreneurs on their journey to success, that’s why we offer a 10% discount on our
services to help them grow their businesses with ease and confidence.
                </p>
              </div>
            </div>
            <div className="icon-bx-wraper m-b30 left">
              <div className="icon-md">
                <a href="#" className="icon-cell text-white">
                  <i className="flaticon-settings"></i>
                </a>
              </div>
              <div className="icon-content">
                <h4 className="dlab-tilte">Turning Career Breaks into Breakthroughs for Women:</h4>
                <p className="text-white">
                We prioritize hiring and providing a
supportive platform for women and encouraging those who have taken a career break to
restart and thrive in their professional journey.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
