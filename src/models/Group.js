import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Teacher } from "./Teacher.js";
import { Student } from "./Student.js";

export const Group = sequelize.define('Group',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    totalStudents:
    {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});


Group.hasMany(Teacher, {
    foreignKey: 'idGroup',
    sourceKey: 'id'
})

Teacher.belongsTo(Group, {
    foreignKey: 'idGroup',
    sourceKey: 'id'
})

Group.hasMany(Student, {
    foreignKey: 'idGroup',
    sourceKey: 'id'
})

Student.belongsTo(Group, {
    foreignKey: 'idGroup',
    sourceKey: 'id'
})