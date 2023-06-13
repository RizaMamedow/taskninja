import {IListItem} from "../Interfaces";
import React from "react";
import {Badge, Button, ButtonGroup} from "react-bootstrap";
import {FaCheck, FaTrash} from 'react-icons/fa';
import moment from 'moment'

const ListItem = ({task, deleteTask}: IListItem) => {

    return (
        <div className="task d-flex justify-content-between align-items-center">
            <div className="content d-flex">
                <h5>{task.text} {task.id}</h5>
                <span>
                    <Badge className="ms-2" bg="warning" text="dark">Important</Badge>
                </span>
            </div>

            <div className="d-flex flex-column justify-content-between align-items-end">
                <Button variant="danger" className="pt-1" onClick={() => {
                    deleteTask(task.id)
                }}><FaTrash/> Delete</Button>
                <p className="mb-0 text-secondary mt-2" style={{fontSize: "10px"}}>{moment(task.created_date).format('D MMM YYYY HH/MM/SS')}</p>
            </div>
        </div>
    )
};

export default ListItem;