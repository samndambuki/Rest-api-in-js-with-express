//importing the express framework
const express = require("express");

//initiating the express app
const app = express();

//telling it the port to listen on
const port = 3000;

//running a get method
app.get("/", (req, res) => {
  //respond with this text

  //once this endpoint is hit, this will be the response
  res.send("Hello Sam");
});

//tell which port to basically listen on
app.listen(port, () =>
  console.log(`Running the sample app. We are listening on port ${port}`)
);
