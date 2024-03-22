import React from 'react'

import { useEffect, useState } from "react"
import axios from "axios"

const Portfolio3 = () => {
  const [img,setImgs] = useState([])
  const [img2,setImgs2] = useState([])
  const [img3,setImgs3] = useState([])
  const [img4,setImgs4] = useState([])
  const [img5,setImgs5] = useState([])
  const [img6,setImgs6] = useState([])

  const [skill,setSkill] = useState([])
  const [skill2,setSkill2] = useState([])
  const [skill3,setSkill3] = useState([])
  const [skill4,setSkill4] = useState([])
  const [skill5,setSkill5] = useState([])

  const [errors, setError] = useState(null)

  useEffect(()=>{
    const apiUrl = 'https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae';
    axios.get(apiUrl)
    .then(response =>{
     const img1 = response.data.user.skills[0].image.url
     const img2 = response.data.user.skills[1].image.url
     const img3 = response.data.user.skills[2].image.url
     const img4 = response.data.user.skills[3].image.url
     const img5= response.data.user.skills[4].image.url
     const img6 = response.data.user.skills[5].image.url

     const skill1 = response.data.user.skills[0].name
     const skill2 = response.data.user.skills[1].name
     const skill3 = response.data.user.skills[2].name
     const skill4 = response.data.user.skills[3].name
     const skill5 = response.data.user.skills[4].name

     setSkill(skill1)
     setSkill2(skill2)
     setSkill3(skill3)
     setSkill4(skill4)
     setSkill5(skill5)


      setImgs(img1)
      setImgs2(img2)
      setImgs3(img3)
      setImgs4(img4)
      setImgs5(img5)
      setImgs6(img6)
    })
    .catch(error=>{
      setError(error)
      console.log(errors);
    })
  }, [])

  return (
            <section id="portfolio" className="pt-120 pb-90" style={{background:'#222'}}>
                <div className="container">                  
					<div className="portfolio ">
                        <div className="row align-items-center mb-50">
                            <div className="col-lg-5">
                                 <div className="section-title wow fadeInLeft  animated" data-animation="fadeInLeft" data-delay=".4s">
                                 <h5>portfolio</h5>
                                <h2>
                                 Skills
                                </h2>
                             
                            </div>
                                
                            </div>
                            <div className="col-lg-7">
                                 <div className="my-masonry text-right wow fadeInRight  animated" data-animation="fadeInRight" data-delay=".4s">
                            <div className="button-group filter-button-group ">
                 <button className="active" data-filter="*">{skill}</button>
								 <button data-filter=".financial">{skill2}</button>
								<button data-filter=".banking">{skill3}</button>	
								<button data-filter=".insurance">{skill4}</button>
								<button data-filter=".family">{skill5}</button>
							</div>
                        </div>
                            </div>
                        </div>
                      

                <div className="grid col3 row  fadeInUp  animated" data-animation="fadeInUp" data-delay=".4s">
				   			 <div className="grid-item financial">
                        	<a className="popup-image" href={img}>
                            <figure className="gallery-image">
                              <img src={img} alt="img" className="img h-56" />      
                               
                            </figure>
                          </a>
                    </div>
					<div className="grid-item financial banking">
                       <a className="popup-image" href={img2}>
                            <figure className="gallery-image">
                             <img src={img2} alt="img" className="img h-56" /> 
                            </figure>
                          </a>
                    </div>
                     <div className="grid-item insurance">
                        	<a className="popup-image" href={img3}>
                            <figure className="gallery-image">
                               <img src={img3} alt="img" className="img h-56" />      
                            </figure>
                          </a>
                    </div>
                     <div className="grid-item family">
                        	<a className="popup-image" href={img4}>
                            <figure className="gallery-image">
                                <img src={img4} alt="img" className="img h-56" />
                            </figure>
                          </a>
                    </div>
                    <div className="grid-item business">
                        <a className="popup-image" href={img5}>
                            <figure className="gallery-image">
                                <img src={img5} alt="img" className="img h-56" />   
                            </figure>
                          </a>
                    </div>
                     <div className="grid-item financial">
                        	<a className="popup-image" href={img6}>
                            <figure className="gallery-image">
                             <img src={img6} alt="img" className="img h-56" />    
                            </figure>
                          </a>
                    </div>
            </div>

        </div>
                </div>
            </section>
  )
}

export default Portfolio3