// console.log("bismillah");
const express = require("express");
const app = express();
const port = 3001;

app.use(() => {
  console.log("bismillah");
  console.log("bismillah maneh");
  console.log("bismillah manehhhhh");
});
app.listen(port);
