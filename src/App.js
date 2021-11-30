import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Carousel from './components/Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Grid } from '@material-ui/core';
import Background from '../src/assets/background3.png'
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import ContactUs from './components/ContactUs';
import Background2 from './assets/background5.png'
import ContactCard from './components/ContactCard';
import Footer from './components/Footer';
function App() {
  return (
    <>
  
    <Home/>
    <Section1/>
    <div >
    <Section2/>
    </div>
    <div style={{backgroundImage:`url(${Background})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',}}>
      <div  className="d-flex"  style={{justifyContent:'space-around'}}>
        <Grid container={true}>
        <Grid md={11} sm={11} xs={11}  lg={7} >
      <Section3/>
      </Grid>
      <Grid lg={4} md={11} sm={11} xs={11} style={{marginTop:60,alignSelf:'center'}}>
      <Carousel/>
      </Grid>
      </Grid>
      </div>
    </div>
    <div>
      <Section4/>
      </div>
      <div>
        <Section5/>
      </div>
      <div style={{backgroundImage:`url(${Background2})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',}}>
      <div  className="d-flex"  style={{justifyContent:'space-around'}}>
        <Grid container={true}>
        <Grid md={11} sm={11} xs={11}  lg={7} >
      <ContactUs/>
      </Grid>
      <Grid lg={4} md={11} sm={11} xs={11} style={{marginTop:80,alignSelf:'center'}}>
      <ContactCard/>
      </Grid>
      </Grid>
     
      </div>
      <Footer/>
    </div>
    </>
  );
}

export default App;
