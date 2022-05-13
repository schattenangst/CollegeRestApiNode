import { Router } from "express";
import { createGroup, deleteGroup, getGroupById, getGroups, updateGroup } from "../controllers/college.groups.controller.js";
import { createStudent, deleteStudent, getStudentById, getStudents, updateStudent } from "../controllers/college.students.controller.js";
import { createTeacher, deleteTeacher, getTeacherById, getTeachers, updateTeacher } from "../controllers/college.teachers.controller.js";
import { getProjects, createProject, updateProject, deleteProject, getProject } from '../controllers/projects.controller.js'
import { createUser, getUserInfo } from "../controllers/users.controllers.js";

const router = Router();

// Se definen las rutas
router.get('/projects', getProjects);
router.post('/project', createProject);
router.put('/project/:id', updateProject);
router.delete('/project/:id', deleteProject);
router.get('/project/:id',getProject);

// Se defirnen rutas para los usuarios
router.get('/user', getUserInfo);
router.post('/user', createUser);

// Definición de rutas para contexto Escuela
router.get('/students', getStudents);
router.get('/student/:id', getStudentById);
router.post('/student', createStudent);
router.put('/student/:id', updateStudent);
router.delete('/student/:id', deleteStudent);

router.get('/teachers', getTeachers);
router.get('/teacher/:id', getTeacherById);
router.post('/teacher', createTeacher);
router.put('/teacher/:id', updateTeacher);
router.delete('/teachers/:id', deleteTeacher);

router.get('/groups', getGroups);
router.get('/group/:id', getGroupById);
router.post('/group', createGroup);
router.put('/group/:id', updateGroup);
router.delete('/group/:id', deleteGroup);

export default router;