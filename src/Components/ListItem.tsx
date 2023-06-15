import {IListItem} from "../Interfaces";
import React from "react";
import {Badge, Button} from "react-bootstrap";
import {FaCheck, FaMinus, FaTrash} from 'react-icons/fa';
import moment from 'moment'

const ListItem = ({task, deleteTask, completeTask}: IListItem) => {
    const ImportantBage = () => <span><Badge className="ms-2" bg="warning" text="dark" style={{fontSize: '13px'}}>Important</Badge></span>;
    const CompletedBadge = () => <span><Badge className="ms-2" bg="success" text="white" style={{fontSize: '13px'}}>Completed</Badge></span>;

    return (
        <div className="task d-flex justify-content-between align-items-center">
            <div className="content d-flex h-100" style={{
                overflow: 'hidden',
                whiteSpace: 'normal',
            }}>
                <h5>{task.text} {task.isImportant ? <ImportantBage/> : null} {task.isCompleted ? <CompletedBadge/> : null}</h5>
            </div>

            <div className="d-flex flex-column justify-content-between align-items-end" style={{minWidth: '220px'}}>
                <div className="d-flex flex-row">
                    {!task.isCompleted ?
                        <Button variant="success" className="pt-1" onClick={() => { completeTask(task.id) }}><FaCheck/> Complete</Button>
                        : <Button variant="secondary" className="pt-1" onClick={() => { completeTask(task.id) }}><FaMinus/> Uncomplete</Button>}
                    <Button variant="danger" className="ms-1 pt-1" onClick={() => { deleteTask(task.id) }}><FaTrash/> Delete</Button>
                </div>
                <p className="mb-0 text-secondary mt-2" style={{fontSize: "10px"}}>{moment(task.created_date).format('D MMM YYYY HH/MM/SS')}</p>
            </div>
        </div>
    )
};

export default ListItem;