import React from 'react'
import {  TaskFilter, TypeFilter } from './generic/todoItem'

interface TodoHeaderProp{
    filters: TaskFilter[]
    onFilterChange: (type: TypeFilter) => void
}

const TodoHeader = ({filters,onFilterChange}:TodoHeaderProp) => {
  return (
    <div className='grid grid-rows-1 grid-cols-3 '>
      {filters?.map((filter) => (
        <button onClick={() => onFilterChange(filter.type)} key={filter.key} className="hover:cursor-pointer p-3 text-white m-3 items-center bg-blue-500">{filter.label}</button>
      ))}
    </div>
  )
}

export default TodoHeader