import React from 'react'
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from 'react-router-dom'



const Aboutme = () => {
   const [data, setData] = useState({})
   const [imgs,setImgs] = useState({})
   const [errors, setError] = useState(null)
   useEffect(()=>{
     const apiUrl = 'https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae';
     axios.get(apiUrl)
     .then(response =>{
      const {title, name,subTitle,quote,description,exp_year} = response.data.user.about
      const imgs = response.data.user.about.avatar.url
       setData({title,name,subTitle,quote,description,exp_year})
       setImgs(imgs)
     })
     .catch(error=>{
       setError(error)
       console.log(errors);
     })
   }, [])
   
  return (
            <section id="about" className="about-area about-p pt-120 pb-120 p-relative" style={{background:'#000'}}>
               <div className="container">
                  <div className="row">
                     <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="s-about-img p-relative ">                            
                           <img src={imgs} alt="about-img"  className='flex h-[450px]'/>  
                            <div className="about-text second-about">
                                    <span>{data.exp_year}+</span>
                                    <p>Years Experience</p>
                                </div>
                        </div>
                     </div>
                     <div className="col-lg-6 col-md-12 col-sm-12 pl-60">
                        <div className="about-content s-about-content">
                           <div className="about-title second-atitle pb-25">
                              <h5>About Me</h5>
                              <h2>{data.title}</h2>
                           </div>
                           <p>Hello,  I'm {data.name} {data.description}</p>
                           <div className="about-content3">
                              <div className="row">
                                 <div className="col-md-12">
                                    <ul className="green">
                                       <li>Fringilla risus nec, luctus mauris orci auctor purus euismod at pretium purus pretium ligula rutrum tempor sapien .</li>
                                       <li>Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien undo pretium purus .</li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="slider-btn mt-20">                                          
                            <Link to='/about'><p href="about.html" className="btn ss-btn smoth-scroll">Learn More <i className="fal fa-long-arrow-right"></i></p></Link> 				
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
)
}

export default Aboutme;