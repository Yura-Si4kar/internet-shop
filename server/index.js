require('dotenv').config()
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandingMiddleWare');
const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);

// Обробка помилок, останній MiddleWare
app.use(errorHandler);

const start = async () => {
    try {
        await sequelize.authenticate(); // функція з допомогою якої відбувається підключення до БД
        await sequelize.sync(); // функція звіряє стан БД із схумою даних
        app.listen(PORT, () => { console.log(`server start on port ${PORT}`) });
    } catch (error) {
        console.log(error);
    }
}

start();