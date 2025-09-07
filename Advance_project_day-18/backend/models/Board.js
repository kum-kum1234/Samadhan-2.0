const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BoardSchema = new Schema({
    name: { type: String, default: 'Main Board' },
    columns: [{
        name: String,
        tasks: [{
            content: String
        }]
    }]
});

module.exports = mongoose.model('Board', BoardSchema);
