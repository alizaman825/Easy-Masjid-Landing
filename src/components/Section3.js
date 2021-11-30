import { Grid } from '@material-ui/core'
import React from 'react'
import Background from '../assets/background3.png'
import Img1 from '../assets/properties.png'
import Img2 from '../assets/event.png'
import Img3 from '../assets/etqaf.png'
import Img4 from '../assets/listen.png'
import Img5 from '../assets/clock.png'
import Img6 from '../assets/donate.png'
import Carousel from './Carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
function Section3() {
    return (
        <>
        
        <Grid style={{paddingTop:'10%'}}>
                    <p style={{fontSize:'210%',color:'white',fontWeight:'bold',padding:50}}>
                        We made this app to solve your problem
                    </p>
                 </Grid>
                 <Grid lg={12} container={true} style={{display:'flex',justifyContent:'space-around',marginTop:30}}>
                     <Grid >
                         <div style={{display:'flex'}}>
                             <img src={Img1} style={{width:40,height:47}}/>
                             <div style={{paddingLeft:20}}>
                             <p style={{color:'white',fontWeight:'600',fontSize:16}}>
                             Masjid Properties
                             </p>
                             <p style={{width:250,color:'white',fontWeight:'200',fontSize:13}}>
                             Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.
                             </p>
                             </div>
                         </div>
                     </Grid> 
                     <Grid >
                         <div style={{display:'flex'}}>
                             <img src={Img2} style={{width:48,height:44}}/>
                             <div style={{paddingLeft:20}}>
                             <p style={{color:'white',fontWeight:'600',fontSize:16}}>
                             Events
                             </p>
                             <p style={{width:250,color:'white',fontWeight:'200',fontSize:13}}>
                             Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.
                             </p>
                             </div>
                         </div>
                     </Grid> 
                     {/* <Grid lg={5}>
                    <Carousel/>
                 </Grid>        */}
                </Grid>
                <Grid lg={12} container={true} style={{display:'flex',justifyContent:'space-around',marginTop:30}}>
                     <Grid >
                         <div style={{display:'flex'}}>
                             <img src={Img3} style={{width:35,height:56}}/>
                             <div style={{paddingLeft:20}}>
                             <p style={{color:'white',fontWeight:'600',fontSize:16}}>
                             Etqaf Registration
                             </p>
                             <p style={{width:250,color:'white',fontWeight:'200',fontSize:13}}>
                             Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.
                             </p>
                             </div>
                         </div>
                     </Grid> 
                     <Grid >
                         <div style={{display:'flex'}}>
                             <img src={Img4} style={{width:46,height:46}}/>
                             <div style={{paddingLeft:20}}>
                             <p style={{color:'white',fontWeight:'600',fontSize:16}}>
                             Listen Live
                             </p>
                             <p style={{width:250,color:'white',fontWeight:'200',fontSize:13}}>
                             Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.
                             </p>
                             </div>
                         </div>
                     </Grid>       
                </Grid>
                <Grid lg={12} container={true} style={{display:'flex',justifyContent:'space-around',marginTop:30}}>
                     <Grid >
                         <div style={{display:'flex'}}>
                             <img src={Img5} style={{width:52,height:52}}/>
                             <div style={{paddingLeft:20}}>
                             <p style={{color:'white',fontWeight:'600',fontSize:16}}>
                             Show Clock
                             </p>
                             <p style={{width:250,color:'white',fontWeight:'200',fontSize:13}}>
                             Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.
                             </p>
                             </div>
                         </div>
                     </Grid> 
                     <Grid >
                         <div style={{display:'flex'}}>
                             <img src={Img6} style={{width:42,height:47}}/>
                             <div style={{paddingLeft:20}}>
                             <p style={{color:'white',fontWeight:'600',fontSize:16}}>
                             Donate
                             </p>
                             <p style={{width:250,color:'white',fontWeight:'200',fontSize:13}}>
                             Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.
                             </p>
                             </div>
                         </div>
                     </Grid>       
                </Grid> 
                        
        </>
    )
}

export default Section3
