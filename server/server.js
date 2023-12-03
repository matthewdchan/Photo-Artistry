 // database variables
const express = require('express');
const server = express();
const mongoose = require('mongoose');
const cors = require('cors');
const arts = require('./routes/arts');
const port = process.env.PORT || 4000; // default port

// connecting to the database
server.use(cors({ origin: true, credentials: true }));
server.use(express.json( { extended: false }));
server.use('/arts', arts);

const conn_str = `mongodb+srv://peppapigs0:21xXzYZY0PKyWopi@cluster0.deaupvj.mongodb.net/?retryWrites=true&w=majority`;
mongoose.set('strictQuery', false);




mongoose.connect(conn_str)
  .then(() => {
      server.listen(port);
      console.log("\nMongoDB connection successful...");
    })
    .catch((err) => {
        console.log(`Error in DB connection ${err}`);
    });
