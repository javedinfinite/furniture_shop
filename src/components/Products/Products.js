import React from 'react';
 
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ParticlesBg from 'particles-bg'

import Beds from './Beds'
import ExpandComp from './ExpandComp'
import Sofas from './Sofas'



const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(8),
 
    // background: '#2980B9',  /* fallback for old browsers */
    // background: '-webkit-linear-gradient(to left, #FFFFFF, #6DD5FA, #2980B9)',  /* Chrome 10-25, Safari 5.1-6 */
    // background: 'linear-gradient(to left, #FFFFFF, #6DD5FA, #2980B9)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    

    backgroundImage: "url(" + "https://images.pexels.com/photos/326311/pexels-photo-326311.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" + ")",
 
  },

 
 
}));

export default function Products() {
  const classes = useStyles();

  return (
      <div style={{marginTop:'5%', marginBottom:'2%'}}>
    <Container   className={classes.cardGrid} maxWidth="lg">
 
            <ExpandComp  sectionName='Beds Section'> 
                <Beds/>
            </ExpandComp>
            <ExpandComp sectionName='Sofas Section'> 
                <Sofas/>
            </ExpandComp>
            <ExpandComp sectionName='Bedroom Furniture'> 
                <Sofas/>
            </ExpandComp>
            <ExpandComp sectionName='Dining Tables'> 
                <Sofas/>
            </ExpandComp>
            <ExpandComp sectionName='Office Tables'> 
                <Sofas/>
            </ExpandComp>
            <ExpandComp sectionName='Office Chairs'> 
                <Sofas/>
            </ExpandComp>
            <ExpandComp sectionName='Cupboards and Racks'> 
                <Sofas/>
            </ExpandComp>
            <ExpandComp sectionName='Computer Tables and Study Desks'> 
                <Sofas/>
            </ExpandComp>
            <ExpandComp sectionName='Work Stations'> 
                <Sofas/>
            </ExpandComp>

        </Container>
        {/* <ParticlesBg color="#3f51b5" num={200} type="tadpole"   bg={true}   /> */}
 

        </div>
  );
}
