const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors = require('cors');


const usersRoute=require('./routes/users.route')
const usersPostsRoute=require('./routes/usersposts.route')

mongoose
  .connect('mongodb://127.0.0.1:27017/VeteranMeet')
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })
//middleware code
app.use(cors());
app.use(express.json());
app.use("/users",usersRoute)
app.use("/posts",usersPostsRoute)

app.listen(4000,()=>{
    console.log("Running !")
})