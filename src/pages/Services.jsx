import React from 'react'
import testimonalBg from '../assets/img/testimonial/test-bg.png'
import Services3 from '../components/Services3'
import Testimonials from '../components/Testimonials'
import { useEffect, useState } from "react"
import axios from "axios"



const Services = () => {
    const [data, setData] = useState({})
    const [data2, setData2] = useState({})
    const [data3, setData3] = useState({})


  const [errors, setError] = useState(null)
  useEffect(()=>{
    const apiUrl = 'https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae';
    axios.get(apiUrl)
    .then(response =>{
     const service1 = response.data.user.services[0]
     const service2 = response.data.user.services[1]
     const service3 = response.data.user.services[2]

      setData(service1)
      setData2(service2)
      setData3(service3)
      // console.log(avatar);
    })
    .catch(error=>{
      setError(error)
      console.log(errors);
    })
  }, [])

  return (
    <>
             <section className="breadcrumb-area d-flex align-items-center" style={{backgroundImage:`url(${testimonalBg})`}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-lg-12">
                            <div className="breadcrumb-wrap text-left">
                                <div className="breadcrumb-title flex justify-center items-center flex-col">
                                    <h2>Services</h2>    
                                    <div className="breadcrumb-wrap">
                              
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Pricing</li>
                                    </ol>
                                </nav>
                            </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
             <Services3 />
             <Testimonials />
             {/* pricing */}
             
            <section id="pricing" className="pricing-area pt-120 pb-60" style={{background: '#222'}}>
                <div className="container"> 
                    
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                                <div className="section-title mb-50 wow fadeInLeft  animated text-center" data-animation="fadeInLeft" data-delay=".4s">
                                 <h5>Best Value At Your Service</h5>
                                <h2>
                                 Pricing
                                </h2>
                             
                            </div>
                            </div>
                        <div className="col-lg-4 col-md-4">
                          <div className="pricing-box pricing-box2 text-center mb-60">
                                    <div className="pricing-head">   
                                        <h2>{data.name}</h2>  
                                            <div className="price-count">
                                            <h2>{data.charge}</h2>
                                        </div> 
                                        <hr/>
                                    </div>

                                    <div className="pricing-body mt-20 mb-30 text-left">
                                       <ul>
                                            <li>Three Keyword Monitors</li>
                                           <li>Three Brand Monitors</li>
                                            <li>300 Search Results</li>
                                             <li>Full Social Profiles</li>
                                            <li>Basic Quota</li>
                                             <li>PDF reports</li>
                                        </ul>
                                    </div>             

                                    <div className="pricing-btn">
                                       <a href="contact.html" className="btn ss-btn">Start Now</a>
                                    </div>
                                </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                             <div className="pricing-box pricing-box2 active text-center mb-60">
                                    <div className="pricing-head">   
                                        <h2>{data2.name}</h2>  
                                            <div className="price-count">
                                            <h2>{data2.charge}</h2>
                                        </div> 
                                        <hr/>
                                    </div>

                                    <div className="pricing-body mt-20 mb-30 text-left">
                                       <ul>
                                            <li>Three Keyword Monitors</li>
                                           <li>Three Brand Monitors</li>
                                            <li>300 Search Results</li>
                                             <li>Full Social Profiles</li>
                                            <li>Basic Quota</li>
                                             <li>PDF reports</li>
                                        </ul>
                                    </div>             

                                    <div className="pricing-btn">
                                        <a href="contact.html" className="btn ss-btn">Start Now</a>
                                    </div>
                                </div>
                      
                        </div>
                         <div className="col-lg-4 col-md-4">
                             <div className="pricing-box pricing-box2 text-center mb-60">
                                    <div className="pricing-head">   
                                        <h2>{data3.name}</h2>  
                                            <div className="price-count">
                                            <h2>{data3.charge}</h2>
                                        </div> 
                                        <hr/>
                                    </div>

                                    <div className="pricing-body mt-20 mb-30 text-left">
                                       <ul>
                                            <li>Three Keyword Monitors</li>
                                           <li>Three Brand Monitors</li>
                                            <li>300 Search Results</li>
                                             <li>Full Social Profiles</li>
                                            <li>Basic Quota</li>
                                             <li>PDF reports</li>
                                        </ul>
                                    </div>             

                                    <div className="pricing-btn">
                                        <a href="contact.html" className="btn ss-btn">Start Now</a>
                                    </div>
                                </div>
                             
                           
                        </div>
                    </div>
                </div>
            </section>
            
            </>
  )
}

export default Services