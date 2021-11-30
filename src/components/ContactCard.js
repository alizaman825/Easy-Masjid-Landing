import { Grid, Paper, TextField } from '@material-ui/core'
import React from 'react'

function ContactCard() {
    return (
        <>
        <Grid>
            <Paper elevation={4} style={{backgroundColor:'#F1F9F6',borderRadius:10,}}>
                <p style={{padding:40,fontSize:'180%',fontWeight:'600',color:"#00536D"}}>
                    Contact Us
                </p>
                <p style={{fontSize:13,fontWeight:"200",paddingLeft:40,width:'80%'}}>
                Do you have any questions? Please do not hesitate to contact us 
               directly. Our team will come back to you within a matter of hours 
                to help you.
                </p>
                <div >
                    <div style={{display:"flex",justifyContent:"center"}}>
                <TextField id="filled-basic" label="Name" variant="filled" style={{width:"80%",marginTop:20,}} />
                      </div>
                      <div style={{display:"flex",justifyContent:"center"}}>
                <TextField id="filled-basic" label="Last Name" variant="filled"  style={{width:"80%", marginTop:20}}/>
                </div>
                <div style={{display:"flex",justifyContent:"center"}}>
                <TextField id="filled-basic" label="Phone Number" variant="filled"  style={{width:"80%", marginTop:20}}/>
                </div>
                <div style={{display:"flex",justifyContent:"center"}}>
                <TextField id="filled-basic" label="Email" variant="filled"  style={{width:"80%", marginTop:20}}/>
                </div>
                <div style={{display:"flex",justifyContent:"center"}}>
                <TextField id="filled-basic" label="Message" variant="filled"  style={{width:"80%", marginTop:20}}/>
                </div>
                </div>
                <div>
                    <button  style={{textAlign:'center',color:'white',backgroundColor:'#05B678',borderRadius:20,width:120,height:50,borderColor:'#05B678',borderWidth:0,margin:30}}>
                        <p style={{paddingTop:10}}>
                            Send
                        </p>
                    </button>
                </div>
            
            </Paper>
        </Grid>
        </>
    )
}

export default ContactCard
