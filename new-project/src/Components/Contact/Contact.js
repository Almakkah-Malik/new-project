import React from 'react'
import './Contact.css';
import { MdCall } from 'react-icons/md';
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi'


function Contact() {
  return (
  <section className="c-wrapper" id='Contact-Us"'>
          <div className="container padding innerwidth flexCenter c-container mt-5">
         
                        
                     
                    <div className="flexColStart c-left">
                     
                      <span className="orangText" >Our Contacts</span> <br /> <span className="primaryText">Easy To Contact Us</span> <br />
                      <span className="secondaryText flexLeft">We always ready to help by providing  the best services for you. <br />
                          We believe a good place to live can make your life better.
                    </span>

                    <div className="flexColStart  contactMode">
                      <div className="flexStart row">

                    {/* first mode*/}
                      <div className="flexColCenter mode">
                              <div className="flexStart">
                                        <div className="flexCenter icon-1">
                                        <MdCall size ={25}/>
                                        </div>
                                        <div className="flexColStart detail">
                                          <span>Call</span> 
                                          <span className="flexLeft">021 123 145 14</span>
                               </div>
                              </div>
                    <div className="flexCenter button">Call Now</div>
                    </div>
                    {/* second mode*/}
                    <div className="flexColCenter mode">
                              <div className="flexStart">
                                        <div className="flexCenter icon-1">
                                        <BsFillChatDotsFill size ={25}/>
                                        </div>
                                        <div className="flexColStart detail">
                                          <span>Chat</span> 
                                          <span className="flexLeft">021 123 145 14</span>
                               </div>
                              </div>
                    <div className="flexCenter button">Chat Now</div>
                    </div>
                     </div>  {/* row*/}
{/* second row*/}
<div className="flexStart row">

{/* third mode*/}
  <div className="flexColCenter mode">
          <div className="flexStart">
                    <div className="flexCenter icon-1">
                    <BsFillChatDotsFill size ={25}/>
                    </div>
                    <div className="flexColStart detail">
                      <span>Video Call</span> 
                      <span className="flexLeft">021 123 145 14</span>
           </div>
          </div>
<div className="flexCenter button">Video Call Now</div>
</div>
{/* four mode*/}
<div className="flexColCenter mode">
          <div className="flexStart">
                    <div className="flexCenter icon-1">
                    <BsFillChatDotsFill size ={25}/>
                    </div>
                    <div className="flexColStart detail">
                      <span>Message</span> 
                      <span className="flexLeft">021 123 145 14</span>
           </div>
          </div>
<div className="flexCenter button">Mssage Now</div>
</div>
 </div>  {/* row*/}

                    </div>
                    </div>
                    

                   
                    <div className="c-right">
                          <div className="img-container">
                          <img src="./hero (7).jpg" alt="" />
                     </div>
                    </div>
                   
                  
  </div>
  </section>
  )
}

export default Contact
