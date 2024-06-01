import { pool } from "../db.js";

// Obtener todos los usuarios
export const getUsers = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM Usuarios');
    res.json(rows);
}

// Obtener un usuario por ID
export const getUser = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM Usuarios WHERE id_usuario = ?', [req.params.id_usuario]);
    if (rows.length <= 0) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.json(rows[0]);
}

// Crear un usuario
export const createUser = async (req, res) => {
    const { nombres, apellidos, email, contrasena } = req.body;
    const [result] = await pool.query('INSERT INTO Usuarios (nombres, apellidos, email, contrasena) VALUES (?, ?, ?, ?)', [nombres, apellidos, email, contrasena]);
    res.send({
        id: result.insertId,
        nombres,
        apellidos
    });
}

// Actualizar un usuario
export const updateUser = async (req, res) => {
    const { id_usuario } = req.params;
    const { nombres, apellidos, email, contrasena } = req.body;
    const [result] = await pool.query('UPDATE Usuarios SET nombres = ?, apellidos = ?, email = ?, contrasena = ? WHERE id_usuario = ?', [nombres, apellidos, email, contrasena, id_usuario]);

    if (result.affectedRows === 0) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.json(result);
}

// Eliminar un usuario
export const deleteUser = async (req, res) => {
    const { id_usuario } = req.params;
    const [result] = await pool.query('DELETE FROM Usuarios WHERE id_usuario = ?', [id_usuario]);

    if (result.affectedRows === 0) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.json({ message: 'Usuario eliminado exitosamente' });
}

// Habilitar un usuario
export const habilitarUsuario = async (req, res) => {
    const { id_usuario } = req.params;
    const [result] = await pool.query('UPDATE Usuarios SET estado = \'habilitado\' WHERE id_usuario = ?', [id_usuario]);

    if (result.affectedRows === 0) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.json({ message: 'Usuario habilitado exitosamente' });
}

// Deshabilitar un usuario
export const deshabilitarUsuario = async (req, res) => {
    const { id_usuario } = req.params;
    const [result] = await pool.query('UPDATE Usuarios SET estado = \'deshabilitado\' WHERE id_usuario = ?', [id_usuario]);

    if (result.affectedRows === 0) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.json({ message: 'Usuario deshabilitado exitosamente' });
}






