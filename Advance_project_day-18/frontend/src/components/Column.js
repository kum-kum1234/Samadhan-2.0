import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';

const Column = ({ column }) => {
    return (
        <div className="column">
            <h2>{column.name}</h2>
            <Droppable droppableId={column._id}>
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className={`task-list ${snapshot.isDraggingOver ? 'dragging-over' : ''}`}
                    >
                        {column.tasks.map((task, index) => (
                            <Task key={task._id} task={task} index={index} />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
};

export default Column;
