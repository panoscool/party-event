import React from 'react';
import format from 'date-fns/format';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import InfoOutlined from '@material-ui/icons/InfoOutlined';
import CalendarTodayOutlined from '@material-ui/icons/CalendarTodayOutlined';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) => createStyles({
  paper: {
    margin: theme.spacing(2, 0),
  },
  button: {
    margin: theme.spacing(0, 1, 1, 1)
  },
  btnPosition: {
    textAlign: 'right'
  }
})
);

interface Props {
  description: string;
  date: any;
  cancelled: boolean;
  isGoing: boolean;
  isHost: boolean;
  authenticated: boolean;
  goingToEvent: (e: any) => void;
  cancelGoigToEvent: (e: any) => void;
}

function EventDetailsInfo({ authenticated, description, cancelled, date, isGoing, isHost, goingToEvent, cancelGoigToEvent }: Props) {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <List>
        <ListItem divider>
          <ListItemIcon>
            <CalendarTodayOutlined color="primary" />
          </ListItemIcon>
          <ListItemText primary={`${format(date.toDate(), 'dd MMMM yyyy')} at ${format(date.toDate(), 'h:mm a')}`} />
        </ListItem>
        <ListItem divider>
          <ListItemIcon>
            <InfoOutlined color="primary" />
          </ListItemIcon>
          <ListItemText primary={description} />
        </ListItem>
      </List>
      {authenticated && !isHost &&
        <div className={classes.btnPosition}>
          <Button
            variant="contained"
            className={classes.button}
            disabled={cancelled}
            color={isGoing ? 'default' : "secondary"}
            onClick={isGoing ? cancelGoigToEvent : goingToEvent}
          >
            {isGoing ? 'Cancel my place' : 'Join this event'}
          </Button>
        </div>}
    </Paper>
  );
}

export default EventDetailsInfo;
