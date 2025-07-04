const express= require('express');
const app = express();
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(8080, () => {
    console.log('Server is running on port 8080');
});