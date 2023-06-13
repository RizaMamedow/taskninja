import {Button, Form} from "react-bootstrap";
import React, {useEffect} from "react";
import {ITaskForm} from "../Interfaces";

export function TodoForm({taskText, isValid, handleChange, addTask, validate}: ITaskForm) {
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
                    onChange={handleChange}
                />
            </Form.Group>
            <Button variant="primary" onClick={addTask} disabled={!isValid}>Add</Button>
        </div>
    );
}