import Sequelize from 'sequelize'

export const sequelize = new Sequelize('workshopDB', 'workshop', 'workshop01', {
    host: "localhost",
    dialect: "mssql",
    dialectOptions: {
        options: {
          instanceName: 'WORKSHOP',
          trustServerCertificate: true
        }
    }
/*
export const sequelize = new Sequelize('nodeworkshop', 'idworkshop', 'workshopid', {
    host: "localhost",
    dialect: "postgres",
*/
});
 