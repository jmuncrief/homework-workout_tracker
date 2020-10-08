const express = require("express")
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

require("./routes/html-routes.js")(app)
require("./routes/api-routes.js")(app)

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
})