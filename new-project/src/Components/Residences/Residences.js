import React from 'react'
import { Swiper, SwiperSlide, useSwiper} from 'swiper/react';
 import  'swiper/css' ;
import './Residences.css';
import Data from '../Data/Slider.json' ;
import { sliderSettings } from '../Data/Common';





function Residences() {
  return (
    <section className="r-wrapper" id='Residences'>
          <div className="container innerwidth padding r-container mt-5">
                   <div className="flexColStart r-head">
                       <span className="orangText">Best Choice</span>
                       <span className="primaryText"> Popular Residencies</span>
                   </div>

                 <Swiper {...sliderSettings}>
                  <SliderButtons/>
                    {Data.map((card, i)=> (
                                 <SwiperSlide key={i}>
                                        <div className="flexColStart r-card">
                                          <img src={card.image} alt="" />
                                          <span className="secondaryText r-price">
                                                  <span style={{color : "orange"}}>$</span>
                                                  <span>{card.price}</span>
                                          </span>
                                          <span className="primaryText-2">{card.name}</span>
                                          <span className="flexLeft secondaryText">{card.detials}</span>
                                        </div>
                                 </SwiperSlide>       
                              ))}
                 </Swiper>
          </div>
    </section>
  )
}

export default Residences


const SliderButtons = ()=> {
  const Swiper = useSwiper();
  return (
    <div className='flexCenter r-buttons'>
     <button onClick={()=> Swiper.slidePrev()}>&lt;</button>
     <button  onClick={()=> Swiper.slideNext()}>&gt;</button>
    </div>
  )
}


