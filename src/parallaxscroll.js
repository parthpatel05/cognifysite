import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Home from './home';
import Service from './service';
import Feature from './feature';
import Price from './price';
import Footer from './footer';

const ParallaxScroll = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const componentOffsets = [-1, 299, 1299, 2350, 3100]; // Adjust these values based on your layout
    const componentSticky = [[-1, 300], [1000, 1299], [1675, 2300], [2900, 3099], []];

    const [isScrolling, setIsScrolling] = useState(false);

    // useEffect(() => {


    //   window.addEventListener('wheel', scrolled);
    //   return () => {
    //     window.removeEventListener('wheel', scrolled);
    //   };
    // }, [activeIndex]);

    useEffect(() => {
        console.log(`From use effect ${isScrolling}`);
    }, [isScrolling])


    const scrolled = (event) => {
        // console.log('wheel');

        console.log(window.scrollY);
        if (!isScrolling) {
            if (activeIndex !== 2) {
                setIsScrolling(true);
                console.log('triggered');

                if (event.deltaY > 0 && activeIndex < 4 ) {
                    setActiveIndex(activeIndex + 1);
                } else if (event.deltaY < 0 && activeIndex > 0 ) {
                    setActiveIndex(activeIndex - 1);
                }

                setTimeout(() => {
                    setIsScrolling(false);
                    console.log('released');
                }, 3000); // 2 second
            } else if (activeIndex === 2) {

                if (window.scrollY < 50 && event.deltaY < 0) {
                    setIsScrolling(true);
                    setActiveIndex(1);
                    setTimeout(() => {
                        setIsScrolling(false);
                        console.log('released');
                    }, 3000); // 2 second
                } else if (window.scrollY > 500 && event.deltaY > 0) {
                    setIsScrolling(true);
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
            height: '100vh' ,
            position: 'sticky',
            top: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // background: 'aqua',
        },

        featureScroll: {
            height: '100vh' ,
            position: 'static',
            // top: 0,
            // display: 'flex',
            // justifyContent: 'center',
            // alignItems: 'center',
            marginTop: '200px',
            marginBottom: '400px',
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

    const components = [Home, Service, Feature, Price, Footer];
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
        <div onWheel={scrolled}>
            {/* <button onClick={showActive} >Click me</button> */}
            {components.map((Component, index) => (
                <div>
                    {activeIndex === index && <motion.div
                        key={index}
                        style={index === 2? styles.featureScroll : index === 4? styles.footer : styles.normalSticky}
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