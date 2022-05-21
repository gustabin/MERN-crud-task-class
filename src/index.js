const express = require('express');
const morgan = require('morgan');
const { mongoose } = require('./database');

const path = require('path');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middleware
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/tasks', require('./routes/task.routes'));

// Static files
// console.log(path.join(__dirname, '/public'));
app.use(express.static(path.join(__dirname, '/public')))


// Starting de server
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
})