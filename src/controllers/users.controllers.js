import { User } from "../models/User.js";

export const getUserInfo = async (req, res) => {

};

/**
 * Endpoint para crear un nuevo usuario en la base
 * @param {} req 
 * @param {*} res 
 * @returns 
 */
export const createUser = async (req, res) => {
    try {
        const { name, surname, password } = req.body
        const newUser = await User.create({
            name,
            surname,
            password, 
            active: true
        })

        res.json(newUser)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const validateUser = async (req, res) => {
    try {
        const { name, password } = req.params;


    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};