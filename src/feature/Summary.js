import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useReminderContext } from './ReminderController'


export default function Summary() {
    const {totalDone,totalReminder,totalFavorite} = useReminderContext()
    return (
        <Grid container direction="column" justify="center">
            <Typography>progress {totalDone}/{totalReminder}</Typography>
            <Typography>favorite {totalFavorite}/{totalReminder}</Typography>
        </Grid>
    )
}
