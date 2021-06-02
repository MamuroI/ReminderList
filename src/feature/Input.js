import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import { useReminderContext } from './ReminderController';


export default function Input() {

    const { taskInput, setTaskInput, onSave} = useReminderContext()
    
    return (
        <Grid container justifyContent="center" style={{ marginTop: 20 }}>
            <TextField 
            label="Task" variant="outlined" style={{ marginRight:5 }}  
            onChange={(e)=>setTaskInput(e.target.value)}
            value={taskInput}
            />
            <Button onClick={onSave} variant="contained" >Add</Button>
        </Grid>
    )
}
