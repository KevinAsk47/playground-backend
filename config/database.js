const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://fernandobiaus:cohort3@cluster0.9z7nr.gcp.mongodb.net/todolist?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => console.log("Database connected"))
.catch(error => console.log(error))