import React from 'react'
import testimonalBg from '../assets/img/testimonial/test-bg.png'
import bloq from '../assets/img/icon/blockquote.png'
import { useEffect, useState } from "react"
import axios from "axios"




const News = () => {

    const [data, setData] = useState([])
    const [data2, setData2] = useState([])
    const [data3, setData3] = useState([])
  
    const [name, setName] = useState([])
    const [name2, setName2] = useState([])
    const [name3, setName3] = useState([])

const [tech,setTech] = useState([])
const [tech2,setTech2] = useState([])
const [tech3,setTech3] = useState([])



    const [quote, setQuote] = useState([])

    const [errors, setError] = useState(null)
    useEffect(()=>{
      const apiUrl = 'https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae';
      axios.get(apiUrl)
      .then(response =>{
        const quote= response.data.user.about.quote
       const img1 = response.data.user.projects[0].image.url
       const img2 = response.data.user.projects[1].image.url
       const img3 = response.data.user.projects[2].image.url

        const name1 =  response.data.user.projects[0].title
        const name2 =  response.data.user.projects[1].title
        const name3 =  response.data.user.projects[2].title
   
        const tech1 =  response.data.user.projects[0].techStack
        const tech2 =  response.data.user.projects[1].techStack
        const tech3 =  response.data.user.projects[2].techStack


        setTech(tech1)
        setTech2(tech2)
        setTech3(tech3)


        setName(name1)
        setName2(name2)
        setName3(name3)


       setQuote(quote)
        setData(img1)
        setData2(img2)
        setData3(img3)
      })
      .catch(error=>{
        setError(error)
        console.log(errors);
      })
    }, [])

   console.log(tech[0]);


  return (
    <>
      <section className="breadcrumb-area d-flex align-items-center" style={{backgroundImage:`url(${testimonalBg})`}}>
                <div className="container">
                    <div className="row align-items-center ">
                        <div className="col-xl-12 col-lg-12">
                            <div className="breadcrumb-wrap text-left">
                                <div className="breadcrumb-title flex justify-center items-center flex-col">
                                    <h2>Projects</h2>    
                                    <div className="breadcrumb-wrap">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Projects</li>
                                    </ol>
                                </nav>
                            </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            
            
<section className="inner-blog pt-120 pb-105 bg-dark">
    <div className="container">
        <div className="row">
            <div className="col-lg-8">
                <div className="bsingle__post mb-50">
                    <div className="bsingle__post-thumb">
                        <img src={data} alt=""/>
                    </div>
                    <div className="bsingle__content">
                        <div className="admin">
                           <i className="fal fa-calendar-alt"></i> 24th March 2021
                        </div>
                         <div className="meta-info">
                            <ul>
                                <li><i className="fal fa-eye"></i> 100 Views  </li>
                                <li><i className="fal fa-comments"></i> 35 Comments</li>
                                <li><i className="far fa-user"></i> by Hetmayar</li>
                            </ul>
                        </div>
                        
                        <h2><a href="blog-details.html">{name}</a></h2>
                        <p className='text-white'>{tech[0]},{tech[1]},{tech[2]},{tech[3]},{tech[4]}</p>
                       
                        
                    </div>
                </div>
                <div className="bsingle__post mb-50">
                    <div className="bsingle__post-thumb video-p">
                        <img src={data2} alt=""/>
                        <a href="https://www.youtube.com/watch?v=2xc9YKdlLW0" className="video-i popup-video"><i className="fas fa-play"></i></a>
                    </div>
                   <div className="bsingle__content">
                        <div className="admin">
                           <i className="fal fa-calendar-alt"></i> 24th March 2021
                        </div>
                         <div className="meta-info">
                            <ul>
                                <li><i className="fal fa-eye"></i> 100 Views  </li>
                                <li><i className="fal fa-comments"></i> 35 Comments</li>
                                <li><i className="far fa-user"></i> by Hetmayar</li>
                            </ul>
                        </div>
                        
                        <h2><a href="blog-details.html">{name2}</a></h2>
                        <p className='text-white'>{tech2[0]},{tech2[1]},{tech2[2]},{tech2[3]},{tech2[4]}</p>
                       
                        
                    </div>
                </div>

                <div className="bsingle__post mb-50 carousel slide" data-bs-ride='carousel'>
                    <div className="bsingle__post-thumb blog-active carousel-inner">
                        <div className="slide-post carousel-item active">
                            <img src={data3} alt=""/>
                        </div>
                        <div className="slide-post carousel-item">
                            <img src={data3} alt=""/>
                        </div>
                        <div className="slide-post carousel-item">
                            <img src={data3} alt=""/>
                        </div>
                    </div>
                    <div className="bsingle__content">
                        <div className="admin">
                           <i className="fal fa-calendar-alt"></i> 24th March 2021
                        </div>
                         <div className="meta-info">
                            <ul>
                                <li><i className="fal fa-eye"></i> 100 Views  </li>
                                <li><i className="fal fa-comments"></i> 35 Comments</li>
                                <li><i className="far fa-user"></i> by Hetmayar</li>
                            </ul>
                        </div>
                        
                        <h2><a href="blog-details.html">{name3}</a></h2>
                        <p className='text-white'>{tech3[0]},{tech3[1]},{tech3[2]},{tech3[3]},{tech3[4]}</p>
                       
                        
                    </div>
                </div>
                <div className="bsingle__post mb-50">
                    <div className="bsingle__post-thumb embed-responsive embed-responsive-16by9">
                        <iframe height="300" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/547295505&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                    </div>
                    <div className="bsingle__content">
                        <div className="admin">
                            <i className="fal fa-calendar-alt"></i> 24th March 2021
                        </div>
                        
                        <div className="meta-info">
                            <ul>
                                <li><i className="fal fa-eye"></i> 100 Views  </li>
                                <li><i className="fal fa-comments"></i> 35 Comments</li>
                                <li><i className="far fa-user"></i> by Hetmayar</li>
                            </ul>
                        </div>
                        <h2><a href="blog-details.html">Lorem ipsum dolor sit amet, consectetur
                                cing elit, sed do eiusmod tempor.</a></h2>
                        <p>Novia's spaciously two bedroom apartments are perfect for families and even business partners. Look out into the Manhattan skyline from the open fully equipped kitchen.</p>
                       
                        
                    </div>
                </div>
                <div className="bsingle__post mb-50">
                   <div className="bsingle__content">
                      <div className="meta-info">
                            <ul>
                                <li><i className="fal fa-eye"></i> 100 Views  </li>
                                <li><i className="fal fa-comments"></i> 35 Comments</li>
                                <li><i className="far fa-user"></i> by Hetmayar</li>
                            </ul>
                        </div>
                        <h2><a href="blog-details.html">Lorem ipsum dolor sit amet, consectetur
                                cing elit, sed do eiusmod tempor.</a></h2>
                        <p>Novia's spaciously two bedroom apartments are perfect for families and even business partners. Look out into the Manhattan skyline from the open fully equipped kitchen.</p>
                        
                    </div>
                </div>
                <div className="bsingle__post mb-50">
                    <div className="bsingle__content quote-post" >
                        <div className="meta-info">
                            <ul>
                                <li><i className="fal fa-eye"></i> 100 Views  </li>
                                <li><i className="fal fa-comments"></i> 35 Comments</li>
                                <li><i className="far fa-user"></i> by Hetmayar</li>
                            </ul>
                        </div>
                        <div className="quote-icon">
                            <img src={bloq} alt=""/>
                        </div>
                        <h2><a href="blog-details.html">{quote}</a></h2>
                      
                    </div>
                </div>
                <div className="pagination-wrap">
                    <nav>
                        <ul className="pagination">
                            <li className="page-item"><a href="#"><i className="fas fa-angle-double-left"></i></a></li>
                            <li className="page-item active"><a href="#">1</a></li>
                            <li className="page-item"><a href="#">2</a></li>
                            <li className="page-item"><a href="#">3</a></li>
                            <li className="page-item"><a href="#">...</a></li>
                            <li className="page-item"><a href="#">10</a></li>
                            <li className="page-item"><a href="#"><i className="fas fa-angle-double-right"></i></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            {/* right side */}
            <div className="col-sm-12 col-md-12 col-lg-4">
               <aside className="sidebar-widget">
                  <section id="search-3" className="widget widget_search">
                     <h2 className="widget-title">Search</h2>
                     <form role="search" method="get" className="search-form" action="http://wordpress.zcube.in/finco/">
                        <label>
                        <span className="screen-reader-text">Search for:</span>
                        <input type="search" className="search-field" placeholder="Search &hellip;"  name="s" />
                        </label>
                        <input type="submit" className="search-submit" value="Search" />
                     </form>
                  </section>
                  <section id="custom_html-5" className="widget_text widget widget_custom_html">
                     <h2 className="widget-title">Follow Us</h2>
                     <div className="textwidget custom-html-widget">
                        <div className="widget-social">
                           <a href="#"><i className="fab fa-twitter"></i></a>
                           <a href="#"><i className="fab fa-pinterest-p"></i></a>
                           <a href="#"><i className="fab fa-facebook-f"></i></a>
                           <a href="#"><i className="fab fa-instagram"></i></a>
                           <a href="#"><i className="fab fa-wordpress"></i></a>
                        </div>
                     </div>
                  </section>
                  <section id="categories-1" className="widget widget_categories">
                     <h2 className="widget-title">Categories</h2>
                     <ul>
                        <li className="cat-item cat-item-16"><a href="#">Branding</a> (4)</li>
                        <li className="cat-item cat-item-23"><a href="#">Corporat</a> (3)</li>
                        <li className="cat-item cat-item-18"><a href="#">Design</a> (3)</li>
                        <li className="cat-item cat-item-22"><a href="#">Gallery</a> (3)</li>
                     </ul>
                  </section>
                  <section id="recent-posts-4" className="widget widget_recent_entries">
                     <h2 className="widget-title">Recent Posts</h2>
                     <ul>
                        <li>
                           <a href="#">User Experience Psychology And Performance Smshing</a>
                           <span className="post-date">August 19, 2021</span>
                        </li>
                        <li>
                           <a href="#">Monthly Web Development Up Cost Of JavaScript</a>
                           <span className="post-date">August 19, 2021</span>
                        </li>
                        <li>
                           <a href="#">There are many variation passages of like available.</a>
                           <span className="post-date">August 19, 2021</span>
                        </li>
                     </ul>
                  </section>
                  <section id="tag_cloud-1" className="widget widget_tag_cloud">
                     <h2 className="widget-title">Tag</h2>
                     <div className="tagcloud">
                         <a href="#" className="tag-cloud-link tag-link-28 tag-link-position-1" style={{fontSize:'8pt'}} aria-label="app (1 item)">app</a>
                        <a href="#" className="tag-cloud-link tag-link-17 tag-link-position-2" style={{fontSize:'8pt'}} aria-label="Branding (1 item)">Branding</a>
                        <a href="#" className="tag-cloud-link tag-link-20 tag-link-position-3" style={{fontSize:'8pt'}} aria-label="corporat (1 item)">corporat</a>
                        <a href="#" className="tag-cloud-link tag-link-24 tag-link-position-4" style={{fontSize:'16.4pt'}} aria-label="Design (2 items)">Design</a>
                        <a href="#" className="tag-cloud-link tag-link-25 tag-link-position-5" style={{fontSize:'22pt'}} aria-label="gallery (3 items)">gallery</a>
                        <a href="#" className="tag-cloud-link tag-link-26 tag-link-position-6" style={{fontSize:'8pt'}} aria-label="video (1 item)">video</a>
                        <a href="#" className="tag-cloud-link tag-link-29 tag-link-position-7" style={{fontSize: '16.4pt'}} aria-label="web design (2 items)">web design</a>
                     </div>
                  </section>
               </aside>
            </div>
       {/* right side end */}
        </div>
    </div>
</section>
    </>
  )
}

export default News;