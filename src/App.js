import logo from "./assets/logo.png";
import './App.css';
import Home from "./home";
import Service from "./service";
import Feature from "./feature";
import Price from "./price";
import Footer from "./footer";
import Faq from "./faq";
import ParallaxScroll from "./parallaxscroll";
import {useState, useRef, useEffect} from "react";
import PriceMobile from "./priceMobile";

import { Routes, Route } from 'react-router-dom';
import Privacypolicy from "./privacypolicy";
function App() {
    // const isMobile = window.matchMedia("(max-width:400px)").matches;
    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;
    const [hoverHome, setHoverHome] = useState(false);
    const [hoverSer, setHoverSer] = useState(false);
    const [hoverFea, setHoverFea] = useState(false);
    const [hoverPrice, setHoverPrice] = useState(false);
    const [hoverFaq, setHoverFaq] = useState(false);
    const [hoverPage, setHoverPage] = useState(false);

    const homeRef = useRef(null);
    const serviceRef = useRef(null);
    const featureRef = useRef(null);
    const priceRef = useRef(null);
    const faqRef = useRef(null);
    const footerRef = useRef(null);

    const handleClickHome = () => {
        homeRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const handleClickService = () => {
        serviceRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const handleClickFeature = () => {
        featureRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const handleClickPrice = () => {
        priceRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const handleClickFaq = () => {
        faqRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const handleClickFooter = () => {
        footerRef.current?.scrollIntoView({ behavior: 'smooth' });
    };


  return (
      <div className="App">
          <Routes>
              <Route path="/" element={<div className="App" style={{display:"flex", flexDirection:"column"}}>
                  {isMobile?(
                      // <label>Hello</label>
                      <div >
                          <div style={{backgroundColor:"white",position:"absolute", display:"flex", flexDirection:"row", width:"100%"}}>
                              <img style={{height:"100%", width:"10%", marginLeft:10}} src={logo}/>
                              <div style={{display:"flex", flexDirection:"row", marginLeft:30}}>
                                  <div style={{margin:10, color:hoverHome?"#9A9AFF":"black"}}
                                       onMouseEnter={() => {setHoverHome(true)}}
                                       onMouseLeave={() => {setHoverHome(false)}} onClick={handleClickHome}><label style={{fontSize:10}}><b>Home</b></label></div>
                                  <div style={{margin:10, color:hoverSer?"#9A9AFF":"black"}}
                                       onMouseEnter={() => {setHoverSer(true)}}
                                       onMouseLeave={() => {setHoverSer(false)}} onClick={handleClickService}><label style={{fontSize:10}}><b>Service</b></label></div>
                                  <div style={{margin:10, color:hoverFea?"#9A9AFF":"black"}}
                                       onMouseEnter={() => {setHoverFea(true)}}
                                       onMouseLeave={() => {setHoverFea(false)}} onClick={handleClickFeature}><label style={{fontSize:10}}><b>Feature</b></label></div>
                                  <div style={{margin:10, color:hoverPrice?"#9A9AFF":"black"}}
                                       onMouseEnter={() => {setHoverPrice(true)}}
                                       onMouseLeave={() => {setHoverPrice(false)}} onClick={handleClickPrice}><label style={{fontSize:10}}><b>Price</b></label></div>
                                  <div style={{margin:10, color:hoverFaq?"#9A9AFF":"black"}}
                                       onMouseEnter={() => {setHoverFaq(true)}}
                                       onMouseLeave={() => {setHoverFaq(false)}} onClick={handleClickFaq}><label style={{fontSize:10}}><b>FAQ</b></label></div>
                                  <div style={{margin:10, color:hoverPage?"#9A9AFF":"black"}}
                                       onMouseEnter={() => {setHoverPage(true)}}
                                       onMouseLeave={() => {setHoverPage(false)}} onClick={handleClickFooter}><label style={{fontSize:10}}><b>About Us</b></label></div>
                              </div>

                          </div>

                          <label ref={homeRef}></label>
                          <Home mobile={isMobile}></Home>
                          <label ref={serviceRef}></label>
                          <Service mobile={isMobile}></Service>
                          <label ref={featureRef}></label>
                          <Feature mobile={isMobile}></Feature>
                          <label ref={priceRef}></label>
                          {/*<Price mobile={isMobile}></Price>*/}
                          <PriceMobile mobile={isMobile}></PriceMobile>
                          <label ref={faqRef}></label>
                          <Faq mobile={isMobile}></Faq>
                          <label ref={footerRef}></label>
                          <Footer mobile={isMobile}></Footer>
                      </div>
                  ):(
                      // <label>Bye</label>
                      <ParallaxScroll></ParallaxScroll>

                  )}
              </div>} />

              <Route path="/policy" element={<Privacypolicy />} />
          </Routes>
      </div>
  );
}

export default App;
