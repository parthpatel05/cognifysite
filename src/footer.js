
import apple from "./assets/apple.png"
import andriod from "./assets/andriod.png"
import facebook from "./assets/facebook.png"
import x from "./assets/x.png"
import ball from "./assets/ball.png"
import be from "./assets/be.png"

function Footer({ref}) {
    return (
        <div ref={ref} className="home" style={{width:"100%", fontFamily:"Poppins"}}>
            <div style={{padding:50, backgroundColor:"#9A9AFF", display:"flex", flexDirection:"column"}}>
                <label style={{fontSize:50, color:"white"}}><b>Download This App Today!</b></label>
                <label style={{color:"white", margin:30}}>With Clarion's innovative solutions, businesses can effectively address and resolve the substantial challenges of stress, burnout, and dwindling employee engagement,
                    fostering a healthier and more productive work environment in the rapidly evolving corporate landscape.</label>
                <div style={{display:"flex", flexDirection:"row", width:"100%", justifyContent:"center"}}>
                    <img style={{padding:15}} src={apple}/>
                    <img style={{padding:15}} src={andriod}/>
                </div>
            </div>
            <div style={{backgroundColor:"#222222", display:"flex", flexDirection:"column", padding:80}}>
                <div style={{display:"flex", flexDirection:"row",color:"white", justifyContent:"center"}}>
                    <div style={{display:"flex", flexDirection:"column", textAlign:"left"}}>
                        <label style={{marginBottom:20}}><b>Information</b></label>
                        <a style={{color:"#FFFFFF", marginTop:10}}>Privacy Policy</a>
                        <a style={{color:"#FFFFFF", marginTop:10}}>Contact Us</a>
                        <a style={{color:"#FFFFFF", marginTop:10}}>Technical Support</a>
                        <a style={{color:"#FFFFFF", marginTop:10}}>Support</a>
                    </div>
                    <div style={{display:"flex", flexDirection:"column", textAlign:"left", marginRight:100, marginLeft:100}}>
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
                                <a style={{color:"#FFFFFF", marginTop:10}}>Om Mistry</a>
                                <a style={{color:"#FFFFFF", marginTop:10}}>Ayush Sagar</a>
                                <a style={{color:"#FFFFFF", marginTop:10}}>Khushin Patel</a>
                                <a style={{color:"#FFFFFF", marginTop:10}}>Parth Patel</a>
                            </div>
                            <div style={{display:"flex", flexDirection:"column"}}>
                                <a style={{color:"#FFFFFF", marginTop:10}}>Prushti Vara</a>
                                <a style={{color:"#FFFFFF", marginTop:10}}>Jay Patel</a>
                                <a style={{color:"#FFFFFF", marginTop:10}}>Drashya Sadiwala</a>
                                <a style={{color:"#FFFFFF", marginTop:10}}>Kruti Thakkar</a>
                            </div>

                        </div>
                    </div>
                </div>
                <div style={{display:"flex", flexDirection:"row", justifyContent:"center", marginTop:100}}>
                    <label style={{color:"white", marginRight:520}}>Copyright ©2023 All rights reserved | Clarion</label>
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
