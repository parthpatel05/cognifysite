import stress from "./assets/stress.png"
import prod from "./assets/prod.png"
import burn from "./assets/burn.png"


function Service(){
    return(
        <div style={{backgroundColor:"white", width:"100%",display:"flex", flexDirection:"column", fontFamily:"Poppins"}}>
            <div style={{display:"flex", flexDirection:"column", padding:50}}>
                <label style={{fontSize:50}}><b>Wellness in Corporate Environments</b></label>
                <label style={{paddingLeft:100, paddingRight:100}}>With Clarion's innovative solutions, businesses can effectively address and resolve the substantial challenges of stress, burnout, and dwindling employee engagement,
                    fostering a healthier and more productive work environment in the rapidly evolving corporate landscape.</label>
            </div>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
                <div style={{height:300, width:200,display:"flex", flexDirection:"column", alignItems:"flex-start", margin:50, borderRadius:30,border: '10px solid #9A9AFF', padding:5}}>
                    <img  style={{height:74, width:64, alignSelf:"end"}} src={stress}/>
                    <label style={{fontSize:50, color:"#9A9AFF"}}><b>89%</b></label>
                    <label style={{textAlign:"left"}}>89% of Indian employees suffer from stress at work</label>
                </div>
                <div style={{height:300, width:200,display:"flex", flexDirection:"column", alignItems:"flex-start", margin:50, borderRadius:30,border: '10px solid #9A9AFF', padding:5}}>
                    <img  style={{height:74, width:64, alignSelf:"end"}} src={stress}/>
                    <label style={{fontSize:50, color:"#9A9AFF"}}><b>$36.4B</b></label>
                    <label style={{textAlign:"left"}}>Per year in employee healthcare costs due to chronic illness or risk factors leading to productivity losses.</label>
                </div>
                <div style={{height:300, width:200,display:"flex", flexDirection:"column", alignItems:"flex-start", margin:50, borderRadius:30,border: '10px solid #9A9AFF', padding:5}}>
                    <img  style={{height:74, width:64, alignSelf:"end"}} src={stress}/>
                    <label style={{fontSize:50, color:"#9A9AFF"}}><b>15%</b></label>
                    <label style={{textAlign:"left"}}>As the pandemic puts focus on employee health, only 72 million or 15% of India’s overall workforce is covered with corporate health and wellness programs</label>
                </div>
                {/*<div style={{display:"flex", flexDirection:"column", alignItems:"center", margin:50}}>*/}
                {/*    <img  style={{height:74, width:64, padding:10}} src={prod}/>*/}
                {/*    <label style={{padding:10}}><b>Productivity</b></label>*/}
                {/*    <label>High levels of stress can lead to decreased focus, concentration, and overall productivity. Employees may find it challenging to meet deadlines and complete tasks efficiently, which can affect the company's bottom line.</label>*/}
                {/*</div>*/}
                {/*<div style={{display:"flex", flexDirection:"column", alignItems:"center", margin:50}}>*/}
                {/*    <img  style={{height:74, width:64, padding:10}} src={burn}/>*/}
                {/*    <label style={{padding:10}}><b>Burnout</b></label>*/}
                {/*    <label>Prolonged stress in the workplace can lead to burnout, a state of emotional, mental, and physical exhaustion. Burnout affects motivation and enthusiasm, making it difficult for employees to remain engaged and committed to their work.</label>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default Service;