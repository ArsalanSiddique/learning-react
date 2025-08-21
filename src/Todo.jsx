import { Card, Button, ListGroup, Stack, Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrash, faUndo } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

function Todo() {

    const [taskTitle, setTaskTitle] = useState("");
    const [tasks, setTasks] = useState([]);
    const [nextId, setNextId] = useState(1);

    function addTask() {

        if (!taskTitle.trim()) return;

        setTasks([...tasks, {
            'id': nextId,
            'title': taskTitle,
            'isCompleted': false
        }]);

        setTaskTitle("");
        setNextId(nextId + 1);
    }

    function toggleTaskCompleted(taskId) {
        setTasks(
            tasks.map((task) =>
                task.id === taskId
                    ? { ...task, isCompleted: !task.isCompleted }
                    : task
            )
        );
    }

    function deleteTask(taskId) {
        setTasks(tasks.filter((task) => task.id != taskId));
    }


    return (
        <div>
            <Card className="shadow-sm mt-5">
                <Card.Body>
                    <Card.Title className="text-center mb-4">Todo App</Card.Title>

                    {/* Task Add Button */}
                    <InputGroup className="mb-4">
                        <Form.Control type="text" placeholder="Enter your task..."
                            value={taskTitle}
                            onChange={(event) => setTaskTitle(event.target.value)}
                            onKeyDown={(event) => { event.key === "Enter" && addTask() }} />
                        <Button variant="primary" onClick={addTask}>Add</Button>
                    </InputGroup>

                    {/* Task list */}
                    <ListGroup variant="flush">
                        {

                            tasks.map((task) => {
                                return (
                                    <ListGroup.Item key={task.id}>
                                        <div className="d-flex justify-content-between align-items-start">
                                            <div className={task.isCompleted ? 'text-decoration-line-through' : ''} style={{ flex: 1, wordWrap: 'break-word' }}>
                                                {task.title}
                                            </div>
                                            <Stack direction="horizontal" gap={2} className="ms-3">

                                                {
                                                    task.isCompleted ? (
                                                        <Button size="sm" variant="danger"
                                                            onClick={() => { toggleTaskCompleted(task.id) }}>
                                                            <FontAwesomeIcon icon={faUndo} className="me-1" />
                                                        </Button>
                                                    ) : (
                                                        <>
                                                            <Button size="sm" variant="success"
                                                                onClick={() => { toggleTaskCompleted(task.id) }}>
                                                                <FontAwesomeIcon icon={faCheck} className="me-1" />
                                                            </Button>
                                                            <Button size="sm" variant="danger"
                                                                onClick={() => { deleteTask(task.id) }}>
                                                                <FontAwesomeIcon icon={faTrash} className="me-1" />
                                                            </Button>
                                                        </>
                                                    )
                                                }

                                            </Stack>
                                        </div>
                                    </ListGroup.Item>
                                );
                            })
                        }
                    </ListGroup>

                </Card.Body>
            </Card>
        </div>
    );
}

export default Todo;
