import { Grid, Paper } from '@material-ui/core'
import { CheckCircleOutline, HighlightOff } from '@material-ui/icons'
import React from 'react'
import Background from '../assets/background3.png'

function Section4() {
    return (
        <>
        <Grid style={{backgroundColor:'#DFF2EB',paddingBottom:100}}>
            <Grid>
                  <p style={{textAlign:'center',fontSize:14,fontWeight:'200',paddingTop:50}}>
                        Pricing
                    </p>
                    <p style={{textAlign:'center',fontSize:"210%",fontWeight:'600',paddingTop:15,color:'#00536D'}}>
                        Choose the right plan
                    </p>
                    </Grid>
                    <Grid xs={12} container={true} style={{display:'flex',justifyContent:'center',}}>
            <Grid xs={10} sm={10} md={3} lg={3} >
                <Paper elevation={6} style={{backgroundColor:'white',borderRadius:10,marginTop:50,  }}>
                    <p style={{textAlign:'center',paddingTop:30,fontWeight:"200",fontSize:13}}>
                        Free Plan
                    </p>
                    <p style={{textAlign:'center',paddingTop:10,fontWeight:'bold',fontSize:30,color:'#05B678'}}>
                        $0
                    </p>
                    <div style={{display:'flex'}}>
                        <CheckCircleOutline fontSize="medium"style={{marginLeft:30,color:"#05B678"}}/>
                        <p style={{fontWeight:'200',fontSize:15,paddingLeft:20,}}>
                            5 Gb disk space
                        </p>
                    </div>
                    <div style={{display:'flex'}}>
                        <CheckCircleOutline fontSize="medium" style={{marginLeft:30,color:"#05B678"}}/>
                        <p style={{fontWeight:'200',fontSize:15,paddingLeft:20}}>
                           100 Email Accounts
                        </p>
                    </div>
                    <div style={{display:'flex'}}>
                        <HighlightOff fontSize="medium"  style={{marginLeft:30,color:"#FF6767"}}/>
                        <p style={{fontWeight:'200',fontSize:15,paddingLeft:20}}>
                        Unlimited Bandwidth
                        </p>
                    </div>
                    <div style={{display:'flex'}}>
                        <HighlightOff fontSize="medium" style={{marginLeft:30,color:"#FF6767"}}/>
                        <p style={{fontWeight:'200',fontSize:15,paddingLeft:20}}>
                            Unlimited Bandwidth
                        </p>
                    </div>
                    <div style={{display:'flex'}}>
                        <HighlightOff fontSize="medium"  style={{marginLeft:30,color:"#FF6767"}}/>
                        <p style={{fontWeight:'200',fontSize:15,paddingLeft:20}}>
                        Unlimited Bandwidth
                        </p>
                    </div>
                    <div style={{display:'flex',justifyContent:'center',marginTop:35,paddingBottom:30}}>
                    <button  style={{textAlign:'center',color:'white',backgroundColor:'#05B678',borderRadius:20,width:"50%",height:50,borderColor:'#05B678',borderWidth:0,}}>
                  <p style={{paddingTop:12}}>Choose Plan </p>
              </button>
              </div>
                </Paper>
            </Grid>
            <Grid xs={10} sm={10} md={3} lg={3}>
                <Paper elevation={6} style={{backgroundImage:`url(${Background})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',marginTop:50,marginLeft:40,}} >
                    <p style={{textAlign:'center',paddingTop:30,fontWeight:"500",fontSize:16,color:'white'}}>
                        Free Plan
                    </p>
                    <p style={{textAlign:'center',fontWeight:'bold',fontSize:30,color:'white'}}>
                        $9
                    </p>
                    <div style={{display:'flex'}}>
                        <CheckCircleOutline fontSize="medium"  style={{marginLeft:30,color:"white"}}/>
                        <p style={{fontWeight:'200',fontSize:15,paddingLeft:20,color:'white'}}>
                            5 Gb disk space
                        </p>
                    </div>
                    <div style={{display:'flex'}}>
                        <CheckCircleOutline fontSize="medium"  style={{marginLeft:30,color:"white"}}/>
                        <p style={{fontWeight:'200',fontSize:15,paddingLeft:20,color:'white'}}>
                        100 Email Accounts
                        </p>
                    </div>
                    <div style={{display:'flex'}}>
                        <CheckCircleOutline fontSize="medium"  style={{marginLeft:30,color:"white"}}/>
                        <p style={{fontWeight:'200',fontSize:15,paddingLeft:20,color:'white'}}>
                        Unlimited Bandwidth
                        </p>
                    </div>
                    <div style={{display:'flex'}}>
                        <CheckCircleOutline fontSize="medium"  style={{marginLeft:30,color:"white"}}/>
                        <p style={{fontWeight:'200',fontSize:15,paddingLeft:20,color:'white'}}>
                        Unlimited Bandwidth
                        </p>
                    </div>
                    <div style={{display:'flex'}}>
                        <CheckCircleOutline fontSize="medium"  style={{marginLeft:30,color:"white"}}/>
                        <p style={{fontWeight:'200',fontSize:15,paddingLeft:20,color:'white'}}>
                        Unlimited Bandwidth
                        </p>
                    </div>
                    <div style={{display:'flex',justifyContent:'center',marginTop:35,paddingBottom:40}}>
                    <button  style={{textAlign:'center',color:'black',backgroundColor:'white',borderRadius:20,width:"50%",height:50,borderColor:'#05B678',borderWidth:0,}}>
                  <p style={{paddingTop:12}}>Choose Plan </p>
              </button>
              </div>
        
                </Paper>
            </Grid>
            </Grid>
        </Grid>
        </>
    )
}

export default Section4
