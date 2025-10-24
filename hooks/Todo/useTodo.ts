'use client'
import { Task, TypeFilter } from '@/app/components/generic/todoItem'
import { initialTasks } from '@/app/data/initialTasks'
import { useEffect, useState } from 'react'

export function useTodo (){
    const [currentFilter, setCurrentFilter] = useState<TypeFilter>('All')
    const [tasks,setTasks] = useState<Task[]>(initialTasks)
    const [currentFilteredTasks,setCurrentFilteredTasks] = useState<Task[]>(initialTasks)

    // Filter state task
    const onFilterChangeHandler = (filter: TypeFilter) => (
        setCurrentFilter(filter)
    )

    // Update display tasks
    useEffect(()=>{
        setCurrentFilteredTasks(filteredTasks())
    },[tasks,currentFilter])

    // Filter Tasks
    const filteredTasks = ():Task[] =>{
        switch(currentFilter){
            case 'Todo':
                return tasks.filter(task => !task.isCompleted && !task.isDeleted)
            case 'Done':
                return tasks.filter(task => task.isCompleted && !task.isDeleted)
            case 'All':
            default:
                return tasks.filter(task => !task.isDeleted)
        }
    }

    // Delete Done Task
    const onDeletedDoneTasksHandler = () => {
        setTasks(prevTasks => 
            prevTasks.map(task => 
                (task.isCompleted && !task.isDeleted) ? {...task, isDeleted: true} :task))
    }

    // Delete All Task
    const onDeletedAllTasksHandler = () => {
        setTasks(prevTasks =>
            prevTasks.map(task => 
                !task.isDeleted ? {...task, isDeleted: true} : task))
    }

    // Toggle Task Completed
    const onToggleCompletedHandler = (id: number) => {
        setTasks(prevTasks =>
            prevTasks.map(task => 
                task.id === id ? {...task, isCompleted: !task.isCompleted} : task))
    }

    // Edit a Task
    const onEditedTaskHandler = (id: number, title: string) => {
        setTasks(prevTasks => 
            prevTasks.map(task => 
                task.id === id ? {...task, title: title} : task))
    }

    // Delete a Task
    const onDeletedTasksHandler = (id: number) => {
        setTasks(prevTasks =>
            prevTasks.map(task => 
                task.id === id ? {...task, isDeleted: true} : task))
    }

    // Submit a Task
    const onSubmitTaskHandler = (title: string) => {
        setTasks(prevTasks => 
            [...prevTasks, {id: prevTasks.length+1, title: title, isCompleted: false, isDeleted: false}]
        )
    }

    return {
        currentFilteredTasks,
        onFilterChangeHandler,
        onDeletedDoneTasksHandler,
        onDeletedAllTasksHandler,
        onToggleCompletedHandler,
        onEditedTaskHandler,
        onDeletedTasksHandler,
        onSubmitTaskHandler
    }
}