import { Grid } from '@material-ui/core'
import { Apple, Facebook, LinkedIn, PlayArrow, Twitter } from '@material-ui/icons'
import React from 'react'
import Background from '../assets/background5.png'
import ContactCard from './ContactCard'

function ContactUs() {
    return (
        <>
        <Grid>
            <div >
                <Grid xs={12} sm={12} md={12} lg={10} style={{paddingTop:100,display:"flex",justifyContent:"space-around"}}>
                    <Grid>
                        <p style={{fontSize:18,fontWeight:"600",color:"white"}}>
                            Want to work with us?
                         </p>   
                        <p style={{fontSize:13,fontWeight:"200",color:"white"}}>
                            Use This Email
                        </p>
                        <p style={{fontSize:13,fontWeight:"200",color:"white"}}>
                            alisheikh6869@gmail.com
                        </p>
                     </Grid>  
                     <Grid>
                         <p style={{fontSize:18,fontWeight:"600",color:"white"}}>
                             Want to say hi?
                         </p>
                         <p style={{fontSize:13,fontWeight:"200",color:"white"}}>
                             General Inquries
                         </p>
                         <p style={{fontSize:13,fontWeight:"200",color:"white"}}>
                             alisheikh6869@gmail.com
                         </p>
                     </Grid>   
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={8} style={{paddingTop:100,justifyContent:"center",paddingLeft:80}}>
                    <p style={{fontSize:18,fontWeight:"600",color:"white"}}>
                        Find us on Social Media
                    </p>
                    <p style={{fontSize:13,fontWeight:"200",color:"white"}}>
                        Social Media
                    </p>
                    <p style={{display:"flex",justifyContent:'space-between',width:100}}>
                        <Facebook fontSize="small" style={{color:"white"}} />
                        <Twitter fontSize="small" style={{color:"white"}} />
                        <LinkedIn fontSize="small" style={{color:"white"}}/>
                    </p>
                </Grid>
                
                <Grid xs={12} sm={12} md={12} lg={10}  style={{display:'flex',justifyContent:'space-evenly',paddingTop:100}}>
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
            </div>
        </Grid>

        </>
    )
}

export default ContactUs
