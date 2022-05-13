
import { Project } from '../models/Project.js'

// Controlador GET - Obtiene los proyectos existentes
export const getProjects = async (req, res) => {

    try {
        const projects = await Project.findAll()
        res.json(projects)

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


// Controlador GET - Obtiene los proyectos existentes
export const getProject = async (req, res) => {

    try {
        const { id } = req.params;

        const project = await Project.findByPk(id)
        res.json(project)

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

/**
 * Controlador POST - Crea nuevos registros de proyectos
 * 
 * @param {} req 
 * @param {*} res 
 */
export const createProject = async (req, res) => {

    try {
        const { name, priority, description } = req.body

        const newProject = await Project.create({
            name,
            description,
            priority
        })
        res.json(newProject)
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

/**
 * Poroject Update controller 
 * @param {*} req 
 * @param {*} res 
 */
export const updateProject = async (req, res) => {
    const { id } = req.params;
    const { name, priority, description } = req.body;

    try {
        const project = await Project.findByPk(id)
        project.name = name
        project.priority = priority
        project.description = description

        await project.save()
        res.json(project);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


/**
 * Project delete controller
 * @param {*} req 
 * @param {*} res 
 */
export const deleteProject = async (req, res) => {

    try {
        const { id } = req.params;
        await Project.destroy({
            where: {
                id,
            },
        });

        res.sendStatus(204)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}