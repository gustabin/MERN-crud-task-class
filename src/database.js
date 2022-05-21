const mongoose = require('mongoose');

const usuario = "youtube_prueba";
const password = "Exito258";
const dbName = "mern-stack";

const URI = `mongodb+srv://${usuario}:${password}@cluster0.uau4h.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(db=>console.log('DB is connected'))
.catch(err=>console.error(err));

module.exports=mongoose;