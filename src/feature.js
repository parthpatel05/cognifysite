import stress from "./assets/stress.png"
import { useState } from 'react';
import med from "./assets/meditation 1.png"
import journal from "./assets/journal 1.png"
import brk from "./assets/breaks.png"
import ana from "./assets/graph 1.png"
import sch from "./assets/schedule 1.png"
import desk from "./assets/desk.png"
import up from "./assets/up.png"
import down from "./assets/down.png"


function Feature(){
    const [hoverMed, setHoverMed] = useState(false);
    const [hoverJour, setHoverJour] = useState(false);
    const [hoverBreak, setHoverBreak] = useState(false);
    const [hoverAna, setHoverAna] = useState(false);
    const [hoverSch, setHoverSch] = useState(false);
    const [hoverDesk, setHoverDesk] = useState(false);
    const [feature, setFeature] = useState(2);
    const [left, setLeft] = useState(require("./assets/1.png"));
    const [mid, setMid] = useState(require("./assets/2.png"));
    const [right, setRight] = useState(require("./assets/3.png"));

    function nextFeature() {
        if (feature === 1){
            // console.log("in 1")
            setFeature(2)
            setLeft(require("./assets/1.png"))
            setMid(require("./assets/2.png"))
            setRight(require("./assets/3.png"))
        }else if (feature === 2){
            // console.log("in 2")
            setFeature(3)
            setLeft(require("./assets/2.png"))
            setMid(require("./assets/3.png"))
            setRight(require("./assets/4.png"))
        }else if (feature === 3){
            // console.log("in 3")
            setFeature(4)
            setLeft(require("./assets/3.png"))
            setMid(require("./assets/4.png"))
            setRight(require("./assets/5.png"))
        }else if (feature === 4){
            // console.log("in 4")
            setFeature(5)
            setLeft(require("./assets/4.png"))
            setMid(require("./assets/5.png"))
            setRight(require("./assets/6.png"))
        }else if (feature === 5){
            // console.log("in 5")
            setFeature(6)
            setLeft(require("./assets/5.png"))
            setMid(require("./assets/6.png"))
            setRight(require("./assets/7.png"))
        }else if (feature === 6){
            // console.log("in 6")
            setFeature(7)
            setLeft(require("./assets/6.png"))
            setMid(require("./assets/7.png"))
            setRight(require("./assets/1.png"))
        }else if (feature === 7){
            // console.log("in 7")
            setFeature(1)
            setLeft(require("./assets/7.png"))
            setMid(require("./assets/1.png"))
            setRight(require("./assets/2.png"))
        }
        console.log(feature)
    }

    function prevFeature() {
        if (feature === 1){
            // console.log("in 1")
            setFeature(7)
            setLeft(require("./assets/6.png"))
            setMid(require("./assets/7.png"))
            setRight(require("./assets/1.png"))
        }else if (feature === 2){
            // console.log("in 2")
            setFeature(1)
            setLeft(require("./assets/7.png"))
            setMid(require("./assets/1.png"))
            setRight(require("./assets/2.png"))
        }else if (feature === 3){
            // console.log("in 3")
            setFeature(2)
            setLeft(require("./assets/1.png"))
            setMid(require("./assets/2.png"))
            setRight(require("./assets/3.png"))
        }else if (feature === 4){
            // console.log("in 4")
            setFeature(3)
            setLeft(require("./assets/2.png"))
            setMid(require("./assets/3.png"))
            setRight(require("./assets/4.png"))
        }else if (feature === 5){
            // console.log("in 5")
            setFeature(4)
            setLeft(require("./assets/3.png"))
            setMid(require("./assets/4.png"))
            setRight(require("./assets/5.png"))
        }else if (feature === 6){
            // console.log("in 6")
            setFeature(5)
            setLeft(require("./assets/4.png"))
            setMid(require("./assets/5.png"))
            setRight(require("./assets/6.png"))
        }else if (feature === 7){
            setFeature(6)
            setLeft(require("./assets/5.png"))
            setMid(require("./assets/6.png"))
            setRight(require("./assets/7.png"))
        }
        console.log(feature)
    }
    function medButton(){
        setFeature(3)
        setLeft(require("./assets/2.png"))
        setMid(require("./assets/3.png"))
        setRight(require("./assets/4.png"))
    }
    function jourButton(){
        setFeature(4)
        setLeft(require("./assets/3.png"))
        setMid(require("./assets/4.png"))
        setRight(require("./assets/5.png"))
    }
    function brkButton(){
        setFeature(6)
        setLeft(require("./assets/5.png"))
        setMid(require("./assets/6.png"))
        setRight(require("./assets/7.png"))
    }
    function anaButton(){
        setFeature(1)
        setLeft(require("./assets/7.png"))
        setMid(require("./assets/1.png"))
        setRight(require("./assets/2.png"))
    }
    function schButton(){
        setFeature(2)
        setLeft(require("./assets/1.png"))
        setMid(require("./assets/2.png"))
        setRight(require("./assets/3.png"))
    }
    function exButton(){
        setFeature(5)
        setLeft(require("./assets/4.png"))
        setMid(require("./assets/5.png"))
        setRight(require("./assets/6.png"))
    }

    return(
        <div style={{ backgroundColor:"white", width:"100%",display:"flex", flexDirection:"column"}}>
            <div style={{display:"flex", flexDirection:"column", padding:50}}>
                <label style={{fontSize:50}}><b>Some Features that Made us Unique</b></label>
            </div>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", margin:10, height:150,width:380, backgroundColor:hoverMed?"#9A9AFF":"#F9F9FF",paddingTop:5}}
                     onMouseEnter={() => {setHoverMed(true)}}
                     onMouseLeave={() => {setHoverMed(false)}}
                     onClick={() => {medButton()}}
                >
                    <img  style={{height:74, width:64, padding:10}} src={med}/>
                    <label style={{padding:10}}><b>Personalized Meditation</b></label>
                </div>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", margin:10, height:150,width:380, backgroundColor:hoverJour?"#9A9AFF":"#F9F9FF",paddingTop:5}}
                     onMouseEnter={() => {setHoverJour(true)}}
                     onMouseLeave={() => {setHoverJour(false)}}
                     onClick={() => {jourButton()}}
                >
                    <img  style={{height:74, width:64, padding:10}} src={journal}/>
                    <label style={{padding:10}}><b>Journaling</b></label>
                </div>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", margin:10, height:150,width:380, backgroundColor:hoverBreak?"#9A9AFF":"#F9F9FF",paddingTop:5}}
                     onMouseEnter={() => {setHoverBreak(true)}}
                     onMouseLeave={() => {setHoverBreak(false)}}
                     onClick={() => {brkButton()}}
                >
                    <img  style={{height:74, width:64, padding:10}} src={brk}/>
                    <label style={{padding:10}}><b>Brain Breaks</b></label>
                </div>
            </div>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", margin:10, height:150,width:380, backgroundColor:hoverAna?"#9A9AFF":"#F9F9FF",paddingTop:5}}
                     onMouseEnter={() => {setHoverAna(true)}}
                     onMouseLeave={() => {setHoverAna(false)}}
                    onClick={() => {anaButton()}}
                >
                    <img  style={{height:74, width:64, padding:10}} src={ana}/>
                    <label style={{padding:10}}><b>Analytics</b></label>
                </div>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", margin:10, height:150,width:380, backgroundColor:hoverSch?"#9A9AFF":"#F9F9FF",paddingTop:5}}
                     onMouseEnter={() => {setHoverSch(true)}}
                     onMouseLeave={() => {setHoverSch(false)}}
                    onClick={() => {schButton()}}
                >
                    <img  style={{height:74, width:64, padding:10}} src={sch}/>
                    <label style={{padding:10}}><b>Scheduling</b></label>
                </div>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", margin:10, height:150,width:380, backgroundColor:hoverDesk?"#9A9AFF":"#F9F9FF",paddingTop:5}}
                     onMouseEnter={() => {setHoverDesk(true)}}
                     onMouseLeave={() => {setHoverDesk(false)}}
                     onClick={() => {exButton()}}
                >
                    <img  style={{height:74, width:64, padding:10}} src={desk}/>
                    <label style={{padding:10}}><b>Desk Exercises</b></label>
                </div>
            </div>
            <div style={{marginTop:60,display:"flex", flexDirection:"column",alignItems:"center"}}>
                <label style={{fontSize:30}}>Our Features Showcased</label>
                <label>Who are in extremely love with eco friendly system.</label>

                <div style={{marginBottom:50,display:"flex", flexDirection:"row"}}>
                    <div style={{display:"flex", flexDirection:"row", alignItems:"center", paddingTop:20}}>
                            <img style={{width:200, height:400, padding:5}} src={left}/>
                            <img style={{width:250, height:450, padding:5}} src={mid}/>
                            <img style={{width:200, height:400, padding:5}} src={right}/>
                        </div>
                    <div style={{height:50, width:20, backgroundColor:"red", position:"relative", right:-100, top:200,display:"flex", flexDirection:"column",}}>
                        <button style={{height:25, borderWidth:1, backgroundColor:"white", justifyContent:"center"}} onClick={() => {nextFeature()}}>
                            <label style={{fontSize:14}}>^</label>
                        </button>
                        <button style={{height:25, borderWidth:1, backgroundColor:"white", justifyContent:"center"}} onClick={() => {prevFeature()}}>
                            <label style={{fontSize:8}}>V</label>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Feature;