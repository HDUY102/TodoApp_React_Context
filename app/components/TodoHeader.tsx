import React from 'react'
import {  TaskFilter } from './generic/todoItem'
import { useTodoContext } from '@/context/TodoContext'

interface TodoHeaderProp{
  filters: TaskFilter[]
}

const TodoHeader = ({filters}:TodoHeaderProp) => {
  const {onFilterChangeHandler} = useTodoContext()
  return (
    <div className='grid grid-rows-1 grid-cols-3 '>
      {filters?.map((filter) => (
        <button onClick={() => onFilterChangeHandler(filter.type)} key={filter.key} className="hover:cursor-pointer p-3 text-white m-3 items-center bg-blue-500">{filter.label}</button>
      ))}
    </div>
  )
}

export default TodoHeader