const express = require('express');
const path = require('path');
const app = express();
const port = 3030;

app.use(express.static('public'));

app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', 'index.html')))
app.get('/login.html', (req,res) => res.sendFile(path.join(__dirname, 'views', 'login.html')))
app.get('/productCart.html', (req,res) => res.sendFile(path.join(__dirname, 'views', 'productCart.html')))
app.get('/productDetail.html', (req,res) => res.sendFile(path.join(__dirname, 'views', 'productDetail.html')))
app.get('/register.html', (req,res) => res.sendFile(path.join(__dirname, 'views', 'register.html')))

app.listen(port, ()=> console.log('Server running in http://localhost:' + port));
