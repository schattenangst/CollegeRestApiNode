import { Group } from '../models/Group.js'

/**
 * Obtiene los grupos existentes
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const getGroups = async (req, res) => {
    try {
        const groups = await Group.findAll()
        res.json(groups);

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
 export const getGroupById = async (req, res) => {
    try {
        const { id } = req.params;
        const group = await Group.findByPk(id)
        res.json(group);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


/**
 * Crea un nuevo registro de grupo
 * 
 * @param {*} req 
 * @param {*} res 
 */
export const createGroup = async (req, res) => {
    try {
        const { name, totalstudents } = req.body

        const newGroup = await Group.create({
            name,
            totalstudents
        })

        res.json(newGroup)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

/**
 * Actualiza información de un grupo
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const updateGroup = async (req, res) => {

    const { id } = req.params;
    const { name, totalstudents } = req.body;

    try {
        const group = await Group.findByPk(id)
        group.name = name
        group.totalstudents = totalstudents;

        await group.save()
        res.json(group);

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

/**
 * Elimina el registro de un grupo
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
 export const deleteGroup = async (req, res) => {
    try {

        const {id} = req.params;
        await Group.destroy({
            where:{
                id,
            },
        })

        res.status(204)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}