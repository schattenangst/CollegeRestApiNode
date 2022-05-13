import { Student } from '../models/Student.js'

/**
 * Obtiene información de estudiantes
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const getStudents = async (req, res) => {
    try {
        const students = await Student.findAll()
        res.json(students);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

/**
 * Obtiene información de estudiantes
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
 export const getStudentById = async (req, res) => {
    try {

        const {id} = req.params;
        const students = await Student.findByPk(id)
        res.json(students);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}



/**
 * Crea un nuevo registro de estudiantes
 * 
 * @param {*} req 
 * @param {*} res 
 */
export const createStudent = async (req, res) => {
    try {
        const { idGroup, name, surname, age, brithday, tutor } = req.body

        const newStudent = await Student.create({
            idGroup,
            name,
            surname,
            age,
            brithday,
            tutor
        })

        res.json(newStudent)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

/**
 * Actualiza información de los estudiantes
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const updateStudent = async (req, res) => {

    const { id } = req.params;
    const { idGroup, name, surname, age, brithday, tutor } = req.body;

    try {
        const student = await Student.findByPk(id)

        student.name = name
        student.idGroup = idGroup
        student.name = name
        student.surname = surname
        student.age = age
        student.brithday = brithday
        student.tutor = tutor

        await student.save()
        res.json(student);

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

/**
 * Elimina el registro de un estudiante
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const deleteStudent = async (req, res) => {
    try {
        const {id} = req.params;
        await Student.destroy({
            where:{
                id,
            },
        })

        res.status(204)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}