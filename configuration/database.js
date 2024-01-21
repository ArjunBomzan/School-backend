const mongoose=require("mongoose")

const URI="mongodb+srv://tamangarjun9841:Arjun@cluster0.kh9c5du.mongodb.net/?retryWrites=true&w=majority"
// const uri='mongodb://127.0.0.1:27017'
mongoose.connect(URI)
.then(() => console.log('DB Connected!'));
