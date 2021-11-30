import React from 'react'
import { Grid } from '@material-ui/core'
import Logo from '../assets/Logo.png'
import Background from '../assets/background.png'
import { Apple , PlayArrow } from '@material-ui/icons'
import Img1 from '../assets/img1.png'
function Home() {
    return (
       <>
       
       <div style={{backgroundImage:`url(${Background})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',}} >
       <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
          <img src={Logo} style={{height:70,}}/>
          <a className="navbar-brand" href="#" style={{paddingLeft:20,color:'white'}}>easy Masjid</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto" >
              <li className="nav-item active">
                <a className="nav-link" href="#" style={{paddingRight:20,paddingTop:15,color:'white'}}>Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{paddingRight:20,paddingTop:15,color:'white'}}>How It Works</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{paddingRight:20,paddingTop:15,color:'white'}}>Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{paddingRight:20,paddingTop:15,color:'white'}}>Contributors & Partners</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{paddingRight:20,paddingTop:15,color:'white'}}>Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{paddingRight:20,paddingTop:15,color:'white'}}>Career</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{paddingRight:20,paddingTop:15,color:'white'}}>Contact Us</a>
              </li>
              <button  style={{textAlign:'center',color:'white',backgroundColor:'#05B678',borderRadius:20,width:120,height:50,borderColor:'#05B678',borderWidth:0}}>
                  <p style={{paddingTop:10}}>Sign In </p>
              </button>
            </ul>
          </div>
        </nav>
        <Grid  container={true} style={{display:'flex',justifyContent:'space-between'}} >
            <Grid xs={12} sm={12} md={12} lg={4} style={{justifyContent:'center'}}>
                <p style={{fontSize:"200%",fontWeight:'600',color:'white',paddingLeft:30,paddingTop:100}}>
                    Discover Great Things With Our App
                </p>
                <p style={{fontSize:"100%",fontWeight:'300',color:'white',paddingLeft:30,paddingTop:50,paddingBottom:50}}>
                Business plan lean startup holy grail disruptive. Crowdfunding beta prototype gen-z incubator niche market.
             </p>
                <Grid xs={12} style={{display:'flex',justifyContent:'space-evenly',marginBottom:50}}>
                <button style={{backgroundColor:'white',borderColor:'white',borderWidth:0,borderRadius:10,display:"flex",}} >
                    <Apple fontSize="large"  style={{marginTop:10,color:'#00536D'}} />
                    <p style={{fontSize:12,fontWeight:'600',color:'#00536D',paddingTop:10}}>
                        Download On The 
                        <br/>
                        App Store
                    </p>
                </button>
                <button style={{backgroundColor:'white',borderColor:'white',borderWidth:0,borderRadius:10,display:"flex",width:150,}}>
                    <PlayArrow fontSize="large"  style={{marginTop:10,color:'#00536D'}}/>
                <p style={{fontSize:12,fontWeight:'600',color:'#00536D',paddingTop:10,paddingLeft:20}}>
                    Get it On            
                  <br/>
                  Google Play
                    </p>

                </button>
                </Grid>
             </Grid>
             <Grid xs={12} sm={12} md={12} lg={5} style={{alignSelf:'center'}} >   
             <img src={Img1}  height="100%" width="100%"/>
             </Grid>
             
        </Grid>
        
       </div>
       </>
       
    )
}

export default Home
