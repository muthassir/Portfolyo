import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react"
import axios from "axios"
import {IoMenu} from 'react-icons/io5'


const Header = () => {
    const [data, setData] = useState([])
    const [errors, setError] = useState(null)
    useEffect(()=>{
      const apiUrl = 'https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae';
      axios.get(apiUrl)
      .then(response =>{
       const {username} = response.data.user
        setData({username})
      })
      .catch(error=>{
        setError(error)
        console.log(errors);
      })
    }, [])

    const[mobileView, setMobileView] = useState(false)
    
  return (

    <header className="header-area">  
        <div id="header-sticky" className="menu-area">
            <div className="container">
                <div className="second-menu">
                    <div className="row align-items-center">
                        <div className="col-xl-2 col-lg-2">
                            <div className="logo">
                            <h1 className='heading-logo '>{data.username}</h1>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg- text-center">
                        <div className='md:hidden flex absolute top-1 right-4 cursor-pointer' onClick={()=>setMobileView(!mobileView)}>
                                <IoMenu size={30}/>
                            </div>
                            <div className="main-menu">
                                <nav id="mobile-menu ">
                                         <ul className='md:block hidden'>
                                             <li className="has-sub ">
                                                <Link to='/'>Home</Link>
                                            </li>
                                            <li>
                                                <Link to='/about'>About me</Link>
                                            </li>
                                            <li className="has-sub "> 
                                              <Link to='/services'>Services</Link>
                                            </li>
                                           <li>
                                            <Link to='/skills'>Skills</Link>
                                           </li>
                                            <li className="has-sub"> 
                                                <Link to='/projects'>Projects</Link>
                                            </li>
                                            <li>
                                             <Link to='/contact'>Contact</Link>
                                                </li>                                                  
                                        </ul>
                                    </nav>
                                    {/* mobile view */}
                                    {mobileView &&
                                    <ul className='md:hidden  flex flex-col justify-center items-center absolute top-26 right-0  w-screen bg-black' onClick={()=>setMobileView(!mobileView)}>
                                             <li className="has-sub ">
                                                <Link to='/'>Home</Link>
                                            </li>
                                            <li><Link to='/about'>about me</Link></li>
                                            <li className="has-sub "> 
                                              <Link to='/services'>services</Link>
                                            </li>
                                           <li><Link to='/skills'>portfolio</Link></li>
                                            <li className="has-sub"> 
                                                <Link to='/projects'>Blog</Link>
                                            </li>
                                            <li>
                                                <Link to='/contact'>Contact</Link>
                                                </li>                                                  
                                        </ul>}
                           
                            </div>
                        </div>   
                      
                        <div className="col-xl-2 col-lg-2 d-none d-lg-block">
                        <Link to='/contact'><p className='btn ss-btn smoth-scroll '>Get A Quote<i className="fal fa-long-arrow-right " /></p></Link>
                        </div>

                        
                            <div className="col-12">
                                <div className="mobile-menu"></div>
                            </div>
                           
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;