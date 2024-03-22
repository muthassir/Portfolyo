import React from 'react'
import img from '../assets/img/logo/logo.png'
import { useEffect, useState } from "react"
import axios from "axios"


const Footer = ({phoneNumber,address}) => {
    const [data, setData] = useState({})
    const [errors, setError] = useState(null)
    useEffect(()=>{
      const apiUrl = 'https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae';
      axios.get(apiUrl)
      .then(response =>{
       const {email,username} = response.data.user
        setData({email,username})
      })
      .catch(error=>{
        setError(error)
        console.log(errors);
      })
    }, [])
  return (
    // footer
        <footer className="footer-bg footer-p" style={{background:'#131819'}}>
            <div className="footer-top  pt-70  pb-40">
                <div className="container">
                    <div className="row justify-content-between">
                        
                          <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title">
                                   <h1>{data.username}</h1>
                                </div>
                                <p>Nam purus nibh, luctus at cursus vel, efficitur eu dui. Aenean tellus massa, euismod eu dictum in, tincidunt ac lacus. Quisque vitae tellus a nibh sollicitudin viverra id sed libero.</p>
                            </div>
                        </div>
						<div className="col-xl-2 col-lg-2 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title">
                                    <h2>Our Links</h2>
                                </div>
                                <div className="footer-link">
                                    <ul>                                        
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="about.html"> About Us</a></li>
                                        <li><a href="services.html"> Services </a></li>
                                        <li><a href="contact.html"> Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title">
                                    <h2>Our Services</h2>
                                </div>
                                <div className="footer-link">
                                    <ul>
                                        <li><a href="#">FAQ</a></li>
                                        <li><a href="#">Support</a></li>
                                        <li><a href="#">Privercy</a></li>
                                        <li><a href="#">Term & Conditions</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>  
                        <div className="col-xl-2 col-lg-2 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title">
                                    <h2>Our Services</h2>
                                </div>
                                <div className="f-contact">
                                    <ul>
                                    <li>
                                        <i className="icon fal fa-phone"></i>
                                        <span>1800-121-3637<br/>{phoneNumber}</span>
                                    </li>
                                   <li><i className="icon fal fa-envelope"></i>
                                        <span>
                                            <a href="mailto:info@example.com">{data.email}</a>
                                       <br/>
                                       <a href="mailto:help@example.com">{data.email}</a>
                                       </span>
                                    </li>
                                    <li>
                                        <i className="icon fal fa-map-marker-check"></i>
                                        <span>1247/Plot No. 39,<br/>{address}</span>
                                    </li>
                                    
                                </ul>
                                    
                                    </div>
                            </div>
                        </div>  
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title mb-30">
                                  <h2>Subscribe To Our Newsletter</h2>
                                </div>
                                <div className="footer-link">
                                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212867.83634504632!2d-112.24455686962897!3d33.52582710700138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b743829374b03%3A0xabaac255b1e43fbe!2sPlexus%20Worldwide!5e0!3m2!1sen!2sin!4v1618567685329!5m2!1sen!2sin" width="100" height="160" style={{border:'0'}} allowFullScreen loading="lazy"></iframe>
                                </div>
                                 
                            </div>
                        </div>
                      
                        
                    </div>
                </div>
            </div>
            {/* 2nd */}
            <div className="copyright-wrap">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">                         
                               Copyright  © 2021 Zcubedesign. All rights reserved.                       
                        </div>
                        <div className="col-lg-6 text-right text-xl-right">                       
                            <ul>
                                <li><a href="#">Privercy</a></li>
                                <li><a href="#">Term &amp; Conditions</a></li>
                               
                            </ul>                 
                        </div>
                        
                    </div>
                </div>
            </div>
            </footer>
  )
}

export default Footer;