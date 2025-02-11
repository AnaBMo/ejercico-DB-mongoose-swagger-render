//! Este archivo exportará todo lo que vamos a ir creando en la carpeta docs 

const basicInfo = require('./basicInfo');
const components = require('./components');
const task = require('./task');


module.exports = {
    ...basicInfo,
    ...components,
    ...task
};