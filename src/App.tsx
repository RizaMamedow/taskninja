import React, {ChangeEvent, useState} from 'react';
import {Container, Row, Col, Alert, ListGroup} from 'react-bootstrap';
import {ITask} from './Interfaces';
import {TodoForm} from './Components/TodoForm';
import ListItem from "./Components/ListItem";
import BrandSide from "./Components/BrandSide";
import AboutSide from "./Components/AboutSide";


const App: React.FC = () => {
    const [task, setTask] = useState<string>("");
    const [todoList, setTodoList] = useState<ITask[]>([]);
    const [isValid, setIsValid] = useState<boolean>(false);

    const validate = (): void => {
        if (task != '') {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        validate();
        if (event.target.name === "taskInput") {
            setTask(event.target.value);
        }
    };

    const addTask = (): void => {
        const newTask: ITask = {
            id: todoList.length + 1,
            text: task,
            isImportant: false,
            created_date: Date.now(),
        };
        setTodoList([...todoList, newTask]);
        setTask("");
    };

    const deleteTask = (taskIdToDelete: number) => {
        setTodoList(todoList.filter((task) => {
            return task.id != taskIdToDelete
        }))
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
                            <TodoForm taskText={task} addTask={addTask} handleChange={handleChange} isValid={isValid}
                                      validate={validate}/>
                        </Alert>
                        <Alert variant="light">
                            <AboutSide/>
                        </Alert>
                    </Col>
                    <Col xs={12} md={9}>
                        {todoList.length != 0 ? (
                            <>
                                <h2>Tasks:</h2>
                                <ListGroup>
                                    {todoList.map((task: ITask, key: number) => {
                                        return <ListGroup.Item key={key}>
                                            <ListItem task={task} deleteTask={deleteTask}/>
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


