const express = require("express");
const cors = require("cors");
const app = express();
const whoamiApi = require("./routes/api/whoami");

app.use(
  cors({
    optionsSuccessStatus: 200
  })
);

app.use("/api/whoami", whoamiApi);

const PORT = process.env.PORT || 5000;
app.listen(PORT, err => {
  if (err) throw err;
  console.log("> Server is listening on PORT " + PORT);
});
