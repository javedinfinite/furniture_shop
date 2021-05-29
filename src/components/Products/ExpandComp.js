import React from 'react';
 
import Typography from '@material-ui/core/Typography';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import TouchAppIcon from '@material-ui/icons/TouchApp';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      marginBottom:'5%'
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));
 
export default function ExpandComp(props) {
 
    const classes = useStyles();
  return (
 
            <Accordion  style={{color:'white', backgroundColor:'#564a4a'}} className={classes.root} TransitionProps={{ unmountOnExit: true }}>
                <AccordionSummary
                expandIcon={<TouchAppIcon style={{color:'white'}}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <Typography className={classes.heading}>{props.sectionName}</Typography>
                    
                </AccordionSummary>
                <AccordionDetails>
                    {props.children}
                </AccordionDetails>
            </Accordion>

  
  );
}
