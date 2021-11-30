import { Grid } from '@material-ui/core'
import React from 'react'

function Footer() {
    return (
       <>
        <hr style={{backgroundColor:"white"}}/>
                <Grid xs={12} style={{display:'flex',justifyContent:'space-around',textAlign:'center',alignItems:'center'}}>
                    <p style={{color:"white",fontSize:13,fontWeight:'200',paddingTop:10}}>
                        Terms & Condition &nbsp; Privacy Policy
                    </p>
                    <p style={{color:"white",fontSize:13,fontWeight:'200',paddingTop:10}}>
                        &copy; 2021 Copyright By Easy Masjid
                    </p>
                </Grid>
       </>
    )
}

export default Footer
