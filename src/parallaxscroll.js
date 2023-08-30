import React, {useEffect, useRef, useState} from 'react';
import { motion } from 'framer-motion';
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

    const componentOffsets = [-1, 299, 1299, 2350, 3100]; // Adjust these values based on your layout
    const componentSticky = [[-1, 300], [1000, 1299], [1675, 2300], [2900, 3099], []];

    const [isScrolling, setIsScrolling] = useState(false);


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

    // useEffect(() => {


    //   window.addEventListener('wheel', scrolled);
    //   return () => {
    //     window.removeEventListener('wheel', scrolled);
    //   };
    // }, [activeIndex]);

    useEffect(() => {
        console.log(`From use effect ${isScrolling}`);
    }, [isScrolling]);

    useEffect(() => {
        console.log(activeIndex);
        console.log(previousIndex);
        if (activeIndex === 2){
            if (previousIndex === 3){
                window.scrollTo(0, 700);
                // alert('hi');
            }else {
                window.scrollTo(0, 0);
            }
        }else{
            window.scrollTo(0, 0);

        }
    }, [activeIndex, previousIndex]);



    // console.log(window.scrollY);

    const scrolled = (event) => {
        // console.log('wheel');


        if (!isScrolling) {
            if (activeIndex !== 2) {
                setIsScrolling(true);
                console.log('triggered');

                if (event.deltaY > 0 && activeIndex < 5 ) {
                    setPreviousIndex(activeIndex)
                    setActiveIndex(activeIndex + 1);
                } else if (event.deltaY < 0 && activeIndex > 0 ) {
                    setPreviousIndex(activeIndex)
                    setActiveIndex(activeIndex - 1);
                }

                setTimeout(() => {
                    setIsScrolling(false);
                    console.log('released');
                }, 3000); // 2 second
            } else if (activeIndex === 2) {

                if (window.scrollY < 10 && event.deltaY < 0) {
                    setIsScrolling(true);
                    setPreviousIndex(activeIndex)
                    setActiveIndex(1);
                    setTimeout(() => {
                        setIsScrolling(false);
                        console.log('released');
                    }, 3000); // 2 second
                } else if (window.scrollY > 350 && event.deltaY > 0) {
                    setIsScrolling(true);
                    setPreviousIndex(activeIndex)
                    setActiveIndex(3);
                    setTimeout(() => {
                        setIsScrolling(false);
                        console.log('released');
                    }, 3000); // 2 second
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
    const ActiveComponent = components[activeIndex];

    const cardVariants = {
        offscreen: {
            opacity: 0,
            // y: '100vh',
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "just",
                duration: 2,
            }
        }
    };

    const showActive = () => {
        console.log('====================================');
        console.log(activeIndex);
        console.log('====================================');
    }

    return (
        <div onWheel={scrolled} >
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

            </div>
            {components.map((Component, index) => (
                <div>
                    {activeIndex === index && <motion.div
                        key={index}
                        style={index === 2? styles.featureScroll : index === 5? styles.footer : index === 3? styles.priceStyle : styles.normalSticky}
                        animate={{ opacity: index === activeIndex ? 1 : 0 }}
                        initial="offscreen"
                        whileInView="onscreen"
                        // transition={{ duration: 0.5 }}
                    >
                        <motion.div variants={cardVariants}>
                            <Component />
                        </motion.div>

                    </motion.div>}
                </div>

            ))}

        </div>
    );
};

export default ParallaxScroll;