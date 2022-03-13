const path = require('path');

exports.homePage = (req, res) => {
  const pathFile = path.join(__dirname, '../views/index.html');
  res.sendFile(pathFile);
};

exports.sayHello = (req, res) => {
  res.json({ greeting: 'hello API' });
};

exports.getUserInfo = (req, res) => {
  res.json({
    ipaddress: req.ip,
    language: req.headers['accept-language'],
    software: req.headers['user-agent'],
  });
};
