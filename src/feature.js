import stress from "./assets/stress.png"
import {useEffect, useState} from 'react';
import med from "./assets/meditation 1.png"
import journal from "./assets/journal 1.png"
import brk from "./assets/breaks.png"
import ana from "./assets/graph 1.png"
import sch from "./assets/schedule 1.png"
import desk from "./assets/desk.png"
import up from "./assets/up.png"
import down from "./assets/down.png"
import { v4 as uuidv4 } from "uuid";
import Carousel from "./Carousel";


function Feature(){
    const [hoverMed, setHoverMed] = useState(false);
    const [hoverJour, setHoverJour] = useState(false);
    const [hoverBreak, setHoverBreak] = useState(false);
    const [hoverAna, setHoverAna] = useState(false);
    const [hoverSch, setHoverSch] = useState(false);
    const [hoverDesk, setHoverDesk] = useState(false);
    const [goToSlide, setGoToSlide] = useState(null);

    const slides = [
        {
            key: uuidv4(),
            content: <img style={{width:200, height:400}} src={require("./assets/1.png")} alt="1" />
        },
        {
            key: uuidv4(),
            content: <img style={{width:200, height:400}} src={require("./assets/2.png")} alt="2" />
        },
        {
            key: uuidv4(),
            content: <img style={{width:200, height:400}} src={require("./assets/3.png")} alt="3" />
        },
        {
            key: uuidv4(),
            content: <img style={{width:200, height:400}} src={require("./assets/4.png")} alt="4" />
        },
        {
            key: uuidv4(),
            content: <img style={{width:200, height:400}} src={require("./assets/5.png")} alt="5" />
        },
        {
            key: uuidv4(),
            content: <img style={{width:200, height:400}} src={require("./assets/6.png")} alt="6" />
        },
        {
            key: uuidv4(),
            content: <img style={{width:200, height:400}} src={require("./assets/7.png")} alt="7" />
        }
    ];

    function medButton(){
        setGoToSlide(2)
    }
    function jourButton(){
        setGoToSlide(3)
    }
    function brkButton(){
        setGoToSlide(5)
    }
    function anaButton(){
        setGoToSlide(0)
    }
    function schButton(){
        setGoToSlide(1)
    }
    function exButton(){
        setGoToSlide(4)
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

                <Carousel
                    cards={slides}
                    height="500px"
                    width="30%"
                    margin="0 auto"
                    offset={2}
                    showArrows={false}
                    slide={goToSlide}
                />


            </div>
        </div>
    )
}

export default Feature;