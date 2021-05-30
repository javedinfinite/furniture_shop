import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

// import TemporaryDrawer from '../side-bar/Main'
import AppMenu from '../side-bar/AppMenu'

//icons
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


const useStyles = makeStyles((theme) => ({
    showMenuButton: {
        [theme.breakpoints.between('sm','xl')]: { display: 'none' }
      },
  root: {
    flexGrow: 1,
    // backgroundColor: 'pink' , //#3f51b5, blue, pink

  },
  appBarSolid:{

    backgroundColor: 'white' ,
    color: "#07051f",
    boxShadow: 'none'

  },

  appBarTransparent:{
    
    color: "#07051f",
    // color: "white",
    // background: 'transparent',
    boxShadow: 'none',
    backgroundColor: 'rgba(67, 129, 168,0)'

  },
  appBarButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: { display: 'none'}
  },
  righttoolbarButtons: {
    marginLeft: 'auto',
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

  
  //dropdown menu
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [navBackground, setNavBackground] = useState('appBarTransparent')
    const navRef = React.useRef()
    navRef.current = navBackground
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 310
            if (show) {
                setNavBackground('appBarSolid')
            } else {
                setNavBackground('appBarTransparent')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])


  return (
      <div   >
      <AppBar className={classes[navRef.current]} position="fixed"> 
        
        <Toolbar >
          <IconButton edge="start" onClick={toggleDrawer(true)} className={classes.showMenuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <IconButton edge="start" component={Link} to="/" className={classes.appBarButton} color="inherit" aria-label="menu">
            <HomeIcon/>
          </IconButton>
          <IconButton edge="start" component={Link} to="/products" className={classes.appBarButton} color="inherit" aria-label="menu">
            Products
          </IconButton>
          <IconButton edge="start" component={Link} to="/offers" className={classes.appBarButton} color="inherit" aria-label="menu">
            Offers
          </IconButton>
          {/* <IconButton edge="start" component={Link} to="/categories" className={classes.appBarButton} color="inherit" aria-label="menu">
            Categories
          </IconButton> */}
          <IconButton edge="start" component={Link} to="/newitems" className={classes.appBarButton} color="inherit" aria-label="menu">
            New at Rakfurnhi
          </IconButton>
 
          <IconButton edge="start"  className={classes.appBarButton} color="inherit" aria-label="menu" aria-controls="customized-menu" variant="contained" aria-haspopup="true" onClick={handleClick}>
            More <ArrowDropDownIcon/>
          </IconButton>
          <Menu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} component={Link} to="/contact" >Contact Us</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/about">About Us</MenuItem>
          </Menu>

          {/* After below div all components will be aligned right due to flex 1 from class=title */}
          {/* <div edge="start" className={classes.title} color="inherit" aria-label="menu">
          </div> */}

          <div className={classes.righttoolbarButtons}>
            <IconButton color="inherit"><ShoppingCartIcon /></IconButton>
          </div>

        </Toolbar>
      </AppBar>
    <AppMenu
            toggleDrawer={toggleDrawer}
            drawerState={leftMenu}
    />
    </div>
  );
}

export default  ButtonAppBar
