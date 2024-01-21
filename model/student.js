const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const StudentSchema = new Schema({
    firstName: {
        type: String,
        required: true,
       
    },
    lastName: {
        type: String,
        required: true,
       
    },
    address:{
        type:String
        
    },
    dateOfBirth:{
        type:String
        
    },
    class:{
        type:String
        
    },
    guardianName:{
        type:String
    } , 
    guardianContact:{
        type:String
    },
    roll:{
        type:String
    }
    
},{
    timestamps:true
}
)


module.exports = mongoose.model("Student", StudentSchema)