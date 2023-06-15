import React, {ChangeEvent, useEffect, useState} from 'react';
import {Container, Row, Col, Alert, ListGroup} from 'react-bootstrap';

import {ITask} from './Interfaces';
import {TodoForm} from './Components/TodoForm';
import ListItem from "./Components/ListItem";
import BrandSide from "./Components/BrandSide";
import AboutSide from "./Components/AboutSide";


const App: React.FC = () => {
    const [task, setTask] = useState<string>("");
    const [isImportant, setIsImportant] = useState<boolean>(false);
    const [tasksList, setTasksList] = useState<ITask[]>([]);
    const [isValid, setIsValid] = useState<boolean>(false);

    useEffect(() => {
        getTasks();
    });

    const validate = (): void => {
        if (task !== '') {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    };

    const textHandleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        validate();
        if (event.target.name === "taskInput") {
            setTask(event.target.value);
        }
    };

    const checkHandleChange = (): void => {
        setIsImportant(!isImportant);
    };

    // Create
    const addTask = () => {
        let requestOptions: RequestInit = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text: task,
                isImportant: isImportant,
                isCompleted: false,
                created_date: Date.now(),
            })
        };

        fetch("http://localhost:3030/tasks", requestOptions)
            .then((response) => response.json())
            .then((result) => {console.log(`Created '${result.text}' task`)})
            .catch((error) => console.log("error", error));

        setTask('');
    };

    // Read
    const getTasks = () => {
        let requestOptions: RequestInit = {
            method: "GET",
            redirect: "follow",
        };
    };

    // Delete
    const deleteTask = (tasksId: number) => {
        let requestOptions: RequestInit = {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
        };

        fetch(`http://localhost:3030/tasks/${tasksId}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {console.log(`Deleted task`)})
            .catch((error) => console.log("error", error));
    };

    // Update
    const completeTask = (tasksId: number) => {
        let task = tasksList.filter((task) => {
            return task.id === tasksId
        })[0];
        let requestOptions: RequestInit = {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text: task.text,
                isImportant: task.isImportant,
                isCompleted: !task.isCompleted,
                created_date: task.created_date,
            })
        };
        fetch(`http://localhost:3030/tasks/${tasksId}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {console.log(`Completed '${result.text}' task`)})
            .catch((error) => console.log("error", error));
    };

    return (
        <div className="App">
            <Container className="mt-4">
                <Row>
                    <Col xs={12} md={3}>
                        <Alert variant="light">
                            <BrandSide/>
                        </Alert>
                        <Alert variant="light">
                            <TodoForm taskText={task} isImportant={isImportant} addTask={addTask}
                                      textHandleChange={textHandleChange} checkHandleChange={checkHandleChange}
                                      isValid={isValid} validate={validate}/>
                        </Alert>
                        <Alert variant="light">
                            <AboutSide/>
                        </Alert>
                    </Col>
                    <Col xs={12} md={9}>
                        {tasksList.length !== 0 ? (
                            <>
                                <h2>Tasks:</h2>
                                <ListGroup>
                                    {tasksList.map((task: ITask, key: number) => {
                                        return <ListGroup.Item key={key}>
                                            <ListItem task={task} deleteTask={deleteTask} completeTask={completeTask}/>
                                        </ListGroup.Item>
                                    })}
                                </ListGroup>
                            </>
                        ) : (
                            <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                                <h2 style={{fontWeight: 700}}>No Tasks</h2>
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default App;
