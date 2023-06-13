import {ChangeEvent} from "react";

export interface ITask {
    id: number;
    text: string;
    isImportant: boolean;
    created_date: number;
}

export interface IListItem {
    task: ITask;

    deleteTask(taskIdToDelete: number): void;
}

export interface ITaskForm {
    taskText: string;
    isValid: boolean;

    validate(): void;

    handleChange(event: ChangeEvent<HTMLInputElement>): void;

    addTask(): void;
}