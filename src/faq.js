import meet from "./assets/meetanshi 1.png"
import can from "./assets/cantech 1.png"
import krupal from "./assets/krupal 1.png"
import land from "./assets/Landmark  1.png"
import sna from "./assets/snazzy  1.png"

const styles = {
    num:{
        fontSize:40,
        marginTop:20,
        color:"#9A9AFF"
    },
    numMobile:{
        fontSize:25,
        marginTop:20,
        color:"#9A9AFF"
    },
    numDes:{
        fontSize:12
    },
    numDesMobile:{
        fontSize:10
    },
}

function Faq({mobile}){
    return(
        <div style={{backgroundColor:"white", width:"100%",display:"flex", flexDirection:"column", fontFamily:"Poppins"}}>
            <div style={{display:"flex", flexDirection:"column", width:mobile?"80%":"50%", alignSelf:"center"}}>
                <div style={{padding:40,display:"flex", flexDirection:"column"}}>
                    <label style={{fontSize:mobile?20:40}}>Frequently Asked Questions</label>
                    <label style={{fontSize:mobile?10:null,color:"#777777"}}>Who are in extremely love with eco friendly system.</label>

                </div>
                <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
                    <div style={{display:"flex", flexDirection:"column", textAlign:"right", marginRight:mobile?5:20}}>
                        <label style={mobile?styles.numMobile:styles.num}><b>5500+</b></label>
                        <label style={{fontSize:12}}>Employees benefited</label>
                        <label style={mobile?styles.numMobile:styles.num}><b>150+</b></label>
                        <label style={{fontSize:12}}>Offices use Clarion</label>
                        <label style={mobile?styles.numMobile:styles.num}><b>100+</b></label>
                        <label style={{fontSize:12}}>Desk Exercise Library</label>
                        <label style={mobile?styles.numMobile:styles.num}><b>75+</b></label>
                        <label style={{fontSize:12}}>Meditations</label>
                    </div>
                    <div style={{display:"flex", flexDirection:"column", textAlign:"left", marginLeft:mobile?5:50}}>
                        <label style={{margin:10, fontSize:mobile?10:null}}><b>How do brain break work?</b></label>
                        <label style={{color:"#777777", fontSize:mobile?10:null,margin:10}}>“We offer an extensive array of videos meticulously curated through our
                            advanced algorithm. These videos have been thoughtfully crafted with the
                            well-being of our employees as a paramount consideration, aiming to enhance
                            their overall mental health and vitality. ”</label>
                        <label style={{margin:10, fontSize:mobile?10:null}}><b>Will employees analytics be shared to employer? </b></label>
                        <label style={{color:"#777777", fontSize:mobile?10:null,margin:10}}>“Certainly, employee analytics can be shared with the employer as per the client's
                            preferences and requirements. We prioritize transparency and collaboration, ensuring that
                            the sharing of such data aligns with the established guidelines and agreements between
                            all involved parties.”</label>
                        <label style={{margin:10, fontSize:mobile?10:null}}><b>What are the benefits of employee wellness?</b></label>
                        <label style={{color:"#777777", fontSize:mobile?10:null,margin:10}}>“Employee wellness brings about heightened productivity and reduced absenteeism
                            by fostering healthier lifestyles and stress management. Such initiatives also bolster team
                            dynamics and employee morale, aiding in talent retention and attraction while enhancing
                            the organization's public image.”</label>
                    </div>
                </div>
            </div>
            <div style={{margin:20,display:"flex", flexDirection:"column"}}>
                <label style={{fontSize:mobile?20:40}}>Prioritizing Employee Wellness across 10+ organizations</label>
                <div style={{display:"flex", flexDirection:"row", justifyContent:"center", margin:20}}>
                    <img style={{height:mobile?50:100, width:mobile?50:100}} src={can}/>
                    <img style={{height:mobile?50:100, width:mobile?100:190}} src={krupal}/>
                    <img style={{height:mobile?50:100, width:mobile?75:150}} src={land}/>
                    <img style={{height:mobile?50:100, width:mobile?50:100}} src={meet}/>
                    <img style={{height:mobile?50:100, width:mobile?50:100}} src={sna}/>
                </div>
            </div>
        </div>
    )
}

export default Faq;