import { useState } from 'react';
import logo from "./assets/logo.png"
import phone from "./assets/phone.png"
import "./App.css"
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
            <div style={mobile?styles.mainDivMobile:styles.mainDiv}>
                {/*{mobile?(<label>mobile</label>):(<label>Laptop</label>)}*/}
                <div style={{display:"flex", flexDirection:"column",  width:mobile?"100%":"75%", justifyContent:"center", textAlign: 'left', alignItems: 'center'}}>
                    <div style={{display: 'flex', flexDirection:"column", width:mobile?"70%":"50%"}}>
                        <label style={mobile?styles.headerLabelMobile:styles.headerLabel}>
                            <b>Wellness</b>
                        </label>
                        <label style={mobile?styles.headerLabelMobile:styles.headerLabel}>
                            <b>Reimagined: Clarion</b>
                        </label>
                        <label style={mobile?styles.desLabelMobile:styles.desLabel}>In today's fast-paced corporate environment, stress, burnout, and lack of employee engagement have become significant challenges for businesses.</label>
                        <button style={mobile?styles.learnMobiles:styles.learn}
                                onMouseEnter={() => {setLearn(true)}}
                                onMouseLeave={() => {setLearn(false)}}><b>Learn More</b></button>
                    </div>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", width: "50%", flexDirection: "row" }}>
          <img
            className={mobile ? 'hide-phone' : ''} // Conditionally apply the "hide-phone" class
            style={{ height: mobile ? 240 : null, width: mobile ? 300 : null }}
            src={phone}
          />
        </div> 

            </div>
        </div>
    );
}

export default Home;
