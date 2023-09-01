import { useState } from 'react';
import logo from "./assets/logo.png"
import phone from "./assets/phone.png"

function Home({mobile}) {
    const [hoverHome, setHoverHome] = useState(false);
    const [hoverSer, setHoverSer] = useState(false);
    const [hoverFea, setHoverFea] = useState(false);
    const [hoverPrice, setHoverPrice] = useState(false);
    const [hoverFaq, setHoverFaq] = useState(false);
    const [hoverPage, setHoverPage] = useState(false);
    const [hoverLearn, setLearn] = useState(false);

    const styles = {
        mainDiv: {
            width:"100%",
            backgroundColor:"#9A9AFF",
            paddingTop:20,
            paddingBottom:50,
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center"
        },
        mainDivMobile:{
            width:"100%",
            backgroundColor:"#9A9AFF",
            paddingTop:80,
            paddingBottom:50,
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center"
        },
        headerLabel:{
            color:"white",
            fontSize:50
        },
        headerLabelMobile:{
            color:"white",
            fontSize:20

        },
        desLabel:{
            color:"white",
            paddingTop:20,
            paddingBottom:20
        },
        desLabelMobile:{
            color:"white",
            paddingTop:20,
            paddingBottom:20,
            fontSize:10

        },
        learn:{
            backgroundColor:hoverLearn?"#9A9AFF":"white",
            borderRadius:15,
            width:150,
            height:35,
            borderWidth:0

        },
        learnMobiles:{
            backgroundColor:hoverLearn?"#9A9AFF":"white",
            borderRadius:15,
            width:50,
            height:15,
            borderWidth:0,
            fontSize:5

        },
        img:{

        },
        imgMobile:{

        }

    };

    return (
        <div className="home" style={{width:"100%", fontFamily:"Poppins "}}>
            {/*<div style={{backgroundColor:"white", height:80}}>*/}
            {/*    <img style={{position:"absolute",left:20}} src={logo}/>*/}
            {/*    <div style={{position:"absolute", top:20, right:50, display:"flex", flexDirection:"row"}}>*/}
            {/*        <div style={{margin:10, color:hoverHome?"lightblue":"black"}}*/}
            {/*             onMouseEnter={() => {setHoverHome(true)}}*/}
            {/*             onMouseLeave={() => {setHoverHome(false)}}><label><b>Home</b></label></div>*/}
            {/*        <div style={{margin:10, color:hoverSer?"lightblue":"black"}}*/}
            {/*             onMouseEnter={() => {setHoverSer(true)}}*/}
            {/*             onMouseLeave={() => {setHoverSer(false)}}><label><b>Service</b></label></div>*/}
            {/*        <div style={{margin:10, color:hoverFea?"lightblue":"black"}}*/}
            {/*             onMouseEnter={() => {setHoverFea(true)}}*/}
            {/*             onMouseLeave={() => {setHoverFea(false)}}><label><b>Feature</b></label></div>*/}
            {/*        <div style={{margin:10, color:hoverPrice?"lightblue":"black"}}*/}
            {/*             onMouseEnter={() => {setHoverPrice(true)}}*/}
            {/*             onMouseLeave={() => {setHoverPrice(false)}}><label><b>Price</b></label></div>*/}
            {/*        <div style={{margin:10, color:hoverFaq?"lightblue":"black"}}*/}
            {/*             onMouseEnter={() => {setHoverFaq(true)}}*/}
            {/*             onMouseLeave={() => {setHoverFaq(false)}}><label><b>FAQ</b></label></div>*/}
            {/*        <div style={{margin:10, color:hoverPage?"lightblue":"black"}}*/}
            {/*             onMouseEnter={() => {setHoverPage(true)}}*/}
            {/*             onMouseLeave={() => {setHoverPage(false)}}><label><b>Pages</b></label></div>*/}
            {/*    </div>*/}

            {/*</div>*/}
            {/*<div style={{width:"100%", backgroundColor:"#9A9AFF", height:800, display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>*/}
            {/*    <div style={{display:"flex", flexDirection:"column", alignItems:"flex-start", width:'100%', textAlign:"left"}}>*/}
            {/*        <label style={{color:"white", fontSize:50}}>*/}
            {/*            <b>Wellness</b>*/}
            {/*        </label>*/}
            {/*        <label style={{color:"white", fontSize:50}}>*/}
            {/*            <b>Reimagined: Clairon</b>*/}
            {/*        </label>*/}
            {/*        <label style={{color:"white", paddingTop:20, paddingBottom:20}}>In today's fast-paced corporate environment, stress, burnout, and lack of employee engagement have become significant challenges for businesses.*/}
            {/*        </label>*/}
            {/*        <button style={{backgroundColor:hoverLearn?"#9A9AFF":"white", borderRadius:15, width:150, height:35, borderWidth:0}}*/}
            {/*                onMouseEnter={() => {setLearn(true)}}*/}
            {/*                onMouseLeave={() => {setLearn(false)}}><b>Learn More</b></button>*/}
            {/*    </div>*/}
            {/*    <img src={phone}/>*/}
            {/*</div>*/}


            {/*, height:800*/}
            <div style={mobile?styles.mainDivMobile:styles.mainDiv}>
                {/*{mobile?(<label>mobile</label>):(<label>Laptop</label>)}*/}
                <div style={{display:"flex", flexDirection:"column",  width:mobile?"100%":"75%", justifyContent:"center", textAlign: 'left', alignItems: 'center'}}>
                    <div style={{display: 'flex', flexDirection:"column", width:mobile?"70%":"50%"}}>
                        <label style={mobile?styles.headerLabelMobile:styles.headerLabel}>
                            <b>Wellness</b>
                        </label>
                        <label style={mobile?styles.headerLabelMobile:styles.headerLabel}>
                            <b>Reimagined: Clairon</b>
                        </label>
                        <label style={mobile?styles.desLabelMobile:styles.desLabel}>In today's fast-paced corporate environment, stress, burnout, and lack of employee engagement have become significant challenges for businesses.</label>
                    </div>

                    <div>
                        <button style={mobile?styles.learnMobiles:styles.learn}
                                onMouseEnter={() => {setLearn(true)}}
                                onMouseLeave={() => {setLearn(false)}}><b>Learn More</b></button>
                    </div>

                </div>
                <div style={{display:"flex", alignItems:"flex-start", width:"50%", flexDirection:"row"}}>
                    <img style={{height:mobile?240:null, width:mobile?300:null}} src={phone}/>
                </div>

            </div>

            {/*<label style={{}}>Hello</label>*/}
        </div>
    );
}

export default Home;
