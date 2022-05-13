import app from './app.js'
import { sequelize } from './database/database.js';

/* Estas dos lineas se pueden eliminar 
una vez creadas las tablas en la base de datos */

//import './models/Project.js'
//import './models/Task.js'
//import './models/User.js'
/* * /
import './models/Student.js'
import './models/Group.js'
import './models/Teacher.js'
/ * */
 
async function main() {

    try {
        // Se puede cambiar a force:false para evitar que se este generado el modelo
        // cada vez que se guarda el proyecto
        // await sequelize.sync({force: true});
        await sequelize.authenticate();

        var puerto = 8000;
        app.listen(puerto);
        console.log('Server is listening on port', puerto);
    } catch (error) {
        console.log('Unable to connect to the database: ', error);
    }
}

main();