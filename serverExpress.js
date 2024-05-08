//importacion del modulo express
const express = require('express');
// importacion del modulo path
const path = require('path');
const app = express();

// ruta raiz redireccionando al index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
// salida del puerto
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor Express corriendo en el puerto ${PORT}`);
});

// Agregar

//Editar

//Eliminar