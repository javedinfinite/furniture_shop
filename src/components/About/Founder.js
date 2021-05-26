import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Link from '@material-ui/core/Link';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom:'10px',
  },
});

export default function Founder(prop) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="300"
          image={prop.imageUrl}
          title={prop.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {prop.name}
          </Typography>
          <Typography gutterBottom variant="h8"  >
            {prop.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {prop.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography variant="h6" align="center" gutterBottom>
        <Link   href={prop.instaUrl} target="_blank">
           <InstagramIcon style={{ color: '#e4405f' }}  />
        </Link>{' '}
        {/* <Link   href="https://material-ui.com/" target="_blank">
           <FacebookIcon style={{ color: '#3b5999' }}  />
        </Link>{' '} */}
        <Link   href={prop.LinkedinUrl} target="_blank">
           <LinkedInIcon style={{ color: '#0077B5' }}  />
        </Link>{' '}
        {/* <Link   href="https://material-ui.com/" target="_blank">
           <TwitterIcon style={{ color: '#55acee' }}  />
        </Link>{' '} */}
        <Link   href={prop.YoutubeUrl} target="_blank">
           <YouTubeIcon style={{ color: '#cd201f' }}  />
        </Link>{' '}
        </Typography>
      </CardActions>
    </Card>
  );
}
