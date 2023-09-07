import Popup from "reactjs-popup";
import {useState} from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, push } from "firebase/database";
import { app } from "./firebase";

function PurchaseModal({plan, mobile, app}){

    const [first, setfirst] = useState('');
    const [last, setlast] = useState('');
    const [orgName, setorgName] = useState('');
    const [orgEmail, setorgEmail] = useState('');
    const [position, setposition] = useState('');
    const [number, setnumber] = useState('');
    const [text, setText] = useState('');

    function btn() {
        // Create a reference to the Firebase database
        const database = getDatabase(app);
      
        // Create a reference to the database node where you want to store the data
        const databaseRef = ref(database, "purchaseRequests");
      
        // Create an object with the data you want to send
        const requestData = {
          plan: plan,
          firstName: first,
          lastName: last,
          organizationName: orgName,
          organizationEmail: orgEmail,
          position: position,
          phoneNumber: number,
          descriptionOfInterest: text,
        };
      
        // Push the data to the database
        push(databaseRef, requestData)
          .then(() => {
            console.log("Data sent successfully");
          })
          .catch((error) => {
            console.error("Error sending data: ", error);
          });
      }

    const handlefirst = (event) => {
        setfirst(event.target.value);
    };
    const handlelast = (event) => {
        setlast(event.target.value);
    };
    const handleorgName = (event) => {
        setorgName(event.target.value);
    };
    const handleorgEmail = (event) => {
        setorgEmail(event.target.value);
    };
    const handleposition = (event) => {
        setposition(event.target.value);
    };
    const handlenumber = (event) => {
        setnumber(event.target.value);
    };
    const handletext = (event) => {
        setText(event.target.value);
    };

    return(
        // <div >
        //     <label>Modal</label>
        //     <button className="modal-close-button" onClick={onClose}>Close</button>
        // </div>

        <div>
            <Popup trigger=
                       {<button style={{borderWidth:0, backgroundColor:"black", color:"white", height:40, width:200}}>Purchase Plan</button>}
                   modal nested>
                {
                    close => (
                        <div className='modal' style={{width:"100%" , zIndex:900}}>
                            <div style={{display:"flex", flexDirection:"column", width:"100%", alignItems:"center", fontFamily:"Poppins"}}>
                                <div style={{borderWidth:10, backgroundColor:"white",display:"flex", flexDirection:"column", width:"50%", padding:20}}>
                                    <label style={{fontSize:30}}><b>Contact Information</b></label>
                                    <label style={{color:"#777777", fontSize:10}}>Kindly provide the requested information to facilitate effective communication with our sales team. Your cooperation in completing this information will enable us to respond promptly and efficiently to your needs. Thank you for your attention to this matter.</label>
                                    <div style={{marginTop:20}}>
                                        <input style={{paddingLeft:10, borderWidth:0, backgroundColor:"black", color:"white", height:40, width:200}}
                                        placeholder="First Name"
                                               onChange={handlefirst}/>
                                        <input style={{paddingLeft:10, marginLeft:mobile?null:20, marginTop:mobile?10:null,borderWidth:0, backgroundColor:"black", color:"white", height:40, width:200}}
                                               placeholder="Last Name"
                                               onChange={handlelast}/>
                                    </div>
                                    <div style={{marginTop:20}}>
                                        <input style={{paddingLeft:10, borderWidth:0, backgroundColor:"black", color:"white", height:40, width:240}}
                                               placeholder="Organization Name"
                                               onChange={handleorgName}/>
                                        <input style={{paddingLeft:10, marginLeft:mobile?null:20, marginTop:mobile?10:null,borderWidth:0, backgroundColor:"black", color:"white", height:40, width:240}}
                                               placeholder="Organization Email"
                                               onChange={handleorgEmail}/>
                                    </div>
                                    <div style={{marginTop:20}}>
                                        <input style={{paddingLeft:10, borderWidth:0, backgroundColor:"black", color:"white", height:40, width:200}}
                                               placeholder="Position"
                                               onChange={handleposition}/>
                                        <input style={{paddingLeft:10, marginLeft:mobile?null:20, marginTop:mobile?10:null, borderWidth:0, backgroundColor:"black", color:"white", height:40, width:200}}
                                               placeholder="Phone Number"
                                               onChange={handlenumber}/>
                                    </div>
                                    <div style={{marginTop:20}}>
                                        <textarea style={{paddingLeft:10, borderWidth:0, backgroundColor:"black", color:"white", height:100, width:"80%"}}
                                               placeholder="Description of Interest"
                                                  onChange={handletext}/>
                                    </div>
                                    <button onClick={() => {close(); btn()}} style={{marginTop:20, borderWidth:0, backgroundColor:"black", color:"white", height:40, width:200, alignSelf:"center"}}>
                                        Send Request</button>
                                </div>
                                {/*<label>Contact Infotmation</label>*/}
                                {/*<label>Kindly provide the requested information to facilitate effective communication with our sales team. Your cooperation in completing this information will enable us to respond promptly and efficiently to your needs. Thank you for your attention to this matter.</label>*/}

                                {/*<div>*/}
                                {/*    <button onClick=*/}
                                {/*                {() => close()}>*/}
                                {/*        Close modal*/}
                                {/*    </button>*/}
                                {/*</div>*/}

                            </div>
                        </div>
                    )
                }
            </Popup>
        </div>
    )
}

export default PurchaseModal;