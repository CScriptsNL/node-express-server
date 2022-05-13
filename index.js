if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require("express");

const port = 3000;
const app = express();

app.get('/', function(request, response) {
  response.send("Hello from your server");
  console.log(request.url);
});

app.listen(port, () => console.log("Server is running on port " + port));
