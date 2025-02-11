//! Documentación de la información general de la API

/*
La información general de la API comprende la versión de openAPI.

El objeto info comprende un title, description, version, etc.

La información es muy recomendable para las API disponibles públicamente 
para mejorar la experiencia del desarrollador.

En nuestra API, documentamos la información general en la carpeta docs 
en el archivo basicInfo.js.

Incluiremos, entre otros, la siguiente información:
*/

module.exports = {
    openapi:"3.0.3",
    info:{
        version:"1.0.0",
        title:"Tasks",
        description: "Tasks API"
    }
};