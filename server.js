const express = require("express");
const connect = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const uploadRoutes = require("./routes/adminRoutes");
const contactRoutes =require('./routes/contactRoutes');
const path = require('path');
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.use(express.static(path.join(__dirname,'/client/build/')));
app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});


//database connection
connect();
//middlewares
app.use(express.json());


//routes
app.use('/',userRoutes);
app.use('/',uploadRoutes);
app.use('/',contactRoutes);



app.listen(port,()=>{
    console.log(`App is running in port : ${port}`);
})
