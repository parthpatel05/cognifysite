
import { useState,useRef } from 'react';
import PurchaseModal from "./purchasemodal";
import { v4 as uuidv4 } from "uuid";
import Carousel from "./Carousel";

function PriceMobile({mobile}){
    const [feature, setFeature] = useState(true);

    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const slides = [
        {
            key: uuidv4(),
            content: <div style={{backgroundColor:"#F9F9FF", margin:10}}>
                <div style={{display:"flex", flexDirection:"column", padding:30, textAlign:"left",backgroundColor:"white"}}>
                    <label style={{fontSize:17}}><b>{'>10 Employees'}</b></label>
                    <label style={{color:"#777777"}}>For India based</label>
                    <label style={{color:"#777777"}}>Businesses</label>
                    <label style={{position:"absolute",alignSelf:"end", fontSize:23}}><b>₹3500</b></label>
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
        },
        {
            key: uuidv4(),
            content: <div style={{backgroundColor:"#F9F9FF", margin:10}}>
                <div style={{display:"flex", flexDirection:"column", padding:30, textAlign:"left",backgroundColor:"white"}}>
                    <label style={{fontSize:17}}><b>{'>20 Employees'}</b></label>
                    <label style={{color:"#777777"}}>For India based</label>
                    <label style={{color:"#777777"}}>Businesses</label>
                    <label style={{position:"absolute",alignSelf:"end", fontSize:23}}><b>₹5000</b></label>
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
        },
        {
            key: uuidv4(),
            content: <div style={{backgroundColor:"#F9F9FF", margin:10}}>
                <div style={{display:"flex", flexDirection:"column", padding:30, textAlign:"left",backgroundColor:"white"}}>
                    <label style={{fontSize:17}}><b>{'>35 Employees'}</b></label>
                    <label style={{color:"#777777"}}>For India based</label>
                    <label style={{color:"#777777"}}>Businesses</label>
                    <label style={{position:"absolute",alignSelf:"end", fontSize:23}}><b>₹7500</b></label>
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
        },
        {
            key: uuidv4(),
            content: <div style={{backgroundColor:"#F9F9FF", margin:10}}>
                <div style={{display:"flex", flexDirection:"column", padding:30, textAlign:"left",backgroundColor:"white"}}>
                    <label style={{fontSize:17}}><b>{'>50 Employees'}</b></label>
                    <label style={{color:"#777777"}}>For India based</label>
                    <label style={{color:"#777777"}}>Businesses</label>
                    <label style={{position:"absolute",alignSelf:"end", fontSize:23}}><b>₹10000</b></label>
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
        },
        {
            key: uuidv4(),
            content: <div style={{backgroundColor:"#F9F9FF", margin:10}}>
                <div style={{display:"flex", flexDirection:"column", padding:30, textAlign:"left",backgroundColor:"white"}}>
                    <label style={{fontSize:17}}><b>{'>75 Employees'}</b></label>
                    <label style={{color:"#777777"}}>For India based</label>
                    <label style={{color:"#777777"}}>Businesses</label>
                    <label style={{position:"absolute",alignSelf:"end", fontSize:23}}><b>₹13125</b></label>
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
        },
        {
            key: uuidv4(),
            content: <div style={{backgroundColor:"#F9F9FF", margin:10}}>
                <div style={{display:"flex", flexDirection:"column", padding:30, textAlign:"left",backgroundColor:"white"}}>
                    <label style={{fontSize:17}}><b>{'>100 Employees'}</b></label>
                    <label style={{color:"#777777"}}>For India based</label>
                    <label style={{color:"#777777"}}>Businesses</label>
                    <label style={{position:"absolute",alignSelf:"end", fontSize:23}}><b>₹15000</b></label>
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
        }
    ];


    return(
        <div style={{backgroundColor:"#F9F9FF", width:"100%",display:"flex", flexDirection:"column", fontFamily:"Poppins"}}>

            <div style={{marginTop:60,display:"flex", flexDirection:"column",alignItems:"center"}}>
                <label style={{fontSize:30}}>Choose the Perfect Plan for you</label>
                <label>Clarion provides you for your specific needs</label>

                <Carousel
                    cards={slides}
                    height="500px"
                    width="30%"
                    margin="0 auto"
                    offset={2}
                    showArrows={false}
                />
                {/*<div style={{height:50, width:20, backgroundColor:"red", position:"relative", right:-600, top:-200,display:"flex", flexDirection:"column",}}>*/}
                {/*    <button style={{height:25, borderWidth:1, backgroundColor:"white", justifyContent:"center"}} onClick={() => {setFeature(true)}}>*/}
                {/*        <label style={{fontSize:14}}>^</label>*/}
                {/*    </button>*/}
                {/*    <button style={{height:25, borderWidth:1, backgroundColor:"white", justifyContent:"center"}} onClick={() => {setFeature(false)}}>*/}
                {/*        <label style={{fontSize:8}}>V</label>*/}
                {/*    </button>*/}
                {/*</div>*/}

            </div>
            {/*<PurchaseModal plan="hello">*/}
            {/*</PurchaseModal>*/}
        </div>
    )
}

export default PriceMobile;