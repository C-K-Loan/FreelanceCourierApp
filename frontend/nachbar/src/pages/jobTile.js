import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Houses from '../images/houses.jpg';
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
  tilebar:{
    height: '25%',
  },
  content: {
    paddingTop: theme.spacing.unit * 2
  },
});

class JobTile extends React.Component {
  state = {
  };

  render() {
    const { classes } = this.props;
    const title = this.props.title;

    const tileBar = <AppBar
        className={classes.tilebar}
        position="static"
        color="default"
        >
        <Toolbar>
          <div style={{padding:'16px'}}>
            <Typography variant="title" color="inherit" gutterBottom>
              {title}
            </Typography>
            <Typography
              variant="subheading"
              color="inherit"
              align="left"
            >
              {'von Author'}
            </Typography>
          </div>
        </Toolbar>
      </AppBar>;

    return (
      <Grid item xs={12} md={6} lg={4}>
        <Card className={classes.paper} elevation={4}>
          <CardMedia
            className={classes.media}
            src={Houses}
            title="Test Img"
          />
          {tileBar}
          <Typography className={classes.content} variant="body1" color="inherit">
            Beispiel Content
          </Typography>
        </Card>
      </Grid>
    );
  }
}

JobTile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(JobTile);
