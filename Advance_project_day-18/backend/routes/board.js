const express = require('express');
const router = express.Router();
const Board = require('../models/Board');

// Seed the database with initial data if it's empty
const seedBoard = async () => {
    const count = await Board.countDocuments();
    if (count === 0) {
        const initialBoard = new Board({
            name: 'Project Alpha',
            columns: [
                { name: 'To Do', tasks: [{ content: 'Learn MERN Stack' }, { content: 'Build a Trello Clone' }] },
                { name: 'In Progress', tasks: [{ content: 'Styling the App' }] },
                { name: 'Done', tasks: [{ content: 'Setup Project Structure' }] },
            ]
        });
        await initialBoard.save();
        console.log('Board seeded!');
    }
};
seedBoard();


// GET the board
router.get('/', async (req, res) => {
    try {
        const board = await Board.findOne(); // Since we only have one board
        res.json(board);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// PUT to move a task
router.put('/move', async (req, res) => {
    const { source, destination, draggableId } = req.body;
    try {
        const board = await Board.findOne();

        // Find source and destination columns
        const sourceColumn = board.columns.id(source.droppableId);
        const destColumn = board.columns.id(destination.droppableId);

        // Find the task to move
        const taskToMove = sourceColumn.tasks.id(draggableId);
        
        // Remove task from source column
        sourceColumn.tasks.pull(draggableId);

        // Add task to destination column at the correct index
        destColumn.tasks.splice(destination.index, 0, taskToMove);

        await board.save();

        // Broadcast the update to all clients
        req.io.emit('boardUpdated', board);

        res.json(board);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});


module.exports = router;
