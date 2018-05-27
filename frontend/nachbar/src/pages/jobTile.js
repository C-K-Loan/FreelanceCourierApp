import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

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
  content: {
    paddingTop: theme.spacing.unit * 2
  }
});

class JobTile extends React.Component {
  state = {
  };

  render() {
    const { classes } = this.props;
    const title = this.props.title;

    return (
      <Grid item xs={12} sm={6} lg={4}>
        <Paper className={classes.paper}>
          <AppBar position="static" color="default">
            <Toolbar>
              <Typography variant="title" color="inherit">
                {title}
              </Typography>
            </Toolbar>
          </AppBar>
          <Typography className={classes.content} variant="body1" color="inherit">
            Beispiel Content
          </Typography>
        </Paper>
      </Grid>
    );
  }
}

JobTile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(JobTile);
