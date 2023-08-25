import meet from "./assets/meetanshi 1.png"
import can from "./assets/cantech 1.png"
import krupal from "./assets/krupal 1.png"
import land from "./assets/Landmark  1.png"
import sna from "./assets/snazzy  1.png"

function Faq(){
    return(
        <div style={{backgroundColor:"white", width:"100%",display:"flex", flexDirection:"column", fontFamily:"Poppins"}}>
            <div style={{display:"flex", flexDirection:"column", width:"50%", alignSelf:"center"}}>
                <div style={{padding:50,display:"flex", flexDirection:"column"}}>
                    <label style={{fontSize:40}}>Frequently Asked Questions</label>
                    <label style={{color:"#777777"}}>Who are in extremely love with eco friendly system.</label>

                </div>
                <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
                    <div style={{display:"flex", flexDirection:"column", textAlign:"right", marginRight:20}}>
                        <label style={{fontSize:40, marginTop:20, color:"#9A9AFF"}}><b>5500+</b></label>
                        <label style={{fontSize:12}}>Employees benefited</label>
                        <label style={{fontSize:40, marginTop:20, color:"#9A9AFF"}}><b>150+</b></label>
                        <label style={{fontSize:12}}>Offices use Clarion</label>
                        <label style={{fontSize:40, marginTop:20, color:"#9A9AFF"}}><b>100+</b></label>
                        <label style={{fontSize:12}}>Desk Exercise Library</label>
                        <label style={{fontSize:40, marginTop:20, color:"#9A9AFF"}}><b>75+</b></label>
                        <label style={{fontSize:12}}>Meditations</label>
                    </div>
                    <div style={{display:"flex", flexDirection:"column", textAlign:"left", marginLeft:50}}>
                        <label style={{margin:10}}><b>How do brain break work?</b></label>
                        <label style={{color:"#777777",margin:10}}>“We offer an extensive array of videos meticulously curated through our
                            advanced algorithm. These videos have been thoughtfully crafted with the
                            well-being of our employees as a paramount consideration, aiming to enhance
                            their overall mental health and vitality. ”</label>
                        <label style={{margin:10}}><b>Will employees analytics be shared to employer? </b></label>
                        <label style={{color:"#777777",margin:10}}>“Certainly, employee analytics can be shared with the employer as per the client's
                            preferences and requirements. We prioritize transparency and collaboration, ensuring that
                            the sharing of such data aligns with the established guidelines and agreements between
                            all involved parties.”</label>
                        <label style={{margin:10}}><b>What are the benefits of employee wellness?</b></label>
                        <label style={{color:"#777777",margin:10}}>“Employee wellness brings about heightened productivity and reduced absenteeism
                            by fostering healthier lifestyles and stress management. Such initiatives also bolster team
                            dynamics and employee morale, aiding in talent retention and attraction while enhancing
                            the organization's public image.”</label>
                    </div>
                </div>
            </div>
            <div style={{margin:30,display:"flex", flexDirection:"column"}}>
                <label style={{fontSize:40}}>Prioritizing Employee Wellness across 10+ organizations</label>
                <div style={{display:"flex", flexDirection:"row", justifyContent:"center", margin:20}}>
                    <img style={{height:100, width:100}} src={can}/>
                    <img style={{height:100, width:190}} src={krupal}/>
                    <img style={{height:100, width:150}} src={land}/>
                    <img style={{height:100, width:100}} src={meet}/>
                    <img style={{height:100, width:100}} src={sna}/>
                </div>
            </div>
        </div>
    )
}

export default Faq;