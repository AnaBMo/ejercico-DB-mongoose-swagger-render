const task = require("./task");

/*
Los componentes se utilizan para contener diferentes definiciones reutilizables. 
Las definiciones reutilizables involucran esquemas, parámetros… 
Después de su definición, se accede a los componentes mediante $ref.
*/
module.exports = {
    components: {
        schemas: {
            Task: {
                type: 'object',
                properties: {
                    _id: {
                        type: 'objectId',
                        description: "task identification number",
                        example: "6201064b0028de7866e2b2c4"
                    },
                    title: {
                        type: 'string',
                        description: "title of the task",
                        example: "John"
                    },
                    completed: {
                        type: 'boolean',
                        description: "status of the task",
                        example: false,
                    }
                },
                
            }
        }
    }
};