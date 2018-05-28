import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
/*import Icon from '../icons/icon.png';*/
import IconSmall from '../icons/icon_sm.png';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

import JobGrid from './jobGrid.js'

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 8,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});


class Index extends React.Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const { classes } = this.props;
    console.log("classes/this.props: ", this.props)
    console.log(classes)
    const { open } = this.state;
    const appbar = <AppBar position="fixed" color="primary">
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <img alt="icon_sm" src={IconSmall} ></img>
        <Typography variant="title" color="inherit" className={classes.flex}>
          Nachbar
        </Typography>
        <Button color="inherit"><AccountCircle style={{marginRight: '10'}}/>Login</Button>
      </Toolbar>
    </AppBar>;

    return (
    <div className={classes.root}>
      {appbar}
      <JobGrid/>
    </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
