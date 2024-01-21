const mongoose=require("mongoose")
const URI="mongodb+srv://tamangarjun9841:cNrxtgp7ThG68bYX@cluster0.kh9c5du.mongodb.net/Attendace?retryWrites=true&w=majority"

mongoose.connect(URI)
.then(() => console.log('DB Connected!'));