import { Grid , Paper } from '@material-ui/core'
import React from 'react'
import Background from '../assets/background2.png'
import Img1 from '../assets/img5.png'
import Img2 from '../assets/img6.png'
import Img3 from '../assets/img7.png'

function Section2() {
    return (
        <>
        <Grid container={true} style={{display:'flex',justifyContent:'space-around',marginTop:"10%",paddingBottom:"10%",backgroundColor:'#DFF2EB'}} >
          <Grid  xs={10} sm={10} md={5} lg={5} style={{display:'flex'}}>
          <Grid  style={{marginTop:100}}>
                    <Paper className="text-center" elevation={4} style={{backgroundColor:'white',borderRadius:10,alignSelf:'center'}}>
                        <div className="text-center" >
                        <img src={Img1} style={{marginTop:100}}/>
                        </div>
                        <p style={{textAlign:'center',fontSize:22,paddingTop:20,fontWeight:'600',color:'#00536D'}}>
                            Fast
                        </p>
                        <p style={{textAlign:'center',fontSize:13,paddingTop:20,fontWeight:'200',paddingBottom:60}}>
                        Launch party pitch technology user experience innovator buzz stealth MVP business model.
                        </p>
                    </Paper>
                    </Grid>
                    <Grid style={{marginTop:100,marginLeft:30}}>
                    <Paper elevation={4} style={{backgroundColor:'white',borderRadius:10,alignSelf:'center'}}>
                        <div className="text-center" >
                        <img src={Img2} style={{marginTop:100}}/>
                        </div>
                        <p style={{textAlign:'center',fontSize:22,paddingTop:20,fontWeight:'600',color:'#00536D'}}>
                           Jamaat Reminder
                        </p>
                        <p style={{textAlign:'center',fontSize:13,paddingTop:20,fontWeight:'200',paddingBottom:60}}>
                        Launch party pitch technology user experience innovator buzz stealth MVP business model.
                        </p>
                    </Paper>
                    
                    </Grid>

          </Grid>
          {/* <Grid xs={10} sm={10} md={3} lg={3}>
          <Grid style={{marginTop:30}}>
                    <Paper elevation={4} style={{backgroundColor:'white',borderRadius:10,alignSelf:'center'}}>
                        <div className="text-center" >
                        <img src={Img3} style={{marginTop:100}}/>
                        </div>
                        <p style={{textAlign:'center',fontSize:22,paddingTop:20,fontWeight:'600',color:'#00536D'}}>
                           Your All Day Activities
                        </p>
                        <p style={{textAlign:'center',fontSize:13,paddingTop:20,fontWeight:'200',paddingBottom:60}}>
                        Launch party pitch technology user experience innovator buzz stealth MVP business model.
                        </p>
                    </Paper>
                    </Grid>
                    </Grid> */}
                        <Grid lg={5} xs={10} sm={10} md={5} style={{alignSelf:'center',marginTop:"5%"}}>
                           
                            <p style={{fontSize:13,fontWeight:"200",paddingLeft:30,}}>
                                Features
                            </p>
                            <p style={{fontSize:'210%',fontWeight:'bold',color:'#00536D',paddingTop:20,paddingLeft:30}}>
                                Expect Great Features
                            </p>
                            <p style={{fontSize:13,fontWeight:'200',paddingTop:20,paddingLeft:30}}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.
                            </p>
                            <button style={{textAlign:'center',color:'white',backgroundColor:'#05B678',borderRadius:20,width:120,height:50,borderColor:'#05B678',borderWidth:0,marginLeft:30}}>
                                Get Started
                            </button>
                        
                        </Grid>
                    
        </Grid>
        
        </>
    )
}

export default Section2
