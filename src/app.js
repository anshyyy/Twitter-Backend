const express = require('express');
const app = express();


const {PORT} = require('./config/index');


const setUpandStartServer = ()=> {
    app.listen(PORT,()=>{
        console.log(`Server Started at ${PORT}`);
    });
}

setUpandStartServer();