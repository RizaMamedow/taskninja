import {ChangeEvent} from "react";

export interface ITask {
    id: number;
    text: string;
    isImportant: boolean;
    isCompleted: boolean;
    created_date: number;
}

export interface IListItem {
    task: ITask;

    deleteTask(taskId: number): void;
    toggleCompleteTask(taskId: number): void;
}

export interface ITaskForm {
    taskText: string;
    isValid: boolean;
    isImportant: boolean;

    validate(): void;

    textHandleChange(event: ChangeEvent<HTMLInputElement>): void;
    checkHandleChange(event: ChangeEvent<HTMLInputElement>): void;

    addTask(): void;
}