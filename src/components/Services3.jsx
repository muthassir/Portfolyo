import React from 'react'
import img from '../assets/img/icon/se-icon4.png'
import img2 from '../assets/img/icon/se-icon5.png'
import img3 from '../assets/img/icon/se-icon6.png'
import img4 from '../assets/img/icon/se-icon7.png'
import { useEffect, useState } from "react"
import axios from "axios"



const Services3 = () => {
  const [data, setData] = useState({})
  const [data2, setData2] = useState({})
  const [data3, setData3] = useState({})
  const [data4, setData4] = useState({})
  const [errors, setError] = useState(null)

  useEffect(()=>{
    const apiUrl = 'https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae';
    axios.get(apiUrl)
    .then(response =>{
     const service1 = response.data.user.services[0]
     const service2 = response.data.user.services[1]
     const service3 = response.data.user.services[2]
     const service4 = response.data.user.services[2]

      setData(service1)
      setData2(service2)
      setData3(service3)
      setData4(service4)


      // console.log(avatar);
    })
    .catch(error=>{
      setError(error)
      console.log(errors);
    })
  }, [])

  return (
    // <!-- services-three-area -->
    <section id="services" className="services-area services-bg  p-relative fix pt-120 pb-90" style={{background:'#000'}}>
        <div className="container">
            <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="section-title mb-50 wow fadeInLeft  animated text-center" data-animation="fadeInLeft" data-delay=".4s">
                         <h5>What We Do</h5>
                        <h2>
                         Services
                        </h2>
                     
                    </div>
                    </div>
                      <div className="col-lg-3 col-md-6">
                         <div className="s-single-services text-center mb-30 wow fadeInUp  animated" data-animation="fadeInUp" data-delay=".2s">
                            <div className="services-icon">
                             <img src={img} alt="img" />
                            </div>
                            <div className="second-services-content">
                                <h3><a href="services-detail.html">{data.name}</a></h3>
                                <p>{data.desc}</p>
                            </div>
                        </div>
                    </div>
                       <div className="col-lg-3 col-md-6">
                       <div className="s-single-services text-center active mb-30 wow fadeInUp  animated" data-animation="fadeInUp" data-delay=".4s">
                            <div className="services-icon">
                             <img src={img2} alt="img" />
                            </div>
                            <div className="second-services-content">
                                <h3><a href="services-detail.html">{data2.name}</a></h3>
                                <p>{data2.desc}</p>
                            </div>
                        </div>
                    </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="s-single-services text-center mb-30 wow fadeInUp  animated" data-animation="fadeInUp" data-delay=".6s">
                            <div className="services-icon">
                              <img src={img3} alt="img" />
                            </div>
                            <div className="second-services-content">
                                <h3><a href="services-detail.html">{data3.name}</a></h3>                                        
                                <p>{data3.desc}</p>
                            </div>
                        </div>
                    </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="s-single-services text-center mb-30 wow fadeInUp  animated" data-animation="fadeInUp" data-delay=".8s">
                            <div className="services-icon">
                              <img src={img4} alt="img" />
                            </div>
                            <div className="second-services-content">
                                <h3><a href="services-detail.html">{data4.name}</a></h3>                                        
                                <p>{data4.desc}</p>
                            </div>
                        </div>
                    </div>
               
                </div>
            
             
            </div>
    </section>
    // services-three-area
  )
}

export default Services3