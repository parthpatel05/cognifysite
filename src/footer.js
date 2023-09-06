
import apple from "./assets/apple.png"
import andriod from "./assets/andriod.png"
import facebook from "./assets/facebook.png"
import x from "./assets/x.png"
import ball from "./assets/ball.png"
import be from "./assets/be.png"
import { Link } from 'react-router-dom';

function Footer({mobile}) {
    return (
        <div className="home" style={{width:"100%", fontFamily:"Poppins"}}>
            <div style={{padding:50, backgroundColor:"#9A9AFF", display:"flex", flexDirection:"column"}}>
                <label style={{fontSize:mobile?20:50, color:"white"}}><b>Download This App Today!</b></label>
                <label style={{color:"white", margin:30,fontSize:mobile?10:null}}>With Clarion's innovative solutions, businesses can effectively address and resolve the substantial challenges of stress, burnout, and dwindling employee engagement,
                    fostering a healthier and more productive work environment in the rapidly evolving corporate landscape.</label>
                <div style={{display:"flex", flexDirection:"row", width:"100%", justifyContent:"center"}}>
                    <img style={{padding:15,height:mobile?40:null, width:mobile?100:null}} src={apple}/>
                    <img style={{padding:15,height:mobile?40:null, width:mobile?100:null}} src={andriod}/>
                </div>
            </div>
            <div style={{backgroundColor:"#222222", display:"flex", flexDirection:"column", padding:50}}>
                <div style={{display:"flex", flexDirection:mobile?"column":"row",color:"white", justifyContent:"center"}}>
                    <div style={{display:"flex", flexDirection:"column", textAlign:"left"}}>
                        <label style={{marginBottom:20}}><b>Information</b></label>
                        <Link style={{color:"#FFFFFF", marginTop:10, textDecoration: 'none'}} to="/policy">Privacy Policy</Link>
                        <a style={{color:"#FFFFFF", marginTop:10}}>Contact Us</a>
                        <a style={{color:"#FFFFFF", marginTop:10}}>Technical Support</a>
                        <a style={{color:"#FFFFFF", marginTop:10}}>Support</a>
                    </div>
                    <div style={{display:"flex", flexDirection:"column", textAlign:"left", marginRight:mobile?null:100, marginLeft:mobile?null:100, marginTop:mobile?50:null, marginBottom:mobile?50:null}}>
                        <label style={{marginBottom:20}}><b>Newsletter</b></label>
                        <label style={{color:"#FFFFFF", marginTop:10}}>You can trust us. we only send promo offers, not a single spam.</label>
                        <div style={{display:"flex", flexDirection:"row", marginTop:10}}>
                            <input style={{flex:1, marginRight:30, height:30, borderRadius:15, paddingLeft:10}} placeholder={'Enter Email'} name="email"/>
                            <button style={{flex:.3, borderRadius:15, borderWidth:0, backgroundColor:"#9A9AFF", color:"white"}}>Subscribe</button>
                        </div>
                    </div>
                    <div style={{display:"flex", flexDirection:"column", textAlign:"left"}}>
                        <label style={{marginBottom:20}}><b>Our Team</b></label>
                        <div style={{display:"flex", flexDirection:"row"}}>
                            <div style={{display:"flex", flexDirection:"column", marginRight:10}}>
                                <a href="https://linkedin.com/in/om-clarion" style={{color:"#FFFFFF", marginTop:10}}>Om Mistry</a>
                                <a href="https://linkedin.com/in/ayush-saggar-96b1ab215" style={{color:"#FFFFFF", marginTop:10}}>Ayush Sagar</a>
                                <a href="https://linkedin.com/in/khushin-patel-857a481a9" style={{color:"#FFFFFF", marginTop:10}}>Khushin Patel</a>
                                <a href="https://linkedin.com/in/parth-patel-0907" style={{color:"#FFFFFF", marginTop:10}}>Parth Patel</a>
                            </div>
                            <div style={{display:"flex", flexDirection:"column"}}>
                                <a href="https://linkedin.com/in/pushtivora" style={{color:"#FFFFFF", marginTop:10}}>Prushti Vora</a>
                                <a href="https://linkedin.com/in/jay-patel-527bb1216" style={{color:"#FFFFFF", marginTop:10}}>Jay Patel</a>
                                <a href="https://linkedin.com/in/drashya-sadiwala-5542a520b" style={{color:"#FFFFFF", marginTop:10}}>Drashya Sadiwala</a>
                                <a href="https://linkedin.com/in/kruti-thakkar-720771223" style={{color:"#FFFFFF", marginTop:10}}>Kruti Thakkar</a>
                            </div>

                        </div>
                    </div>
                </div>
                <div style={{display:"flex", flexDirection:mobile?"column":"row", justifyContent:"center", marginTop:100}}>
                    <label style={{color:"white", marginRight:mobile?null:520, marginBottom:mobile?10:null}}>Copyright ©2023 All rights reserved | Clarion</label>
                    <div style={{alignSelf:"end"}}>
                        <img src={facebook}/>
                        <img src={x}/>
                        <img src={ball}/>
                        <img src={be}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
