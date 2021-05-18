import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ButtonAppBar from './components/app-bar/Main'
import { Switch, Route, HashRouter, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Footer from './components/Footer'
import Error from './components/Error'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <HashRouter>
    <div className={classes.root}>
      <ButtonAppBar  /> 
      <Switch>
              <Route exact path="/" component={Home} />
              {/* <Route path="/Products" component={Error} />
              <Route path="/offers" component={Error} />
              <Route path="/categories" component={Error} />
              <Route path="/newitems" component={Error} />
              <Route path="/contact" component={Error} />
              <Route path="/about" component={Error} /> */}
              <Route component={Error}/>
         
    </Switch>
  </div>
  <Footer title="Follow us" description="We are dedicated to our customers"/>
  </HashRouter>
  );
}

export default App