import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Companies from './Components/Companies/Companies';
import Residences from './Components/Residences/Residences';
import Value from './Components/value/Value';
import Contact from './Components/Contact/Contact';
import Get from './Components/GetStarted/Get';
import Footer from './Components/Footer';






function App() {
  return (
 <div className="App">
 <div>
  <div className="white-gradient"/>
 <Header/>
 <Hero/>
 </div>
 <Companies/>
  <Residences/> 
 <Value/> 
<Contact/>
<Get/> 
 <Footer/> 

 </div>
  );
}

export default App;
