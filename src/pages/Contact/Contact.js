import React from 'react';

import "./Contact.css"
import * as Ai from "react-icons/ai"
import * as Fa from "react-icons/fa"
import * as Im from "react-icons/im"



function Contact() {
  
    return (
    
         <div id="Contact" className= "contactBackgroundImage">


        <div className="heading">
          
          <h1  align= "center" variant="h2"  gutterBottom>
          Get In Touch
        </h1>
           
         
        </div>

  
        <div className="contact-info">
       
         <p >
        <Ai.AiTwotoneMail className="icons"/>
         
        <span className="info-heading">Email:</span> info@oliverbc.co.uk
        </p>
        <br/>
         <p>
         <Ai.AiFillMobile className="icons"/>
         <span className="info-heading">Mobile:</span> 079 443 343 34
         </p>
         <br/>
        <p>
         <Fa.FaPhoneSquareAlt />
         <span className="info-heading">Landline:</span> 020 890 600 90
         </p>

        
         <br/>
         <div>
         
         <Im.ImLocation className="icons"/>
         <p>
            
           <span className="info-heading">Office:</span> Cavendish House
            <br/>
            369 Burnt Oak Broadway
            <br/>
            Edgware
            <br/>
            HA8 5AW
         
         
         </p>
         
         </div>


        </div>
       
        </div>

          
      
     
   
    
    )
}

export default Contact



 