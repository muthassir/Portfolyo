import Header from "./components/Header"
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Portfolio from "./pages/Portfolio"
import News from "./pages/News"
import Newsletter from "./components/Newsletter"
import Footer from "./components/Footer"
import Contact from "./pages/Contact"
import '../src/js/main.js'
import '../src/js/parallax-scroll.js'
import '../src/js/ajax-form.js'
import '../src/js/element-in-view.js'
import '../src/js/jquery.counterup.min - Copy.js'
import '../src/js/jquery.owl-filter.js'
import '../src/js/one-page-nav-min.js'
import '../src/js/particles.js'
import '../src/js/typed.js'
import '../src/js/vendor/jquery-3.6.0.min.js'
import '../src/js/vendor/modernizr-3.5.0.min.js'

import '../src/css/style.css'
import '../src/css/meanmenu.css'
import '../src/css/default.css'
import '../src/css/slick.css'
import '../src/css/responsive.css'
import '../src/css/owl.carousel.css'
import '../src/css/magnific-popup.css'
import '../src/css/bootsrtap.min.css'
import '../src/css/animate.min.css'
import '../src/css/dripicons.css'
import '../src/css/fontawesome-all.min.css'
import { useEffect, useState } from "react"
import axios from "axios"







function App() {
  const [data, setData] = useState({})
  const [errors, setError] = useState(null)
  useEffect(()=>{
    const apiUrl = 'https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae';
    axios.get(apiUrl)
    .then(response =>{
     const {title, name,subTitle, phoneNumber,address,avatar,some_total,exp_year,quote,description} = response.data.user.about
      setData({title,name,subTitle,phoneNumber,address,avatar,some_total,exp_year,quote,description})
      // console.log(avatar);
      // console.log(response.data.user.about)
    })
    .catch(error=>{
      setError(error)
      console.log(errors);
    })
  }, [])

  return (
    
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home name={data.name}
                                    subTitle={data.subTitle}
                                       />}/>
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/skills" element={<Portfolio />} />
      <Route path="/projects" element={<News />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Newsletter />
    <Footer phoneNumber={data.phoneNumber}
                             address={data.address}
                        
    />
    </BrowserRouter>
  )
}

export default App
