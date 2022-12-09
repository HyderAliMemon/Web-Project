const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser')


const usersRoute=require('./routes/user.route')
const usersPostsRoute=require('./routes/user-posts.route')
const communityRoute = require('./routes/community.route')
const eventRoute = require('./routes/event.route')
const invitationRoute = require('./routes/invitation.route')

mongoose
  .connect('mongodb://127.0.0.1:27017/VeteranMeet')
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })
//middleware code

app.use(express.urlencoded({limit: '50mb'}));
app.use(bodyparser.urlencoded({extended:true,limit:'1000mb'}))
app.use(bodyparser.json({
    limit: '1000mb',
    parameterLimit: 100000
}))

app.use(bodyparser.raw({
    limit: '1000mb',
    inflate: true,
    parameterLimit: 100000
}))


app.use(cors());
app.use(express.json());
app.use("/users",usersRoute)
app.use("/posts",usersPostsRoute)
app.use("/community",communityRoute)
app.use("/event",eventRoute)
app.use("/invitation",invitationRoute)

app.listen(4000,()=>{
    console.log("Running !")
})