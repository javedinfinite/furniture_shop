import React from 'react';
 
import Button from '@material-ui/core/Button';
 
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
 
import Grid from '@material-ui/core/Grid';
 
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PhoneIcon from '@material-ui/icons/Phone';
 
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Beds() {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://www.canadianwood.in/wp-content/uploads/2018/03/Application-Furniture.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                       Bed
                    </Typography>
                    <Typography>
                      Double bed premium quality with ultra comfort
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      ???123
                    </Button>
                    <Button size="small" color="primary">
                      {/* Add to Cart */}
                      <PhoneIcon  style={{ fontSize: 12 }}/>  1234567890
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
 
          
        </Container>
  );
}
