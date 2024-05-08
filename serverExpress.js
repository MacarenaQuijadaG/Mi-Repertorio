// server.js
const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// configuracion a la base de datos
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'repertorio',
    password: 'desarrollo',
    port: 5432
});

// Middleware
app.use(bodyParser.json());

// funcion para agregar la cancion
async function agregar(titulo, artista, tono) {
    try {
        const result = await pool.query({ 
            text: 'INSERT INTO canciones (titulo, artista, tono) VALUES ($1, $2, $3) RETURNING *',
            values: [titulo, artista, tono]
        });
        return result.rows[0];
    } catch (error) {
        throw error;
    }
}

// Función para obtener todos los registros de la tabla canciones
async function todos() {
    try {
        const result = await pool.query("SELECT * FROM canciones");
        return result.rows;
    } catch (error) {
        throw error;
    }
}

// Función para eliminar un registro de la tabla canciones
async function eliminar(id) {
    try {
        const result = await pool.query("DELETE FROM canciones WHERE id = $1 RETURNING *", [id]);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
}

// Función para editar un registro de la tabla canciones
async function editar(id, titulo, artista, tono) {
    try {
        const result = await pool.query("UPDATE canciones SET titulo = $1, artista = $2, tono = $3 WHERE id = $4 RETURNING *", [titulo, artista, tono, id]);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
}

// ruta principal mostrando el index.html
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/cancion", async (req, res) => {
    const { titulo, artista, tono } = req.body;
    try {
        const result = await agregar(titulo, artista, tono);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/canciones", async (req, res) => {
    try {
        const result = await todos();
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
//eliminar la cancion 
app.delete("/cancion", async (req, res) => {
    const { id } = req.query;
    try {
        const result = await eliminar(id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// editar la cancion
app.put("/cancion/:id", async (req, res) => {
    const { titulo, artista, tono } = req.body; 
    const { id } = req.params;
    try {
        const result = await editar(id, titulo, artista, tono); 
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// salida del puerto
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
