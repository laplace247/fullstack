const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', userRoutes);
app.listen(3006, () => {
 console.log('Servidor ejecutándose en http://localhost:3006');
});