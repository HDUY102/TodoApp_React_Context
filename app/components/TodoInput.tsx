'use client'
import React, { useRef, useState } from 'react'

interface TodoInputProp{
  onSubmitTask: (title: string) => void
}

const TodoInput = ({ onSubmitTask }:TodoInputProp) => {
  const [title, setTitle] = useState('')
  const inputRef = useRef(null)

  const keyDownSubmitHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter' && title.trim() !== '') 
    {
      onSubmitTask(title)
      setTitle('')
    }
  }

  return (
    <div className='grid grid-cols-1 grid-rows-[40px_1fr_1fr]'>
        <div className='row-start-1 text-center'>Todo Input</div>
        <div className='border p-4'>
            <div className='row-start-2 text-center border'>
                <input ref={inputRef} value={title} onKeyDown={keyDownSubmitHandler} onChange={(e) => setTitle(e.target.value)} placeholder="Add New Task" className='w-full p-3'></input>
            </div>
            <button onClick={() => { 
              if (title.trim() !== '') {
                onSubmitTask(title)
                setTitle('')}}}
              className='bg-blue-500 w-full hover:cursor-pointer mt-3 p-3 text-white'>Add new Task</button>
        </div>
    </div>
  )
}

export default TodoInput