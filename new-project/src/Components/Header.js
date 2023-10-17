
import React, { useState } from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi';


const Header = () => {
  const getMenuStyles = menuOpend => {
    if(document.documentElement.clientWidth <= 800){
        return {right : !menuOpend && "-100%"}
    }
  }

  const [menuOpend , setMenuOpend] = useState(false)


  return (
   
   
   <section className="h-wrapper">
   <div className="container flexCenter padding innerWidth h-container mt-5">

            <h1>AMK</h1>
               
               <div className="flexCenter h-menu"
               style={getMenuStyles(menuOpend)}>
                    <a href="#Residences">Residences</a>
                    <a href="#Our-Value">Our Value</a>
                    <a href="#Contact-Us">Contact Us</a>
                    <a href="#Get Started">Get Started</a>
                    <button className="button">
                    <a href="">Contact</a>
                    </button>
               </div>
               <div className="menu-icon" onClick={()=>setMenuOpend((prev)=>!prev)}>
          <BiMenuAltRight size = {30}/>
         </div>
         </div>
         
   </section>
      
  )
}

export default Header
