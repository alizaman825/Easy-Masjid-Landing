import { Avatar, Grid } from '@material-ui/core'
import React from 'react'
import Img1 from '../assets/avatar.png'
import ImageCarousel from './Slider'
function Section5() {
    return (
        <>
        <Grid>
            <Grid style={{marginTop:50}}>
                <p style={{textAlign:'center',fontSize:'210%',fontWeight:'bold',color:"#00536D",}}>
                Contributors & Partners
                </p>
            </Grid>
            <Grid className="text-center" container={true} xs={12} style={{display:'flex',justifyContent:'space-around',marginTop:100,alignItems:'center'}}>
                <Grid xs={10} sm={10} md={6} lg={2}>
                <Avatar src={Img1}  style={{ width: 230, height:230 }}/>
                <p style={{textAlign:'center',fontSize:14,fontWeight:'200',paddingTop:10}}>
                    Muhammad Asif
                </p>
                <p style={{textAlign:'center',fontSize:14,fontWeight:'200',paddingTop:10}}>
                    Web Developer
                </p>
                <p style={{textAlign:'center',fontSize:14,fontWeight:'200',paddingTop:10}}>
                    Partner
                </p>
                </Grid>
            </Grid>
            <Grid xs={12}  style={{marginTop:70,}}>
                <ImageCarousel/>
            </Grid>
        </Grid>
        </>
    )
}

export default Section5
