require('./db/mongoose-init');
const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const Message = require('./db/models/message.model');
const messageRouter = require('./routers/message.router');
const userRouter = require('./routers/user.router');
const app = express();
const port = 8080;

const jsonParser = bodyParser.json();
app.use(jsonParser);
app.use(cors());
app.use('/message', messageRouter);
app.use('/user', userRouter);

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);

});