const express = require('express');
const app     = express();
const path    = require('path');

const PORT = 8080;
// app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname))
app.use(express.static('public'))

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname+'/index.html'));
// })

app.listen(PORT, () => {
    console.log('Server live on '+ PORT)
})