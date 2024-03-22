import React from 'react'
import backgroundImage from '../assets/img/slider/slider_img01.png'
import Aboutme from '../components/Aboutme'
import Services3 from '../components/Services3'
import Testimonials from '../components/Testimonials'
import Portfolio3 from '../components/Portfolio3'
import log from '../assets/img/brand/b-logo3.png'
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from 'react-router-dom'





const Home = ({name,subTitle}) => {
    const [data, setData] = useState({})
    const [data2, setData2] = useState({})
    const [data3, setData3] = useState({})

    const [title,setTitle] = useState([])
    const [title2,setTitle2] = useState([])
    const [title3,setTitle3] = useState([])


    const [errors, setError] = useState(null)
    useEffect(()=>{
      const apiUrl = 'https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae';
      axios.get(apiUrl)
      .then(response =>{
       const project1 = response.data.user.projects[0]
       const project2 = response.data.user.projects[1]
       const project3 = response.data.user.projects[2]

        setData(project1.image.url)
        setData2(project2.image.url)
        setData3(project3.image.url)

        setTitle(project1.title)
        setTitle2(project2.title)
        setTitle3(project3.title)

      })
      .catch(error=>{
        setError(error)
        console.log(errors);
      })
    }, [])

  return (
        <>
    <div className="modal fade bs-example-modal-lg search-bg popup1" tabIndex='-1' role="dialog">
        <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content search-popup">
                <div className="text-center">
                    <a href="#" className="close2" data-dismiss="modal" aria-label="Close">× close</a>
                </div>
                <div className="row search-outer">
                    <div className="col-md-11"><input type="text" placeholder="Search for products..." /></div>
                    <div className="col-md-1 text-right"><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></div>
                </div>
            </div>
        </div>
    </div>
   

        <section id="home" className="slider-area slider-four fix p-relative ">
           
            <div className="slider-active">
            <div className="single-slider slider-bg d-flex align-items-center" style={{backgroundImage:`url(${backgroundImage})`}}>
                    <div className="container">
                       <div className="row justify-content-center align-items-center">
                         
                            <div className="col-lg-7 col-md-7">
                                <div className="slider-content s-slider-content mt-60">
                                    <h5 data-animation="fadeInUp" data-delay=".4s">{name}</h5>
                                     <h2 data-animation="fadeInUp" data-delay=".4s">{subTitle}</h2>
                                   
                                     <div className="slider-btn mt-30" data-animation="fadeInUp" data-delay=".4s">     
                                         <a href="/about" className="btn ss-btn active mr-15 smoth-scroll">Learn More <i className="fal fa-long-arrow-right"></i></a>
                                         <a href="https://www.youtube.com/watch?v=gyGsPlt06bo" className="video-i popup-video"><i className="fas fa-play"></i></a>
                                    </div>        
                                                          
                                </div>
                            </div>
                             <div className="col-lg-5 col-md-5">
                              
                            </div>
                            
                        </div>
                    </div>
                </div>
                
                </div>
                
           
        </section>

        <Aboutme />

            <section className="brand-area pt-120 pb-120" style={{background:'#222'}}>
                <div className="container">
                     <div className="row">
                    
                        <div className="col-lg-12">
                                 <div className="section-title mb-50 wow fadeInLeft  animated"  data-animation="fadeInLeft" data-delay=".4s">
                                 <h5>users</h5>
                                <h2>
                                   worldwide users
                                </h2>
                             
                            </div>
                                
                            </div>
                    </div>
                    <div className="row brand-active">
                        <div className="col-xl-2 ">
                            <div className="single-brand img">
                                 <img src={log} alt="img"/>
                            </div>
                        </div>
                        <div className="col-xl-2">
                            <div className="single-brand">
                                 <img src={log} alt="img"/>
                            </div>
                        </div>
                        <div className="col-xl-2">
                            <div className="single-brand">
                                 <img src={log} alt="img"/>
                            </div>
                        </div>
                        <div className="col-xl-2">
                            <div className="single-brand">
                                 <img src={log} alt="img"/>
                            </div>
                        </div>
                        <div className="col-xl-2">
                            <div className="single-brand">
                                 <img src={log} alt="img"/>
                            </div>
                        </div>
                      
                        
                    </div>
                </div>
            </section>

            <Services3 />
            <Testimonials />
            <Portfolio3 />


           <section id="blog" className="blog-area  p-relative pt-120 pb-90 fix" style={{background:"#000"}}>
               <div className="container">
                   <div className="row align-items-center"> 
                       <div className="col-lg-12">
                           <div className="section-title center-align mb-50 text-center">
                               <h5>My</h5>
                               <h2>
                                  Projects
                               </h2>
                           </div>
                          
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-lg-4 col-md-4">
                           <div className="single-post2 mb-30  wow fadeInDown  animated">
                               <div className="blog-thumb2">
                                   <a href=""><img src={data} alt="img" /></a>
                                   
                               </div>
                               <div className="blog-content2">     
                                   <div className="b-meta">
                                       <div className="row">
                                            <div className="col-lg-12 col-md-12">
                                            <div className="meta-info">
                                               <ul>
                                                   <li><i className="fal fa-user"></i> Admin</li>
                                                   <li><i className="fal fa-calendar-alt"></i> 24th March 2021</li>
                                                    
                                               </ul>
                                           </div>
                                            </div>
                                          
                                        </div>
                                   </div>
                                   
                                    <div className="row">
                                       <div className="col-lg-12">
                                        <h4><a href="">{title}</a></h4>    
                                           <p>Cras ultrices maximus arcu ut aqam. Aliquam daber a diam ante.</p>
                                       </div>
                                   </div>
                                   
                                      <div className="row align-items-center">
                                           <div className="col-lg-12 col-md-12">
                                              <div className="blog-btn"><p><i className="fas fa-angle-right"></i><Link to='/projects'> Read More</Link></p></div>
                                            </div>
                                        </div>
                                   
                                    
                                    
                               </div>
                               
                               
                           </div>
                       </div>
                        <div className="col-lg-4 col-md-4">
                           <div className="single-post2 mb-30  wow fadeInUp  animated">
                               <div className="blog-thumb2">
                                   <a href=""><img src={data2} alt="img" /></a>
                                   
                               </div>
                              <div className="blog-content2">     
                                   <div className="b-meta">
                                       <div className="row">
                                            <div className="col-lg-12 col-md-12">
                                            <div className="meta-info">
                                               <ul>
                                                   <li><i className="fal fa-user"></i> Admin</li>
                                                   <li><i className="fal fa-calendar-alt"></i> 24th March 2021</li>
                                               </ul>
                                           </div>
                                            </div>
                                          
                                        </div>
                                   </div>
                                   
                                    <div className="row">
                                       <div className="col-lg-12">
                                        <h4><a href="">{title2}</a></h4>    
                                           <p>Cras ultrices maximus arcu ut aqam. Aliquam daber a diam ante.</p>
                                       </div>
                                   </div>
                                   
                                      <div className="row align-items-center">
                                           <div className="col-lg-12 col-md-12">
                                              <div className="blog-btn"><p><i className="fas fa-angle-right"></i><Link to='/projects'> Read More</Link></p></div>
                                            </div>
                                        </div>
                                   
                                    
                                    
                               </div>
                               
                               
                           </div>
                       </div>
                        <div className="col-lg-4 col-md-4">
                           <div className="single-post2 mb-30 wow fadeInDown  animated">
                               <div className="blog-thumb2">
                                   <a href=""><img src={data3} alt="img" /></a>
                                   
                               </div>
                               <div className="blog-content2">     
                                   <div className="b-meta">
                                       <div className="row">
                                            <div className="col-lg-12 col-md-12">
                                            <div className="meta-info">
                                               <ul>
                                                    <li><i className="fal fa-user"></i> Admin</li>
                                                   <li><i className="fal fa-calendar-alt"></i> 24th March 2021</li>
                                               </ul>
                                           </div>
                                            </div>
                                          
                                        </div>
                                   </div>
                                   
                                    <div className="row">
                                       <div className="col-lg-12">
                                        <h4><a href="">{title3}</a></h4>    
                                           <p>Cras ultrices maximus arcu ut aqam. Aliquam daber a diam ante.</p>
                                       </div>
                                   </div>
                                   
                                      <div className="row align-items-center">
                                           <div className="col-lg-12 col-md-12">
                                              <div className="blog-btn"><p><i className="fas fa-angle-right"></i><Link to='/projects'> Read More</Link></p></div>
                                            </div>
                                        </div>
                                   
                                    
                                    
                               </div>
                               
                               
                           </div>
                       </div>
                       
                   </div>
               </div>
           </section>
             
        </>
  )
}

export default Home