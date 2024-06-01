import { Router } from "express";
import { getUsers, getUser, createUser, updateUser, deleteUser, habilitarUsuario, deshabilitarUsuario } from "../controler/user.controler.js";

const router = Router();

router.get('/users', getUsers);
router.get('/users/:id_usuario', getUser);
router.post('/users', createUser);
router.patch('/users/:id_usuario', updateUser);
router.delete('/users/:id_usuario', deleteUser);

// Rutas para habilitar y deshabilitar usuario
router.patch('/users/:id_usuario/habilitar', habilitarUsuario);
router.patch('/users/:id_usuario/deshabilitar', deshabilitarUsuario);

export default router;


