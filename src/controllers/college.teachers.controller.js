import { Teacher } from '../models/Teacher.js'

/**
 * Obtiene información de Profesores
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const getTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.findAll()
        res.json(teachers);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

/**
 * Obtiene información de profesores
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const getTeacherById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const teacher = await Teacher.findByPk(id)
        res.json(teacher);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

/**
 * Crea un nuevo registro de profesores
 * 
 * @param {*} req 
 * @param {*} res 
 */
export const createTeacher = async (req, res) => {
    try {
        const { idGroup, name } = req.body

        const newTeacher = await Teacher.create({
            idGroup,
            name,
            active: true
        })

        res.json(newTeacher)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

/**
 * Actualiza información de los profesores
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const updateTeacher = async (req, res) => {

    const { id } = req.params;
    const { idGroup, name, active } = req.body;

    try {
        const teacher = await Teacher.findByPk(id)
        teacher.name = name
        teacher.idGroup = idGroup
        teacher.name = name
        teacher.active = active

        await student.save()
        res.json(teacher);

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

/**
 * Elimina el registro de un profesores
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const deleteTeacher = async (req, res) => {
    try {

        const {id} = req.params;
        await Teacher.destroy({
            where:{
                id,
            },
        })

        res.status(204)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}