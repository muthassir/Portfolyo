import React from 'react'
import { useEffect, useState } from "react"
import axios from "axios"

import testimonalBg from '../assets/img/bg/testimonial-bg.png'
import img from '../assets/img/testimonial/qt-icon.png'

const Testimonials = () => {
    const [data, setData] = useState([])
    const [data2, setData2] = useState([])
    const [data3, setData3] = useState([])

    const [image1, setImage1]= useState({})
    const [image2, setImage2]= useState({})
    const [image3, setImage3]= useState({})


    const [errors, setError] = useState(null)
    
      useEffect(() => {
        const apiUrl = 'https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae';
        axios.get(apiUrl)
          .then(response => {
            const testimonials = response.data.user.testimonials[0]
            const testimonials2 = response.data.user.testimonials[1]
            const testimonials3= response.data.user.testimonials[3]

            const image1 = response.data.user.testimonials[0].image.url
            const image2 = response.data.user.testimonials[1].image.url
            const image3 = response.data.user.testimonials[2].image.url


              setData(testimonials);
              setData2(testimonials2);
              setData3(testimonials3);

              setImage1(image1)
              setImage2(image2)
              setImage3(image3)

            }
          )
          .catch(error => {
            setError(error);
            console.log(errors);
          });
      }, []);

  return (
    <section className="testimonial-area text-center pt-120 pb-95 " style={{backgroundImage:`url(${testimonalBg})`}}>
        <div className="container">
            <div className="row">
            
                <div className="col-lg-12">
                         <div className="section-title text-center mb-50 wow fadeInDown  animated" data-animation="fadeInDown" data-delay=".4s">
                         <h5>testimonials</h5>
                        <h2>
                            some users feedback
                        </h2>
                     
                    </div>
                        
                    </div>
            </div>
            <div id='carouselExampleIndicators' className="carousel slide row justify-content-center" data-ride='carousel'>
                <ol className='carousel-indicators'>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className='active'></li>
                    <li  data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                    <li  data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                </ol>
                 <div className="col-lg-9 carousel-inner">
                    <div className="testimonial-active wow fadeInUp  animated" data-animation="fadeInUp" data-delay=".4s">
                        <div className="single-testimonial-outer carousel-item active">
                        <div className="single-testimonial">
                            <div className="qt-img">
                                <img src={img} alt="img" />
                            </div>
                            
                            <p>{data.review}</p>
                            <div className="testi-author">
                                <img src={image1} alt="img"  className='h-10 rounded-full'/>
                                 <div className="ta-info">
                                    <h6>{data.name}</h6>
                                    <span>{data.position}</span>
                                </div>
                            </div>
                            
                           
                        </div>
                        </div>
                       <div className="single-testimonial-outer carousel-item">
                        <div className="single-testimonial">
                            <div className="qt-img">
                                <img src={img} alt="img" />
                            </div>                                    
                             
                            <p>{data2.review}</p>
                            <div className="testi-author">
                                <img src={image2} alt="img"  className='h-10 rounded-full'/>
                                <div className="ta-info">
                                <h6>{data2.name}</h6>
                                <span>{data2.position}</span>
                            </div>
                            </div>
                            
                           
                        </div>
                        </div>
                        <div className="single-testimonial-outer carousel-item">
                        <div className="single-testimonial">
                            <div className="qt-img">
                                <img src={img} alt="img"/>
                            </div>
                            
                            <p>{data3.review}</p>
                            <div className="testi-author">
                                <img src={image3} alt="img" className='h-10 rounded-full'/>
                                 <div className="ta-info">
                                    <h6>{data3.name}</h6>
                                    <span>{data3.position}</span>
                                </div>
                            </div>
                            
                           
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials;