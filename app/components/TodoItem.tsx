'use client'
import React, { useEffect, useState } from 'react'
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { Task } from './generic/todoItem';
import { useTodoContext } from '@/context/TodoContext';

export default function TodoItem ({task}:{ task: Task }) {
    const {onToggleCompletedHandler, onDeletedTasksHandler, onEditedTaskHandler} = useTodoContext()
    const [isEditing, setIsEditing] = useState(false)
    const [editTask, setEditTask] = useState(task.title)

    useEffect(() => {
        if (isEditing)  setEditTask(task.title)
    }, [isEditing, task.title])

    const editSaveHandler = () => {
        onEditedTaskHandler(task.id, editTask)
        setIsEditing(false)
    }
    
    const cancelEditHandler = () => {
        setEditTask(task.title)
        setIsEditing(false)
    }

    const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') editSaveHandler()
        else if (e.key === 'Escape') cancelEditHandler()
    }

    return (
    <div className='flex justify-between items-center border'>
        <div className='ml-4 '>
            {isEditing ? 
                (<input value={editTask} onChange={(e) => setEditTask(e.target.value)}
                    onKeyDown={keyDownHandler} autoFocus className='p-1 border focus:border-blue-500 focus:outline-none focus:rounded-md'/>) 
            : (task?.isCompleted ? 
                <span className='line-through text-red-500'>{task?.title}</span> : <span>{task?.title}</span>)}
        </div>
        <div>
            <button className='m-3 hover:cursor-pointer'>
                <input checked={task?.isCompleted} onChange={() => onToggleCompletedHandler(task.id)} type="checkbox" />
            </button>
            <button onClick={() => {setIsEditing(!isEditing) }} className='text-yellow-400 m-3 hover:cursor-pointer hover:text-yellow-300'>
                <FaPencilAlt />
            </button>
            <button onClick={() => onDeletedTasksHandler(task.id)} className='text-red-400 m-3 hover:cursor-pointer hover:text-red-300'>
                <FaTrash />
            </button>
        </div>
    </div>
    )
}