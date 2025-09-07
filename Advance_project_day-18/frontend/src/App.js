import React, { useState, useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './components/Column';
import io from 'socket.io-client';

const socket = io('http://localhost:4000');

function App() {
    const [boardData, setBoardData] = useState(null);

    useEffect(() => {
        // Fetch initial board data
        const fetchBoard = async () => {
            const res = await fetch('http://localhost:4000/api/board');
            const data = await res.json();
            setBoardData(data);
        };
        fetchBoard();

        // Listen for real-time updates
        socket.on('boardUpdated', (newBoardData) => {
            setBoardData(newBoardData);
        });

        // Clean up socket connection
        return () => socket.disconnect();
    }, []);

    const onDragEnd = (result) => {
        const { source, destination, draggableId } = result;

        if (!destination) return;
        if (source.droppableId === destination.droppableId && source.index === destination.index) return;
        
        // Optimistic UI Update
        const sourceColumn = boardData.columns.find(c => c._id === source.droppableId);
        const destColumn = boardData.columns.find(c => c._id === destination.droppableId);
        const task = sourceColumn.tasks.find(t => t._id === draggableId);

        // Create a deep copy to avoid mutation issues
        const newBoardData = JSON.parse(JSON.stringify(boardData));
        const newSourceCol = newBoardData.columns.find(c => c._id === source.droppableId);
        const newDestCol = newBoardData.columns.find(c => c._id === destination.droppableId);

        // Remove from old column
        newSourceCol.tasks.splice(source.index, 1);
        // Add to new column
        newDestCol.tasks.splice(destination.index, 0, task);
        
        setBoardData(newBoardData);

        // Send move to backend
        fetch('http://localhost:4000/api/board/move', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ source, destination, draggableId })
        });
    };

    if (!boardData) return <div>Loading...</div>;

    return (
        <div className="app-container">
            <h1>{boardData.name}</h1>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="board-container">
                    {boardData.columns.map(column => (
                        <Column key={column._id} column={column} />
                    ))}
                </div>
            </DragDropContext>
        </div>
    );
}

export default App;
