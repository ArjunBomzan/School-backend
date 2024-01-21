const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const AttendanceSchema = new Schema({
s_id:{
    type:ObjectId,
    ref:"Student",
    required:true
}},{    
    timestamps:true 
}
)


module.exports = mongoose.model("Attendance", AttendanceSchema)