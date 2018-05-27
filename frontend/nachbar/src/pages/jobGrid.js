import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import JobTile from './jobTile.js'
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
  JobGrid: {
    padding: theme.spacing.unit * 4,
    margin: 0,
    width: '100%',
  },
});

class JobGrid extends React.Component {
  state = {
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const { classes } = this.props;
    console.log(this.props)
    return (
      <div className={classes.root}>
        <Grid container spacing={24} className={classes.JobGrid}>
            <JobTile title="Beispiel 1"/>
            <JobTile title="Beispiel 2"/>
            <JobTile title="Beispiel 3"/>
            <JobTile title="Beispiel 4"/>
            <JobTile title="Beispiel 5"/>
            <JobTile title="Beispiel 6"/>
            <JobTile title="Beispiel 7"/>
        </Grid>
      </div>
    );
  }
}

JobGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(JobGrid);
