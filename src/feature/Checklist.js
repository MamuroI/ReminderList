import React, {useContext} from 'react'
import { withController } from '../hoc/withController'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import StarIcon from '@material-ui/icons/Star';
import FavButton from '../component/favButton'
import { useReminderContext } from './ReminderController';

export default function Checklist() {
    const [checked, setChecked] = React.useState([0]);
    const {reminderList, onDelete, onEdit, onClickFavorite,onClickDone} = useReminderContext();
  
    const handleToggle = (value) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
  
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
  
      setChecked(newChecked);
    };
  
    return (
        <center>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {reminderList?.map((item,key) => {
          const labelId = `checkbox-list-label-${key}`;
  
          return (
            <ListItem
              key={key}
              role={undefined}
              dense
              button
              
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={item.isDone}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                  onClick={()=>onClickDone(item)}
                />
                <FavButton checked={item.isFav} onClick={()=>onClickFavorite(item)} />
              </ListItemIcon>
              <ListItemText id={labelId} primary={item.title} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="comments"
                    onClick={()=>{onEdit(item)}}
                >
                  <EditIcon />
                </IconButton>
                <IconButton edge="end" aria-label="comments" onClick={()=>{onDelete(item)}}>
                  <DeleteIcon style={{ color:"red" }}   />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
        </center>
      
    );
  }

