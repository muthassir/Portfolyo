import React from 'react'

const Newsletter = () => {
  return (
    // news-letter-area
    <section className="newslater-area pt-95 pb-100" style={{background:"#cc866c"}}>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-8 col-lg-8">
                    <div className="section-title">
                        <h2>Get Update By Signup Our Newsletter</h2>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4">
                    <form name="ajax-form"  action="#" method="post" className="contact-form newslater p-relative">
                       <div className="form-group">
                          <input className="form-control" id="email2" name="email" type="email" placeholder="Email Address..."  required="" /> 
                          <button type="submit" className="btn btns" id="send2">Join Now</button>
                       </div>
                       {/* <!-- /Form-email -->	 */}
                    </form>
                </div>
            </div>
           
        </div>
    </section>
    // news-letter-end
  )
}

export default Newsletter