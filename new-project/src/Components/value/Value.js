
import './Value.css';
import {MdOutlineArrowDropDown} from "react-icons/md";
import{
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,

  

} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css'; 
import data from '../Data/Adion';




function Value() {
  return (
 
    <section className="v-wrapper" id='Our-Value'>
      <div className="container flexColStart padding innerWidth v-container mt-5">
      

         
        <div className="v-left flexStart">
        <div className="img-container">
           <img src="./hero-2.jpg" alt="" />
            </div>
        </div>
      

        <div className="flexLeft v-right">
                <span className="orangText">Our Value</span> <br />
                <span className="primaryText">Value We Give To You</span>  <br />
                <span className="secondaryText mt-5">We always ready to  help by providing the best services for you. <br />
                We believe a good place to live can make your life better.
                </span>
          

          <Accordion
          className="accor"
          allowMultipleExpanded={false}
          preExpanded={[0]}>

            
            {  data.map((item, i)=> {
              
              return (
                
                <AccordionItem className= 'accordionItem' key={i} uuid={i}>

                       <AccordionItemHeading>
                  
                       <AccordionItemButton className="flexCenter  accordionBtn"> 
                      
                         <div className="icon">  {item.icon} </div>
                         <span className=" primaryText heading"> {item.heading}</span>
                         <div className="flex_End icon"><MdOutlineArrowDropDown size={30} /></div>
                        </AccordionItemButton>
                       </AccordionItemHeading>



                       <AccordionItemPanel className="panel"> <p className="secondaryText detail">{item.detail}</p> </AccordionItemPanel>
                      
                </AccordionItem>
              )



            })


          }
          </Accordion>
          </div>






         
        
      </div>
    </section>
  )
}

export default Value
