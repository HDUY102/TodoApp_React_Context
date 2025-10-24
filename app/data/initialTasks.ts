import { Task, TaskFilter } from "@/app/components/generic/todoItem";

export const initialTasks:Task[] = [
    {id: 1, title: 'A', isCompleted: true, isDeleted:false},
    {id: 2, title: 'V', isCompleted: true, isDeleted:false},
    {id: 3, title: 'B', isCompleted: false, isDeleted:false},
    {id: 4, title: 'C', isCompleted: false, isDeleted:true},
]

export const initialFilterTasks:TaskFilter[] = [
    {key: 1, label: 'All', type: 'All'},
    {key: 2, label: 'Done', type: 'Done'},
    {key: 3, label: 'Todo', type: 'Todo'}
]