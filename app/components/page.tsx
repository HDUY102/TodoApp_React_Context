'use client'
import React from 'react'
import TodoInput from './TodoInput'
import TodoFooter from './TodoFooter'
import TodoList from './TodoList'
import TodoHeader from './TodoHeader'
import { initialFilterTasks  } from '../data/initialTasks'

export default function TodoPage() {
    return (
        <div className='grid grid-cols-[200px_1fr_200px] grid-rows-[200px_1fr_200px] h-screen text-black'>
            <div className='col-start-2 row-start-1 mt-3'>
                <TodoInput/>
            </div>
            <div className='col-start-2 row-start-2 mt-3'>
                <div className='grid'>
                    <span className='text-center'>Todo List</span>
                    <TodoHeader filters={initialFilterTasks}/>
                    <TodoList/>
                </div>
            </div>
            <div className='col-start-2 row-start-3'>
                <TodoFooter/>
            </div>
        </div>
    )
}