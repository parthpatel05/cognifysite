import logo from "./assets/logo.png";
import './App.css';
import Home from "./home";
import Service from "./service";
import Feature from "./feature";
import Price from "./price";
import Footer from "./footer";
import Faq from "./faq";
import ParallaxScroll from "./parallaxscroll";
import {useState, useRef} from "react";

function App() {
    const [hoverHome, setHoverHome] = useState(false);
    const [hoverSer, setHoverSer] = useState(false);
    const [hoverFea, setHoverFea] = useState(false);
    const [hoverPrice, setHoverPrice] = useState(false);
    const [hoverFaq, setHoverFaq] = useState(false);
    const [hoverPage, setHoverPage] = useState(false);

    const serviceRef = useRef(null);
    const featureRef = useRef(null);
    const priceRef = useRef(null);
    const faqRef = useRef(null);
    const footerRef = useRef(null);

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
    <div className="App" style={{display:"flex", flexDirection:"column"}}>
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
      {/*  <div style={{backgroundColor:"white", height:80}}>*/}
      {/*      <img style={{position:"absolute",left:20}} src={logo}/>*/}
      {/*      <div style={{position:"absolute", top:20, right:50, display:"flex", flexDirection:"row"}}>*/}
      {/*          <div style={{margin:10, color:hoverHome?"#9A9AFF":"black"}}*/}
      {/*               onMouseEnter={() => {setHoverHome(true)}}*/}
      {/*               onMouseLeave={() => {setHoverHome(false)}}><label><b>Home</b></label></div>*/}
      {/*          <div style={{margin:10, color:hoverSer?"#9A9AFF":"black"}}*/}
      {/*               onMouseEnter={() => {setHoverSer(true)}}*/}
      {/*               onMouseLeave={() => {setHoverSer(false)}} onClick={handleClickService}><label><b>Service</b></label></div>*/}
      {/*          <div style={{margin:10, color:hoverFea?"#9A9AFF":"black"}}*/}
      {/*               onMouseEnter={() => {setHoverFea(true)}}*/}
      {/*               onMouseLeave={() => {setHoverFea(false)}} onClick={handleClickFeature}><label><b>Feature</b></label></div>*/}
      {/*          <div style={{margin:10, color:hoverPrice?"#9A9AFF":"black"}}*/}
      {/*               onMouseEnter={() => {setHoverPrice(true)}}*/}
      {/*               onMouseLeave={() => {setHoverPrice(false)}} onClick={handleClickPrice}><label><b>Price</b></label></div>*/}
      {/*          <div style={{margin:10, color:hoverFaq?"#9A9AFF":"black"}}*/}
      {/*               onMouseEnter={() => {setHoverFaq(true)}}*/}
      {/*               onMouseLeave={() => {setHoverFaq(false)}} onClick={handleClickFaq}><label><b>FAQ</b></label></div>*/}
      {/*          <div style={{margin:10, color:hoverPage?"#9A9AFF":"black"}}*/}
      {/*               onMouseEnter={() => {setHoverPage(true)}}*/}
      {/*               onMouseLeave={() => {setHoverPage(false)}} onClick={handleClickFooter}><label><b>About Us</b></label></div>*/}
      {/*      </div>*/}

      {/*  </div>*/}

        {/*<Home></Home>*/}
        {/*<label ref={serviceRef}></label>*/}
        {/*<Service></Service>*/}
        {/*<label ref={featureRef}></label>*/}
        {/*<Feature></Feature>*/}
        {/*<label ref={priceRef}></label>*/}
        {/*<Price></Price>*/}
        {/*<label ref={faqRef}></label>*/}
        {/*<Faq></Faq>*/}
        {/*<label ref={footerRef}></label>*/}
        {/*<Footer ></Footer>*/}
        <ParallaxScroll></ParallaxScroll>
    </div>
  );
}

export default App;
