const express = require('express');

const serverConfig = require('./congif/serverconfig')



const app = express();



app.listen(serverConfig.PORT, () =>{
   console.log(`server start at server ${serverConfig.PORT}.....!`);
//    console.log(process.env);
});





// 43.21.4.5/ self computer communicate LOCAL HOST:8080   socket adderess
// npx nodemon src/index.js      watching path