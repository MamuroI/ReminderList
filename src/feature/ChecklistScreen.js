import React from 'react'
import { withController } from '../hoc/withController';
import Checklist from './Checklist';
import Input from './Input';
import { ReminderController } from './ReminderController';
import Summary from './Summary';


function ChecklistScreen() {
    return (
        <div>
            <Input />
            <Checklist />
            <Summary />
        </div>
    )
}

export default withController(ReminderController)(ChecklistScreen)
