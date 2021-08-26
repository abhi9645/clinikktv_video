const express = require('express');
const uploadRoute = require('./routes/upload');
var cors=require('cors');
const app = express()
// app.use(express.static('./views'))
const port = process.env.PORT || 3000
app.use(cors())
app.use(uploadRoute);
app.use(express.static('./index.html'));
app.listen(port, () => {
    console.log('Server is up on port ' + port);
})