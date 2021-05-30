import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

function Copyright() {
  return (
    <Typography variant="body2" color='textSecondary'  align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
      rakfurnhi.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#2c3f46',
    // backgroundColor: '#424242',
    color: 'white'
    // padding: theme.spacing(6, 0),
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="xl"  >
        <Typography variant="h6" align="center" gutterBottom>
          {title}  
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
        <Link   href="https://material-ui.com/">
           <InstagramIcon style={{ color: '#e4405f' }}  />
        </Link>{' '}
        <Link   href="https://material-ui.com/">
           <FacebookIcon style={{ color: '#3b5999' }}  />
        </Link>{' '}
        <Link   href="https://material-ui.com/">
           <LinkedInIcon style={{ color: '#0077B5' }}  />
        </Link>{' '}
        <Link   href="https://material-ui.com/">
           <TwitterIcon style={{ color: '#55acee' }}  />
        </Link>{' '}
        <Link   href="https://material-ui.com/">
           <YouTubeIcon style={{ color: '#cd201f' }}  />
        </Link>{' '}
        </Typography>
        
        <Typography variant="subtitle1" align="center"   component="p">
          Contact: <MailOutlineIcon  style={{ fontSize: 12 }}/> hello@rakfurnhi.com <PhoneIcon  style={{ fontSize: 12 }}/>  1234567890
        </Typography>
 
        <Copyright />
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
