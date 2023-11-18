const express = require('express');
const mysql = require('mysql');
const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Reemplaza con tu nombre de usuario de MySQL
    password: 'Passw0rd', // Reemplaza con tu contraseña de MySQL
    database: 'Teacher'
});

db.connect(err => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
    } else {
        console.log('Conexión exitosa a la base de datos');
    }
});

app.get('/DatosProfe', (req, res) => {
    const queryString = 'SELECT * FROM DatosProfe';
    db.query(queryString, (err, result) => {
        if (err) {
            console.error('Error en la consulta:', err);
            res.status(500).send('Error interno del servidor');
        } else {
            res.json(result);
        }
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
