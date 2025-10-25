import React from 'react'
import TodoItem from './TodoItem'
import { useTodoContext } from '@/context/TodoContext'

const TodoList = () => {
  const {currentFilteredTasks } = useTodoContext()
  return (
    <div>
      {currentFilteredTasks?.map((task) => (
        <TodoItem key={task.id} task={task}/>
      ))}
    </div>
  )
}

export default TodoList