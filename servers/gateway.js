const express = require('express');
const httpProxy = require('http-proxy');
const app = express();
const port = 5000;

const apiProxy = httpProxy.createProxyServer();

apiProxy.on('error', (err, req, res) => {
  console.log(err)
  res.status(500).send('Proxy Error');
});

app.all("/api*", (req, res) => {
  // service1
  console.log(req.path);
  let newReq = req;
  newReq.url = newReq.url.replace('/api', '');
  newReq.originalUrl = newReq.originalUrl.replace('/api', '');
  newReq.path = newReq.path.replace('/api', '');
  apiProxy.web(newReq, res, {
    target: 'http://localhost',
  });
});

app.all("*", (req, res) => {
  // front end server / react
  apiProxy.web(req, res, {
    target: 'http://localhost:4000',
  });
});

app.listen(port, () => console.log(`Gateway on port ${port}!`))
