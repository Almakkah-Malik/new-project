import React from 'react';
import './Footer.css'



function Footer() {
  return (
          <section className="f-wrapper">
          <div className="container padding innerwidth flexCenter f-container mt-4" >
                   
                           
                              <div className="flexLeft  f-left">
                              <h1>AMK</h1>
                              <span class="secondaryText">Our vision is to make all people <br/>
                              the best place to live for them.</span>
                                        </div>
                                    
                           
                                        <div className="flexLeft f-right ">
                                        <span class="primaryText">Information</span>
                                        <br />
                                        <span class="secondaryText ">145 New York, FL 5467, USA</span>
                                        <div class="flexCenter f-menu">
                                        <span>Property</span>
                                        <span>Services</span>
                                        <span>Product</span>
                                        <span>About Us</span>
                                        </div>
                              </div>
                              
                   
          </div>
   </section>
  )
}

export default Footer
