
import Popup from 'reactjs-popup';
import useScrollSnap from "react-use-scroll-snap";
import stress from "./assets/stress.png"
import { useState,useRef } from 'react';
import med from "./assets/meditation 1.png"
import journal from "./assets/journal 1.png"
import brk from "./assets/breaks.png"
import ana from "./assets/graph 1.png"
import sch from "./assets/schedule 1.png"
import desk from "./assets/desk.png"
import up from "./assets/up.png"
import down from "./assets/down.png"
import PurchaseModal from "./purchasemodal";

function Price({mobile}){
    const [feature, setFeature] = useState(true);

    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };



    return(
        <div style={{backgroundColor:"#F9F9FF", width:"100%",display:"flex", flexDirection:"column", fontFamily:"Poppins"}}>

            <div style={{marginTop:60,display:"flex", flexDirection:"column",alignItems:"center"}}>
                <label style={{fontSize:30}}>Choose the Perfect Plan for you</label>
                <label>Clarion provides you for your specific needs</label>

                {feature?(
                    <div style={{display:"flex", flexDirection:"row", alignItems:"center", paddingTop:20}} >
                        {/*<img style={{width:200, height:400, padding:5}} src={left}/>*/}
                        {/*<img style={{width:250, height:450, padding:5}} src={mid}/>*/}
                        {/*<img style={{width:200, height:400, padding:5}} src={right}/>*/}
                        <div style={{backgroundColor:"#F9F9FF", margin:10}}>
                            <div style={{display:"flex", flexDirection:"column", padding:30, textAlign:"left",backgroundColor:"white"}}>
                                <label style={{fontSize:20}}><b>{'>10 Employees'}</b></label>
                                <label style={{color:"#777777"}}>For India based</label>
                                <label style={{color:"#777777"}}>Businesses</label>
                                <label style={{position:"absolute",alignSelf:"end", fontSize:30}}><b>₹3500</b></label>
                            </div>
                            <div style={{display:"flex", flexDirection:"column", padding:30, textAlign:"left", marginTop:5, marginBottom:5,backgroundColor:"white"}}>
                                <label style={{color:"#777777"}}>Full Access of the app and the library</label>
                                <label style={{color:"#777777"}}>{'\u2022 Personalized muscle relaxation'}</label>
                                <label style={{color:"#777777"}}>{'\u2022 Meditations and affirmations'}</label>
                                <label style={{color:"#777777"}}>{'\u2022 Fitness content'}</label>
                                <label style={{color:"#777777"}}>{'\u2022 Customized Daily Schedule'}</label>
                                <label style={{color:"#777777"}}>{'\u2022 Wellness analytics and reports'}</label>
                            </div>
                            <div style={{padding:30, alignContent:"start",backgroundColor:"white"}}>
                                {/*<button style={{alignSelf:"end", borderWidth:0, backgroundColor:"black", color:"white", height:40, width:200}}>Purchase Plan</button>*/}
                                <PurchaseModal plan="1" mobile={mobile}></PurchaseModal>
                            </div>

                        </div>
                        <div style={{backgroundColor:"#F9F9FF", margin:10}}>
                            <div style={{display:"flex", flexDirection:"column", padding:30, textAlign:"left",backgroundColor:"white"}}>
                                <label style={{fontSize:20}}><b>{'>20 Employees'}</b></label>
                                <label style={{color:"#777777"}}>For India based</label>
                                <label style={{color:"#777777"}}>Businesses</label>
                                <label style={{position:"absolute",alignSelf:"end", fontSize:30}}><b>₹5000</b></label>
                            </div>
                            <div style={{display:"flex", flexDirection:"column", padding:30, textAlign:"left", marginTop:5, marginBottom:5,backgroundColor:"white"}}>
                                <label style={{color:"#777777"}}>Full Access of the app and the library</label>
                                <label style={{color:"#777777"}}>{'\u2022 Personalized muscle relaxation'}</label>
                                <label style={{color:"#777777"}}>{'\u2022 Meditations and affirmations'}</label>
                                <label style={{color:"#777777"}}>{'\u2022 Fitness content'}</label>
                                <label style={{color:"#777777"}}>{'\u2022 Customized Daily Schedule'}</label>
                                <label style={{color:"#777777"}}>{'\u2022 Wellness analytics and reports'}</label>
                            </div>
                            <div style={{padding:30, alignContent:"start",backgroundColor:"white"}}>
                                {/*<button style={{alignSelf:"end", borderWidth:0, backgroundColor:"black", color:"white", height:40, width:200}}>Purchase Plan</button>*/}
                                <PurchaseModal plan="2" mobile={mobile}></PurchaseModal>
                            </div>

                        </div>
                        <div style={{backgroundColor:"#F9F9FF", margin:10}}>
                            <div style={{display:"flex", flexDirection:"column", padding:30, textAlign:"left",backgroundColor:"white"}}>
                                <label style={{fontSize:20}}><b>{'>35 Employees'}</b></label>
                                <label style={{color:"#777777"}}>For India based</label>
                                <label style={{color:"#777777"}}>Businesses</label>
                                <label style={{position:"absolute",alignSelf:"end", fontSize:30}}><b>₹7500</b></label>
                            </div>
                            <div style={{display:"flex", flexDirection:"column", padding:30, textAlign:"left", marginTop:5, marginBottom:5,backgroundColor:"white"}}>
                                <label style={{color:"#777777"}}>Full Access of the app and the library</label>
                                <label style={{color:"#777777"}}>{'\u2022 Personalized muscle relaxation'}</label>
                                <label style={{color:"#777777"}}>{'\u2022 Meditations and affirmations'}</label>
                                <label style={{color:"#777777"}}>{'\u2022 Fitness content'}</label>
                                <label style={{color:"#777777"}}>{'\u2022 Customized Daily Schedule'}</label>
                                <label style={{color:"#777777"}}>{'\u2022 Wellness analytics and reports'}</label>
                            </div>
                            <div style={{padding:30, alignContent:"start",backgroundColor:"white"}}>
                                {/*<button style={{alignSelf:"end", borderWidth:0, backgroundColor:"black", color:"white", height:40, width:200}}>Purchase Plan</button>*/}
                                <PurchaseModal plan="3" mobile={mobile}></PurchaseModal>
                            </div>

                        </div>
                    </div>
                ):(
                    <div style={{display:"flex", flexDirection:"row", alignItems:"center", paddingTop:20}} >
                {/*<img style={{width:200, height:400, padding:5}} src={left}/>*/}
                {/*<img style={{width:250, height:450, padding:5}} src={mid}/>*/}
                {/*<img style={{width:200, height:400, padding:5}} src={right}/>*/}
                    <div style={{backgroundColor:"#F9F9FF", margin:10}}>
                    <div style={{display:"flex", flexDirection:"column", padding:30, textAlign:"left",backgroundColor:"white"}}>
                        <label style={{fontSize:20}}><b>{'>50 Employees'}</b></label>
                        <label style={{color:"#777777"}}>For India based</label>
                        <label style={{color:"#777777"}}>Businesses</label>
                        <label style={{position:"absolute",alignSelf:"end", fontSize:30}}><b>₹10000</b></label>
                    </div>
                    <div style={{display:"flex", flexDirection:"column", padding:30, textAlign:"left", marginTop:5, marginBottom:5,backgroundColor:"white"}}>
                        <label style={{color:"#777777"}}>Full Access of the app and the library</label>
                        <label style={{color:"#777777"}}>{'\u2022 Personalized muscle relaxation'}</label>
                        <label style={{color:"#777777"}}>{'\u2022 Meditations and affirmations'}</label>
                        <label style={{color:"#777777"}}>{'\u2022 Fitness content'}</label>
                        <label style={{color:"#777777"}}>{'\u2022 Customized Daily Schedule'}</label>
                        <label style={{color:"#777777"}}>{'\u2022 Wellness analytics and reports'}</label>
                    </div>
                    <div style={{padding:30, alignContent:"start",backgroundColor:"white"}}>
                        {/*<button style={{alignSelf:"end", borderWidth:0, backgroundColor:"black", color:"white", height:40, width:200}}>Purchase Plan</button>*/}
                        <PurchaseModal plan="4" mobile={mobile}></PurchaseModal>
                    </div>

                    </div>
                    <div style={{backgroundColor:"#F9F9FF", margin:10}}>
                    <div style={{display:"flex", flexDirection:"column", padding:30, textAlign:"left",backgroundColor:"white"}}>
                        <label style={{fontSize:20}}><b>{'>75 Employees'}</b></label>
                        <label style={{color:"#777777"}}>For India based</label>
                        <label style={{color:"#777777"}}>Businesses</label>
                        <label style={{position:"absolute",alignSelf:"end", fontSize:30}}><b>₹13125</b></label>
                    </div>
                    <div style={{display:"flex", flexDirection:"column", padding:30, textAlign:"left", marginTop:5, marginBottom:5,backgroundColor:"white"}}>
                        <label style={{color:"#777777"}}>Full Access of the app and the library</label>
                        <label style={{color:"#777777"}}>{'\u2022 Personalized muscle relaxation'}</label>
                        <label style={{color:"#777777"}}>{'\u2022 Meditations and affirmations'}</label>
                        <label style={{color:"#777777"}}>{'\u2022 Fitness content'}</label>
                        <label style={{color:"#777777"}}>{'\u2022 Customized Daily Schedule'}</label>
                        <label style={{color:"#777777"}}>{'\u2022 Wellness analytics and reports'}</label>
                    </div>
                    <div style={{padding:30, alignContent:"start",backgroundColor:"white"}}>
                        {/*<button style={{alignSelf:"end", borderWidth:0, backgroundColor:"black", color:"white", height:40, width:200}}>Purchase Plan</button>*/}
                        <PurchaseModal plan="5" mobile={mobile}></PurchaseModal>
                    </div>

                    </div>
                    <div style={{backgroundColor:"#F9F9FF", margin:10}}>
                    <div style={{display:"flex", flexDirection:"column", padding:30, textAlign:"left",backgroundColor:"white"}}>
                        <label style={{fontSize:20}}><b>{'>100 Employees'}</b></label>
                        <label style={{color:"#777777"}}>For India based</label>
                        <label style={{color:"#777777"}}>Businesses</label>
                        <label style={{position:"absolute",alignSelf:"end", fontSize:30}}><b>₹15000</b></label>
                    </div>
                    <div style={{display:"flex", flexDirection:"column", padding:30, textAlign:"left", marginTop:5, marginBottom:5,backgroundColor:"white"}}>
                        <label style={{color:"#777777"}}>Full Access of the app and the library</label>
                        <label style={{color:"#777777"}}>{'\u2022 Personalized muscle relaxation'}</label>
                        <label style={{color:"#777777"}}>{'\u2022 Meditations and affirmations'}</label>
                        <label style={{color:"#777777"}}>{'\u2022 Fitness content'}</label>
                        <label style={{color:"#777777"}}>{'\u2022 Customized Daily Schedule'}</label>
                        <label style={{color:"#777777"}}>{'\u2022 Wellness analytics and reports'}</label>
                    </div>
                    <div style={{padding:30, alignContent:"start",backgroundColor:"white"}}>
                        {/*<button style={{alignSelf:"end", borderWidth:0, backgroundColor:"black", color:"white", height:40, width:200}}>Purchase Plan</button>*/}
                        <PurchaseModal plan="6" mobile={mobile}></PurchaseModal>
                    </div>

                    </div>
                    </div>
                )}
                    <div style={{height:50, width:20, backgroundColor:"red", position:"relative", right:-600, top:-200,display:"flex", flexDirection:"column",}}>
                        <button style={{height:25, borderWidth:1, backgroundColor:"white", justifyContent:"center"}} onClick={() => {setFeature(true)}}>
                            <label style={{fontSize:14}}>^</label>
                        </button>
                        <button style={{height:25, borderWidth:1, backgroundColor:"white", justifyContent:"center"}} onClick={() => {setFeature(false)}}>
                            <label style={{fontSize:8}}>V</label>
                        </button>
                    </div>

            </div>
            {/*<PurchaseModal plan="hello">*/}
            {/*</PurchaseModal>*/}
        </div>
    )
}

export default Price;