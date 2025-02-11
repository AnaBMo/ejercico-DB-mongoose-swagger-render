
const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 3000;

const { dbConnection } = require('./config/config');
const routes = require('./routes');


const swaggerUI = require('swagger-ui-express'); //Importamos swaggerUi
const docs = require('./docs/index'); // Importamos el index.js de la carpeta docs


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', routes);

// Creamos una ruta para poder ver la documentación creada
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs));

dbConnection();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));