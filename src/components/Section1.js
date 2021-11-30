import { Grid } from '@material-ui/core'
import React from 'react'
import Img1 from '../assets/img2.png'
import Img2 from '../assets/img3.png'
import Img3 from '../assets/img4.png'
import Arrow from '../assets/arrow.png'

function Section1() {
    return (
        <>
        <Grid >
            <Grid xs={12} style={{textAlign:'center',}}>
                <p style={{fontSize:12,fontWeight:'300',marginTop:50}}>
                    How It Works?
                </p>
                <p style={{fontSize:'180%',fontWeight:'600',color:'#00536D',paddingTop:20}}>
                    Simple and Fast 
                </p>
            </Grid>
            <Grid container={true} style={{display:'flex',justifyContent:"space-around", alignItems:"center",marginTop:100}}>
                <Grid xs={10} sm={10} md={2} lg={2} >
                    <div className="text-center">
                    <img src={Img1} />
                    </div>
                    <p style={{textAlign:'center',fontSize:20,fontWeight:'600',paddingTop:10}}>
                        Select your area
                    </p>
                    <p style={{fontSize:13,fontWeight:"200",paddingTop:10,textAlign:'center'}}>
                    Launch party pitch technology user experience innovator buzz stealth MVP business model.
                    </p>
                </Grid>
                <img src={Arrow} style={{width:50,height:50}}/>
                <Grid xs={10} sm={10} md={2} lg={2}>
                    <div className="text-center">
                    <img src={Img2} />
                    </div>
                    <p style={{textAlign:'center',fontSize:20,fontWeight:'600',paddingTop:10}}>
                        Find Your Masjid
                    </p>
                    <p style={{fontSize:13,fontWeight:"200",paddingTop:10,textAlign:'center'}}>
                    Launch party pitch technology user experience innovator buzz stealth MVP business model.
                    </p>
                </Grid>
                <img src={Arrow} style={{width:50,height:50}}/>
                <Grid xs={10} sm={10} md={2} lg={2}>
                    <div className="text-center">
                    <img src={Img3} />
                    </div>
                    <p style={{textAlign:'center',fontSize:20,fontWeight:'600',paddingTop:10}}>
                        Prayer On time
                    </p>
                    <p style={{fontSize:13,fontWeight:"200",paddingTop:10,textAlign:'center'}}>
                    Launch party pitch technology user experience innovator buzz stealth MVP business model.
                    </p>
                </Grid>
            </Grid>
        </Grid>
        </>

    )
}

export default Section1
