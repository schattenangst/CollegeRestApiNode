import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Student = sequelize.define('Student', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idGroup: {
        type: DataTypes.INTEGER,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    birthday: {
        type: DataTypes.DATE,
    },
    tutor: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
})