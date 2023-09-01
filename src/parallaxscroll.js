import React, {useEffect, useRef, useState} from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Home from './home';
import Service from './service';
import Feature from './feature';
import Price from './price';
import Faq from "./faq";
import Footer from './footer';
import logo from "./assets/logo.png";

const ParallaxScroll = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [previousIndex, setPreviousIndex] = useState(0);
    const [scrolledUp, setScrolledUp] = useState(false);
    const [maxScrollY, setMaxScrollY] = useState(0);


    const [isScrolling, setIsScrolling] = useState(false);


    const [hoverHome, setHoverHome] = useState(false);
    const [hoverSer, setHoverSer] = useState(false);
    const [hoverFea, setHoverFea] = useState(false);
    const [hoverPrice, setHoverPrice] = useState(false);
    const [hoverFaq, setHoverFaq] = useState(false);
    const [hoverPage, setHoverPage] = useState(false);

    const homeRef = useRef(null)
    const homeInView = useInView(homeRef,{amount: 'all'});

    const serviceRef = useRef(null)
    const serviceInView = useInView(serviceRef, {amount: 'all'});

    const featuresRef = useRef(null)
    const featuresInView = useInView(featuresRef, {amount: 'all'});

    const priceRef = useRef(null)
    const priceInView = useInView(priceRef, {amount: 'all'});

    const faqRef = useRef(null)
    const faqInView = useInView(faqRef, {amount: 'all'});

    const footerRef = useRef(null)
    const footerInView = useInView(footerRef, {amount: 'all'});

    const componentRefs = [homeRef, serviceRef, featuresRef, priceRef, faqRef, footerRef];

    const showIndex = () => {
        console.log(scrolledUp);
    }

    const showIsScrolling = () => {
        console.log(isScrolling);
    }
 
    const handleClickHome = () => {
        // featureRef.current?.scrollIntoView({ behavior: 'smooth' });
        setPreviousIndex(0)
        setActiveIndex(0)
    };
    const handleClickService = () => {
        // serviceRef.current?.scrollIntoView({ behavior: 'smooth' });
        setPreviousIndex(0)
        setActiveIndex(1)
    };
    const handleClickFeature = () => {
        // featureRef.current?.scrollIntoView({ behavior: 'smooth' });
        setPreviousIndex(1)
        setActiveIndex(2)
    };
    const handleClickPrice = () => {
        // priceRef.current?.scrollIntoView({ behavior: 'smooth' });
        setPreviousIndex(2)
        setActiveIndex(3)
    };
    const handleClickFaq = () => {
        // faqRef.current?.scrollIntoView({ behavior: 'smooth' });
        setPreviousIndex(3)
        setActiveIndex(4)
    };
    const handleClickFooter = () => {
        // footerRef.current?.scrollIntoView({ behavior: 'smooth' });
        setPreviousIndex(4)
        setActiveIndex(5)
    };

    useEffect(() => {
        if (activeIndex === 2){
            if (previousIndex === 3){
                window.scrollTo(0, 700);
                console.log('scrolled to bottom');

                // alert('hi');
            }else {
                window.scrollTo(0, 0);
                console.log('scrolled to top');
            }
        }else{
            window.scrollTo(0, 0);

        }
    }, [activeIndex, previousIndex]);

    useEffect(() => {
        console.log(scrolledUp);
    }, [scrolledUp]);

    useEffect(() => {
        if (activeIndex != 2) {
            setMaxScrollY(0);
            return;
        }
        const calculateMaxScrollY = () => {
          const { scrollHeight, clientHeight } = document.documentElement;
          const maxScroll = scrollHeight - clientHeight;
          setMaxScrollY(maxScroll);
        };
    
        // Calculate the maximum scroll value whenever activeIndex changes
        calculateMaxScrollY();
    
        // Attach a listener to recalculate the maximum scroll value when the window resizes
        window.addEventListener('resize', calculateMaxScrollY);
    
        // Cleanup: Remove the resize event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', calculateMaxScrollY);
        };
    }, [activeIndex]);

    

    const scrolled = (event) => {

        // console.log(window.scrollY);
        console.log(event.deltaY);

        if (!isScrolling) {
            
            if (activeIndex !== 2) {
                
                
                if (event.deltaY > 0 && activeIndex < 5 ) {
                    setIsScrolling(true);
                    setScrolledUp(true);
                    setPreviousIndex(activeIndex);
                    setActiveIndex(activeIndex + 1);
                    setTimeout(() => {
                        setIsScrolling(false);
                        // console.log('released');
                    }, 1500); // 2 second
                    console.log('scrolled up');
                } else if (event.deltaY < 0 && activeIndex > 0 ) {
                    setIsScrolling(true);
                    setScrolledUp(false);
                    setPreviousIndex(activeIndex);
                    setActiveIndex(activeIndex - 1);
                    setTimeout(() => {
                        setIsScrolling(false);
                        // console.log('released');
                    }, 1500); // 2 second
                    console.log('scrolled down');
                }

            } else if (activeIndex === 2) {

                if (window.scrollY < 10 && event.deltaY < 0) {
                    setIsScrolling(true);
                    setScrolledUp(false);
                    console.log('scrolled down');
                    setPreviousIndex(2)
                    setActiveIndex(1);
                    setTimeout(() => {
                        setIsScrolling(false);
                        // console.log('released');
                    }, 1500); // 2 second
                } else if (window.scrollY >= maxScrollY && event.deltaY > 0) {
                    setIsScrolling(true);
                    setScrolledUp(true);
                    console.log('scrolled up');
                    setPreviousIndex(2)
                    setActiveIndex(3);
                    setTimeout(() => {
                        setIsScrolling(false);
                        // console.log('released');
                    }, 1500); // 2 second
                }
            }
        }
    }

    const styles = {
        normalSticky: {
            height: '90vh' ,
            width:"100%",
            position: 'sticky',
            top: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'aqua',
        },
        priceStyle: {
            height: '90vh' ,
            width:"100%",
            position: 'sticky',
            top: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F9F9FF',
        },

        featureScroll: {
            height: '100vh' ,
            position: 'static',
            // top: 0,
            // display: 'flex',
            // justifyContent: 'center',
            // alignItems: 'center',
            marginTop: '10px',
            marginBottom: '10px',
        },

        footer: {
            height: 'fit-content' ,
            position: 'sticky',
            // bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },

        componentContainer: {
            display: 'flex',
        }
    }

    const components = [Home, Service, Feature, Price, Faq, Footer];

    // 
    return (
        <div style={{position: 'relative', height: activeIndex === 2? '150vh' : '100vh', overflow: 'hidden', backgroundColor:"white" }} onWheel={scrolled} >
             {/*<button onClick={showActive} >Click me</button>*/}
            <div style={{backgroundColor:"white", height:80, position:"sticky"}}>
                <img style={{position:"absolute",left:20}} src={logo}/>
                <div style={{position:"absolute", top:20, right:50, display:"flex", flexDirection:"row"}}>
                    <div style={{margin:10, color:hoverHome?"#9A9AFF":"black"}}
                         onMouseEnter={() => {setHoverHome(true)}}
                         onMouseLeave={() => {setHoverHome(false)}} onClick={handleClickHome}><label><b>Home</b></label></div>
                    <div style={{margin:10, color:hoverSer?"#9A9AFF":"black"}}
                         onMouseEnter={() => {setHoverSer(true)}}
                         onMouseLeave={() => {setHoverSer(false)}} onClick={handleClickService}><label><b>Service</b></label></div>
                    <div style={{margin:10, color:hoverFea?"#9A9AFF":"black"}}
                         onMouseEnter={() => {setHoverFea(true)}}
                         onMouseLeave={() => {setHoverFea(false)}} onClick={handleClickFeature}><label><b>Feature</b></label></div>
                    <div style={{margin:10, color:hoverPrice?"#9A9AFF":"black"}}
                         onMouseEnter={() => {setHoverPrice(true)}}
                         onMouseLeave={() => {setHoverPrice(false)}} onClick={handleClickPrice}><label><b>Price</b></label></div>
                    <div style={{margin:10, color:hoverFaq?"#9A9AFF":"black"}}
                         onMouseEnter={() => {setHoverFaq(true)}}
                         onMouseLeave={() => {setHoverFaq(false)}} onClick={handleClickFaq}><label><b>FAQ</b></label></div>
                    <div style={{margin:10, color:hoverPage?"#9A9AFF":"black"}}
                         onMouseEnter={() => {setHoverPage(true)}}
                         onMouseLeave={() => {setHoverPage(false)}} onClick={handleClickFooter}><label><b>About Us</b></label></div>
                </div>

                <button onClick={showIndex}>Active</button>
                <button onClick={showIsScrolling}>isScrolling</button>

            </div>

            
            <div >
                <AnimatePresence initial={false}>
                    {components.map((Component, index) => (
                    <motion.div
                        key={index}
                        // make one of them move up the other move down when we scroll up or down so itll look like the new componnet is pushing the old one out
                        animate={ 
                            index === activeIndex?
                                { opacity: 1, y: 0, transition: {
                                    duration: .5,
                                }, }
                                : index > activeIndex?
                                { opacity: 0, y: '200vh', transition: {
                                    duration: index ===2? 1 : 3,
                                }, }
                                :
                                { opacity: 0, y: '-200vh', transition: {
                                    duration: index ===2? 1 : 3,
                                }, }
                        }
                        style={{
                            position: 'absolute',
                            width: '100%',
                            zIndex: activeIndex === index ? 9999 : 0,
                            marginTop: '10px',
                            marginBottom: '10px',
                        }}
                    >
                        <Component />
                    </motion.div>
                    ))}
                </AnimatePresence>
                
            </div>
            

        </div>
    );
};

export default ParallaxScroll;