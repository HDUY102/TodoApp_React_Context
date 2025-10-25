'use client'
import { Task, TypeFilter } from "@/app/components/generic/todoItem";
import { useTodo } from "@/hooks/Todo/useTodo";
import { createContext, useContext } from "react";

type TodoContextType = ReturnType<typeof useTodo>

const TodoContext =  createContext<TodoContextType | null>(null)

export const TodoProvider = ({children} : {children:React.ReactNode}) => {
    const todo = useTodo()
    return (
        <TodoContext.Provider value={todo}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodoContext = () => {
    const context = useContext(TodoContext)
    if(!context) throw new Error('useTodoContext must be used within TodoProvider')
    return context
}