import React, { useContext, useState,useEffect } from 'react'

export const ReminderContext = React.createContext();

export const useReminderContext = () => useContext(ReminderContext)

const mockupChecklist = [
    {title:"test1",isDone:true,isFav:false},
    {title:"test2",isDone:false,isFav:true},
    {title:"test3",isDone:true,isFav:true},
]




export const ReminderController = ({children}) => {
    const [reminderList, setReminderList] = useState(mockupChecklist)
    const [taskInput, setTaskInput] = useState("")
    const [editingIndex, setEditingIndex] = useState(-1)
    const [totalReminder, setTotalReminder] = useState()
    const [totalFavorite, setTotalFavorite] = useState()
    const [totalDone, setTotalDone] = useState()

    useEffect(() => {
        setTotalReminder(reminderList.length)
        setTotalFavorite(reminderList.filter(m=>m.isFav).length)
        setTotalDone(reminderList.filter(m=>m.isDone).length)
    }, [reminderList])
    
    const onSave = () => {
        if (!taskInput) return;
        if(editingIndex === -1){
            setReminderList([
                ...reminderList,
                {
                title: taskInput, isDone: false, isFav:false
                }
            ])
        }
        else{
            let tmp = reminderList
            tmp[editingIndex] = {
                ...tmp[editingIndex],
                title: taskInput
            }
            setReminderList([...tmp])
            setEditingIndex(-1)
        }
        setTaskInput("")
    }
    
    const onDelete = (item) => {
        setReminderList([
            ...reminderList.filter(m=>m !==item)
        ])
    }

    const onEdit = (item) =>{
        setTaskInput(item.title)
        const findEditingIndex = reminderList.findIndex(m=>m === item)
        setEditingIndex(findEditingIndex)
    }

    const onClickFavorite = (item) => {
        const findEditingIndex = reminderList.findIndex(m=>m === item)
        let tmp = reminderList
        tmp[findEditingIndex] = {
            ...tmp[findEditingIndex],
            isFav: !tmp[findEditingIndex].isFav
        }
        setReminderList([...tmp])
    }

    const onClickDone = (item) => {
        const findEditingIndex = reminderList.findIndex(m=>m === item)
        let tmp = reminderList
        tmp[findEditingIndex] = {
            ...tmp[findEditingIndex],
            isDone: !tmp[findEditingIndex].isDone
        }
        setReminderList([...tmp])
    }

    return (
        <ReminderContext.Provider value={{ 
            taskInput, setTaskInput,
            reminderList,setReminderList,

            onSave,onDelete,onEdit,onClickFavorite,onClickDone,
            totalDone,totalFavorite,totalReminder
         }}>
             { children }
        </ReminderContext.Provider>
    )
}


