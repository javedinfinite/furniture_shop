import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Latestproducts from './Latestproducts'
import Footer from '../Footer'



 
const myImage = {
    backgroundImage: "url(" + "https://as2.ftcdn.net/v2/jpg/01/84/25/65/1000_F_184256548_oPp1gCg96QK2VQEslhz4wL7PpvJp5Nij.jpg" + ")",
    backgroundPosition: 'center',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    height: '80vh',
    // width: '100%',
    display: 'flex',  justifyContent:'center', alignItems:'center',  
     
    
  };
  

const ImaegContent = {
    // color: 'black',
    // border: '3px solid white',
    // backgroundColor:'white',
    // margin:'0px 0px 0px 00%'
    // width:'40vh',
    // height:'20vh'
    // display: 'flex',  justifyContent:'center', alignItems:'center'
}

const Home = () =>{
    return(
        <div>
                    <div style={myImage}>

                        <div style={ImaegContent} >
                        {/* 65,105,225   rgba(0,0,0,0.6) */}
                            <div style={{  padding:'2%',  color: 'white',backgroundColor:'rgba(65,105,225,0.6)', border: '1px solid white',textAlign: 'center'}}>
                                <h2>RakFurnHi!</h2>
                                <p>We are Furniture Company with variety of designs</p>
                            </div>
     
                            <Button style={{marginLeft:'19%', marginTop:'5%'}}
                                size="large"
                                variant="contained"
                                color="primary"
                                endIcon={<ArrowForwardIcon />}
                                >
                                Let's Explore
                            </Button>
                        </div>
                    </div>
                    <Latestproducts/>
        </div>
    )
}
export default Home;