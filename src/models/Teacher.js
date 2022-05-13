import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
//import { Group } from "./Group.js";

export const Teacher = sequelize.define('Teacher',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idGroup: {
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    });
    // 