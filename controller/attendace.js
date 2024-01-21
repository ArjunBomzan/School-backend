const Attendance = require("../model/attendace")

const getToday = async (req, res) => {
    const today = new Date();
    const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const endOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);

    try {
        const data = await Attendance.find({ createdAt: { $gte: startOfToday, $lt: endOfToday } }).populate("s_id")
       
        res.send(data)
    } catch (err) {
        console.log(err)
    }
}
const getPredictedAttendance = async (req, res) => {
    c
    try {
        const data = await Attendance.find(req.body).populate("s_id")
       
        res.send(data)
    } catch (err) {
        console.log(err)
    }
}

const attend = async (req, res) => {

    try {

        const data = await Attendance.create(req.body)
        
        res.send(data)
    } catch (err) {
        console.log(err)
    }
}

module.exports={
    attend,getToday
}