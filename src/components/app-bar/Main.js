import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// import TemporaryDrawer from '../side-bar/Main'
import AppMenu from '../side-bar/AppMenu'

//icons
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const useStyles = makeStyles((theme) => ({
    showMenuButton: {
        // [theme.breakpoints.between('sm','xl')]: { display: 'none' }
      },
  root: {
    flexGrow: 1,
    backgroundColor: '#3f51b5' , //#3f51b5, blue, pink
    color: "white",
  },
  appBarButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: { display: 'none'}
  },
  title: {
    flexGrow: 1,
  },
}));



const ButtonAppBar = () => {
  const classes = useStyles();

  const [leftMenu, setLeftMenu] = React.useState(false)

  const toggleDrawer = (menuState) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setLeftMenu(menuState);
  };

  return (
      <div>
      <AppBar className={classes.root} position="static"  >
        <Toolbar>
          <IconButton edge="start" onClick={toggleDrawer(true)} className={classes.showMenuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <IconButton edge="start" className={classes.appBarButton} color="inherit" aria-label="menu">
            <HomeIcon/>
          </IconButton>
          <IconButton edge="start" className={classes.appBarButton} color="inherit" aria-label="menu">
            Products
          </IconButton>
          <IconButton edge="start" className={classes.appBarButton} color="inherit" aria-label="menu">
            Order
          </IconButton>
          <IconButton edge="start" className={classes.appBarButton} color="inherit" aria-label="menu">
            Offers
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            About
          </Typography>
          <Typography variant="h6"  >
          <ShoppingCartIcon/>
          </Typography>
        </Toolbar>
      </AppBar>
    {/* <TemporaryDrawer 
        toggleDrawer={toggleDrawer}
        drawerState={leftMenu}
    />  */}
    <AppMenu
            toggleDrawer={toggleDrawer}
            drawerState={leftMenu}
    />
    </div>
  );
}

export default  ButtonAppBar
