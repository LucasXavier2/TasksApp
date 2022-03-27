const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
}, (error) => {
    if(!error) return console.log('Connected to database')
    return console.error('Failed to connect to database:\n', error)
})