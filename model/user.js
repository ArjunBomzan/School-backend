const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        validate: {
            validator:async function (req_value) {
            
                const count = await mongoose.models.User.countDocuments({ name: req_value })
              
                if (count) {
                    return false
                } else {
                    return true
                }
            },
            message: "this username is already in use"
    
        }
    },
   
    password:{
        type:String,
        required:true,

    },
    
    profile:{
        type:String
    }
},{
    timestamps:true
}
)


module.exports = mongoose.model("User", UserSchema)