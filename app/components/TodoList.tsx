import React from 'react'
import TodoItem from './TodoItem'
import { Task } from './generic/todoItem'

interface TodoListProp{
  displayTasks: Task[]
  onToggleCompleted: (id: number) => void
  onEditedTask: (id: number, title: string) => void
  onDeletedTask: (id: number) => void
}

const TodoList = ({displayTasks, onToggleCompleted, onDeletedTask, onEditedTask}:TodoListProp) => {
  return (
    <div>
      {displayTasks?.map((task) => (
        <TodoItem key={task.id} task={task} onToggleCompleted={onToggleCompleted} onDeletedTask={onDeletedTask} onEditedTask={onEditedTask}/>
      ))}
    </div>
  )
}

export default TodoList