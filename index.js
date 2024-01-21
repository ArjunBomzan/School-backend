const express = require('express')
const cors=require('cors')
require("./configuration/database")
const router=require("./routes/user")
const studentroute=require("./routes/student")
const Attendance=require("./routes/attendance")
const app = express()
app.use(express.json())
app.use(cors())
app.use(router)
app.use(studentroute)
app.use(Attendance)

const PORT=8000
  app.listen(PORT,()=>{
    console.log("server is listening at port "+PORT)
})