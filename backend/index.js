const express = require('express')
const cors=require('cors');
const app = express();
app.use(cors());
app.use(express.json())
const dotenv=require('dotenv')
const mongoose=require('mongoose')
dotenv.config();
const bookRoute=require('./route/book.route.js')
const userRoute=require('./route/user.route.js')
const PORT=process.env.PORT || 3000;
const MONGODB_URL=process.env.MONGODB_URL;
try {
    mongoose.connect(MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    console.log("connected to mongodb successfully")
} catch (error) {
    console.log("connection failed")
    
}
app.use("/user",userRoute);
app.use("/book",bookRoute)
// app.get('/', (req, res) => {
//   res.send('hello world1')
// })

app.listen(PORT,()=>{
    console.log("server is running "+PORT)
})