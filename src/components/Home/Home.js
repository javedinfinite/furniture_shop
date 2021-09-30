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
    clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%) '
     
  };

const Home = () =>{
    return(
        <div>
            <div style={myImage}>
            </div>
            <Latestproducts/>
        </div>
    )
}
export default Home;