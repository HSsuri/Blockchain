const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect("mongodb+srv://Ecomerece:Ecomerece@cluster0.cosjmaf.mongodb.net/Ecomerece?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
