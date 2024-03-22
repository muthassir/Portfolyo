import React from 'react'
import testimonalBg from '../assets/img/testimonial/test-bg.png'
import Portfolio3 from '../components/Portfolio3'


const Portfolio = () => {
  return (
    <>
    <section className="breadcrumb-area d-flex align-items-center" style={{backgroundImage:`url(${testimonalBg})`}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-lg-12">
                            <div className="breadcrumb-wrap text-left">
                                <div className="breadcrumb-title flex justify-center items-center flex-col">
                                    <h2>Skills</h2>    
                                    <div className="breadcrumb-wrap">
                              
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Skills</li>
                                    </ol>
                                </nav>
                            </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            <Portfolio3 />
           
            </>
  )
}

export default Portfolio