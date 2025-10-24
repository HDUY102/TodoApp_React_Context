export interface Task{
    id: number;
    title: string;
    isCompleted: boolean;
    isDeleted: boolean;
}

export interface TaskList{
    tasksList: Task[]
}

export type TypeFilter = 'All' | 'Todo' | 'Done'

export interface TaskFilter{
    key: number;
    label: string;
    type: TypeFilter;
}