const express = require("express");
const app = express();
const port = 3002;
const sequelize = require("./util/database");
const cors = require('cors');

const mainRoutes = require("./routes/main");
app.use(cors());
//require("./util/seedDatabase");
//require("./util/dropValues");
sequelize
  .sync()
  .then((result) => {
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/", mainRoutes);
