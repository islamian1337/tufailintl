const express = require('express');

const app = express();
const port = 5000

app.get('/', (req, res) => {
    res.sendFile(path.join('/index.html'));
})
app.get('/message', (req, res) => {
    res.send({
        message: "Hello World!"
    })
})

app.listen(port, () => {
    console.log(`Server started at ${port}`);
})