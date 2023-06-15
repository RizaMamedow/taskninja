import {Button, Form} from "react-bootstrap";
import React, {useEffect} from "react";
import {ITaskForm} from "../Interfaces";

export function TodoForm({taskText, isImportant, isValid, textHandleChange, checkHandleChange, addTask, validate}: ITaskForm) {
    useEffect(() => {
        validate();
    });

    return (
        <div>
            <Form.Group className="mb-2">
                <Form.Label>Enter task</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    name="taskInput"
                    placeholder="Task"
                    value={taskText}
                    onChange={textHandleChange}
                />
                <Form.Check
                    className="mt-2"
                    type='checkbox'
                    label="Important"
                    name="isImportant"
                    checked={isImportant}
                    onChange={checkHandleChange}
                />
            </Form.Group>
            <Button variant="success" onClick={addTask} disabled={!isValid}>Add</Button>
        </div>
    );
}