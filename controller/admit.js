const Student = require("../model/student")

const admit = async (req, res) => {
    
    try {

        const data = await Student.create(req.body)
        console.log(data)
        res.send(data)
    }catch(err){
        console.log(err)
    }
}
const getStudent = async (req, res) => {
    console.log(req.query.id)
    const id = req.query.id;
    try {

        const data = await Student.findById(`${id}`)
       console.log(data)
        res.status(200).send(data)
    }catch(err){
        console.log(err)
    }
}
const total = async (req, res) => {
    
    try {

        const data = await Student.countDocuments()
        console.log(data)
        res.status(200).send({count:data})
    }catch(err){
        console.log(err)
    }
}

module.exports = { admit,getStudent,total }