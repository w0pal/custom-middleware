const express = require('express')
const app = express()
const userRouter = require('./routes/user-route')
const userLogger = require('./middlewares/logger')

app.use(express.json())
app.use(userLogger)
app.use('/api/student',userRouter)
const port = 4000

app.listen(port, ()=>{
    console.log
    (`Server run at http://localhost:${port}/api/student`);
})