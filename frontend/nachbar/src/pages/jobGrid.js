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
  control: {
    padding: theme.spacing.unit * 2,
  },
  JobGrid: {
    padding: "24px",
    margin: 0,
    width: '100%',
  },
  // gridList: {
  //   width: "100%",
  //   height: 450,
  // }
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
          <Grid item xs={12} sm={4}>
            <JobTile title="Beispiel 1"/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <JobTile title="Beispiel 2"/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <JobTile title="Beispiel 3"/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <JobTile title="Beispiel 4"/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <JobTile title="Beispiel 5"/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <JobTile title="Beispiel 6"/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <JobTile title="Beispiel 7"/>
          </Grid>
        </Grid>
        {/* <div className={classes.root}>
          <Grid container spacing={24} className={classes.JobGrid}>
            <GridList cellHeight={160} className={classes.gridList} cols={3}>
              <GridListTile cols={1}>
                <Paper className={classes.paper}>TEST</Paper>
              </GridListTile>
              <GridListTile cols={1}>
                <Paper className={classes.paper}>TEST</Paper>
              </GridListTile>
              <GridListTile cols={1}>
                <Paper className={classes.paper}>TEST</Paper>
              </GridListTile>
            </GridList>
          </Grid>
        </div> */}
      </div>
    );
  }
}

JobGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(JobGrid);
