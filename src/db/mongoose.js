const mongoose = require('mongoose')

const dbURL = 'mongodb://127.0.0.1:27017/task-manager-api';

mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
}, (error) => {
    if(!error) return console.log('Connected to database')
    return console.error('Failed to connect to database:\n', error)
})