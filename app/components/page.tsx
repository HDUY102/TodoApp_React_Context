'use client'
import React from 'react'
import TodoInput from './TodoInput'
import TodoFooter from './TodoFooter'
import TodoList from './TodoList'
import TodoHeader from './TodoHeader'
import { initialFilterTasks  } from '../data/initialTasks'
import { useTodo } from '@/hooks/Todo/useTodo'

export default function TodoPage() {
    const {currentFilteredTasks,
        onSubmitTaskHandler, onFilterChangeHandler, onToggleCompletedHandler, onDeletedDoneTasksHandler, onDeletedAllTasksHandler, onEditedTaskHandler, onDeletedTasksHandler} = useTodo()

    return (
    <div className='grid grid-cols-[200px_1fr_200px] grid-rows-[200px_1fr_200px] h-screen text-black'>
        <div className='col-start-2 row-start-1 mt-3'>
            <TodoInput onSubmitTask={onSubmitTaskHandler}/>
        </div>
        <div className='col-start-2 row-start-2 mt-3'>
            <div className='grid'>
                <span className='text-center'>Todo List</span>
                <TodoHeader filters={initialFilterTasks} onFilterChange={onFilterChangeHandler}/>
                <TodoList displayTasks={currentFilteredTasks} onToggleCompleted={onToggleCompletedHandler} onEditedTask={onEditedTaskHandler} onDeletedTask={onDeletedTasksHandler}/>
            </div>
        </div>
        <div className='col-start-2 row-start-3'>
            <TodoFooter onDeleteAllTasks={onDeletedAllTasksHandler} onDeleteDoneTasks={onDeletedDoneTasksHandler}/>
        </div>
    </div>
    )
}