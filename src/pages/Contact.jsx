import React from 'react'
import testimonalBg from '../assets/img/testimonial/test-bg.png'


const Contact = () => {
  return (
    <>
    <section className="breadcrumb-area d-flex align-items-center" style={{backgroundImage:`url(${testimonalBg})`}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-lg-12">
                            <div className="breadcrumb-wrap text-left">
                                <div className="breadcrumb-title flex justify-center items-center flex-col">
                                    <h2>Contact Us</h2>    
                                    <div className="breadcrumb-wrap">
                              
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                                    </ol>
                                </nav>
                            </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

            {/* // <!-- contact-area --> */}
<section id="contact" className="contact-area after-none contact-bg p-relative fix pt-90 pb-30" style={{background: '#222'}}>
    
    <div className="container">
 
        <div className="row">
            <div className="col-lg-12">
             <div className="contact-info">
            <div className="single-cta pb-30 mb-30 wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
                    <div className="f-cta-icon">
                        <i className="far fa-map"></i>
                    </div>
                    <h5>Office Address</h5>
                    <p>380 St Kilda Road, Melbourne < br />
                        VIC 3004, Australia</p>
                </div>
                 <div className="single-cta pb-30 mb-30 wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
                    <div className="f-cta-icon">
                        <i className="far fa-clock"></i>
                    </div>
                    <h5>Working Hours</h5>
                    <p>Monday to Friday 09:00 to 18:30 < br /> 
                        Saturday 15:30</p>
                </div>
                 <div className="single-cta pb-30 mb-30 wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
                    <div className="f-cta-icon">
                        <i className="far fa-envelope-open"></i>
                    </div>
                    <h5>Message Us</h5>
                    <p> <a href="#">support@example.com</a>< br /><a href="#">info@example.com</a></p>
                </div>
                </div>
                </div>
        </div>
        
    </div>
   
</section>
{/* <!-- contact-area-end --> */}
{/* <!-- contact-area --> */}
<section className="contact-area contact-bg bg-dark p-relative fix pt-120 pb-120"  >
   
    <div className="container">
 
        <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="contact-img2">
                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212867.83634504632!2d-112.24455686962897!3d33.52582710700138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b743829374b03%3A0xabaac255b1e43fbe!2sPlexus%20Worldwide!5e0!3m2!1sen!2sin!4v1618567685329!5m2!1sen!2sin" width="100" height="620" style={{border: '0'}} allowFullScreen loading="lazy"></iframe>
                </div>
            </div>
             <div className="col-lg-6">
                <div className="contact-bg02 pr-70 pl-30">
                <div className="section-title center-align">
                     <h5>Get A Quote</h5>
                    <h2>
                       Make An Appointment
                    </h2>
                  
                </div>
                    
            <form action="mail.php" method="post" className="contact-form mt-30">
                <div className="row">
                <div className="col-lg-12">
                    <div className="contact-field p-relative c-name mb-20">                                    
                        <input type="text" id="firstn" name="firstn"  placeholder="First Name" required />
                    </div>                               
                </div>
                
                <div className="col-lg-12">                               
                    <div className="contact-field p-relative c-subject mb-20">                                   
                        <input type="text" id="email" name="email" placeholder="Eamil" required />
                    </div>
                </div>		
                <div className="col-lg-12">                               
                    <div className="contact-field p-relative c-subject mb-20">                                   
                        <input type="text" id="phone" name="phone" placeholder="Phone No." required />
                    </div>
                </div>	
              
                <div className="col-lg-12">
                    <div className="contact-field p-relative c-message mb-30">                                  
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Write comments"></textarea>
                    </div>
                    <div className="slider-btn">                                          
                                <button className="btn ss-btn" data-animation="fadeInRight" data-delay=".8s"><span>Submit Now</span></button>				
                            </div>                             
                </div>
                </div>
            
        </form>
                
                </div>
            
            </div>
            
        </div>
        
    </div>
   
</section>
{/* <!-- contact-area-end --> */}
    </>
  )
}

export default Contact