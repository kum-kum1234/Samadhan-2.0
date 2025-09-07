import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Task = ({ task, index }) => {
    return (
        <Draggable draggableId={task._id} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`task ${snapshot.isDragging ? 'dragging' : ''}`}
                >
                    {task.content}
                </div>
            )}
        </Draggable>
    );
};

export default Task;
