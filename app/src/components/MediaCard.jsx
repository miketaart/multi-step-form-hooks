import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  return (
    <div className="Card">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.results.imgUrl}
            title={props.results.commonName}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.results.commonName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.results.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Deel
        </Button>
          <Button size="small" color="primary">
            Lees meer
        </Button>
        </CardActions>
      </Card>
    </div>
      
  );
}