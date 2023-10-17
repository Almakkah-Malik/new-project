import React from 'react'
import './Hero.css'
import CountUp from "react-countup"


function Hero() {
  return (
    
          <section className="hero-wrapper">
                    <div className="container flexCenter padding innerWidth hero-container">
                              <div className="flexColCenter hero-left">
                                      <div className="flexLeft hero-title">
                                       <div className="orange-circle"/>
                                        <h1>Discover <br /> Most Suitable <br /> Property</h1>
                                      </div>
                                      <div className="flexColStart hero-des">
                                        <span  className="secondaryText"> Find the variety of properties that suit you very easilty
                                       </span>
                                       <span  className="secondaryText">
                                         Forget all difficulties in finding a residence for you
                                       </span>
                                      </div>

                                      <div className="flexCenter search-bar">
                                      <i class="fa fa-street-view"></i>
                                      <input type="text" />
                                      <button className="button">
                                        Search
                                      </button>
                                      </div>
                               <div className="flexCenter stats">
                                <div className="flexColCenter stat">
                                      <span>
                                        <CountUp Center={8000} end={8500} duration={4}/>
                                        <span>+</span>
                                      </span>
                                      <span className="secondaryText">Premium Products</span>
                                </div>
                                <div className="flexColCenter stat">
                                      <span>
                                        <CountUp Center={1950} end={2000} duration={4}/>
                                        <span>+</span>
                                      </span>
                                      <span className="secondaryText">Happy Customers</span>
                                </div>
                                   
                                <div className="flexColCenter stat">
                                      <span>
                                        <CountUp end={28}/>
                                        <span>+</span>
                                      </span>
                                      <span className="secondaryText">Awards Winings</span>
                                </div>


                            </div>     
                             </div>

                              <div className="flexCenter hero-right">
                                        <div className="img-container">
                                         <img src="./hero-1.jpg" alt="" />
                                        </div>
                              </div>
                    </div>
          </section>
  
  )
}

export default Hero
