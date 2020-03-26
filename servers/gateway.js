const express = require('express');
const httpProxy = require('express-http-proxy');
const app = express();
const port = 5000;

app.use("/api", httpProxy("http://" + (process.env.API_HOST || "0.0.0.0")));
app.use("/", httpProxy("http://0.0.0.0:4000"));

app.listen(port, () => console.log(`Gateway on port ${port}!`))
