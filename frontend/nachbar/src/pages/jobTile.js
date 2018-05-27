import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: "400px"
  },
});

class JobTile extends React.Component {
  state = {
  };

  render() {
    const { classes } = this.props;
    const title = this.props.title;
    
    return (
      <Paper className={classes.paper}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="headline" color="inherit">
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
      </Paper>
    );
  }
}

JobTile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(JobTile);
