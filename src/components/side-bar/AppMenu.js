import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'
import Drawer from '@material-ui/core/Drawer';
import AppMenuItem from './AppMenuItem'
import appMenuItems from './AppMenuItemsList'


const useStyles = makeStyles({
    list: {
      width: 500,
    },
    fullList: {
      width: 'auto',
    },
    appMenu: {
        width: '100%',
      }
  });

const AppMenu = (props) => {
  const classes = useStyles()

 
    const list = () =>(
        <div
            //To decide width of Sidebar
            className={classes.fullList}
            //  className={classes.fullList, classes.list}

            role="presentation"  
            // onClick={props.toggleDrawer(false)}
            onKeyDown={props.toggleDrawer(false)}
            >

            <List component="nav" className={classes.appMenu} disablePadding>
            {appMenuItems.map((item, index) => (
                <AppMenuItem {...item} key={index} />
            ))}
            </List>
                
        </div>
    )
  return (
    <div>
        <React.Fragment  >
          <Drawer anchor='left' open={props.drawerState} onClose={props.toggleDrawer(false)}>
            {list()}
          </Drawer>
        </React.Fragment>
    </div>
  )
}

export default AppMenu
