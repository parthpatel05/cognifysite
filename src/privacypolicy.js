import meet from "./assets/meetanshi 1.png"
import can from "./assets/cantech 1.png"
import krupal from "./assets/krupal 1.png"
import land from "./assets/Landmark  1.png"
import sna from "./assets/snazzy  1.png"
import logo from "./assets/logo.png";
import { useNavigate } from 'react-router-dom';

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

function PrivacyPolicy({mobile}){
    const navigate = useNavigate();

    function handleClick(event) {

        navigate('/');
    }

    return(
        <div style={{backgroundColor:"white", width:"100%",display:"flex", flexDirection:"column", fontFamily:"Poppins"}}>

            <img style={{height:85, width:90, marginLeft:20}} src={logo} onClick={handleClick}/>
            <label style={{color:"#9A9AFF", fontSize:20}}><b>Privacy Policy</b></label>
            <div style={{display:"flex", flexDirection:"column", textAlign:'left', paddingLeft:"20%", paddingRight:"20%"}}>
                <label style={{color:"#9A9AFF"}}>Privacy Policy for Clarion Mental Wellness App</label>
                <label style={{color:"#9A9AFF"}}>Effective Date: [Date]</label>
                <label style={{color:"#9A9AFF"}}>Thank you for using Clarion, the mental wellness app developed by [Your Company Name]. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you use our app. By accessing or using Clarion, you agree to the terms of this Privacy Policy.</label>
                <label style={{color:"#9A9AFF"}}>Information We Collect:</label>
                <label style={{color:"#9A9AFF"}}>We may collect certain personal information from you, including but not limited to your name, email address, and company affiliation. Additionally, the app may gather data related to your usage patterns, interactions, and preferences to improve your experience.</label>
                <label style={{color:"#9A9AFF"}}>How We Use Your Information:</label>
                <label style={{color:"#9A9AFF"}}>We use the collected information to provide and enhance our services, personalize your experience, send updates, and respond to your inquiries. Your data helps us tailor the app to better suit your mental wellness needs.</label>
                <label style={{color:"#9A9AFF"}}>Sharing of Your Information:</label>
                <label style={{color:"#9A9AFF"}}>We do not share your personal information with third parties except as described in this Privacy Policy. In some cases, we may share aggregated or de-identified data for research, analytics, and business purposes.</label>
                <label style={{color:"#9A9AFF"}}>Data Security:</label>
                <label style={{color:"#9A9AFF"}}>We take security seriously and implement reasonable measures to protect your data from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</label>
                <label style={{color:"#9A9AFF"}}>Your Choices:</label>
                <label style={{color:"#9A9AFF"}}>You can review, update, or delete your personal information by contacting us at [contact email]. You may also opt out of receiving promotional emails by following the instructions provided in the emails.</label>
                <label style={{color:"#9A9AFF"}}>Children's Privacy:</label>
                <label style={{color:"#9A9AFF"}}>Clarion is not intended for users under the age of 18. We do not knowingly collect personal information from individuals under 18. If you believe we may have collected information from a minor, please contact us immediately.</label>
                <label style={{color:"#9A9AFF"}}>Changes to this Privacy Policy:</label>
                <label style={{color:"#9A9AFF"}}>We may update our Privacy Policy from time to time to reflect changes in our practices. The revised policy will be posted on this page, and the date of the latest revision will be indicated at the top.</label>
                <label style={{color:"#9A9AFF"}}>Contact Us:</label>
                <label style={{color:"#9A9AFF"}}>If you have any questions or concerns regarding this Privacy Policy or our data practices, please contact us at [contact email].</label>
                <label style={{color:"#9A9AFF"}}>By using Clarion, you consent to the practices described in this Privacy Policy.</label>
                <label style={{color:"#9A9AFF"}}>[Your Company Name]</label>
                <label style={{color:"#9A9AFF"}}>[Address]</label>
                <label style={{color:"#9A9AFF"}}>[City, State, Zip Code]</label>
                <label style={{color:"#9A9AFF"}}>[Contact Email]</label>
                <label style={{color:"#9A9AFF"}}>[Phone Number]</label>

            </div>
        </div>
    )
}

export default PrivacyPolicy;