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
  req.url = req.url.replace('/api', '');
  req.originalUrl = req.originalUrl.replace('/api', '');
  if (req.path) {
    req.path = req.path.replace('/api', '');
  }
  apiProxy.web(req, res, {
    target: 'http://0.0.0.0',
  });
});

app.all("*", (req, res) => {
  // front end server / react
  apiProxy.web(req, res, {
    target: 'http://0.0.0.0:4000',
  });
});

app.listen(port, () => console.log(`Gateway on port ${port}!`))
