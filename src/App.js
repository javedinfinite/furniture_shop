import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ButtonAppBar from './components/app-bar/Main'
import { Switch, Route, HashRouter, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home/Home'
import Products from './components/Products/Products'


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
              <Route path="/Products" component={Products} />
              {/* <Route path="/apj_academy" component={ApjAcademy} />
              <Route path="/my_articles" component={MyArticles} />
              <Route path="/heap_overflow" component={HeapOverflow} />
              <Route path="/age_cal" component={AgeCal} />
              <Route path="/time_cal" component={TimeCal} />
              <Route path="/notes" component={Notes} />
              <Route path="/about" component={About} />
              <Route path="/logout" component={Home} /> */}
    </Switch>
  </div>
  </HashRouter>
  );
}

export default App