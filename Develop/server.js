const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
//const htmlRoutes = require("./routes/html-routes");
//const apiRoutes = require("./routes/api-routes");

//Call to Routes app functions 
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use("/api", api-routes);
app.use("/", html-routes)


//listening for requests on port to start server 
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
})