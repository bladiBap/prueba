import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/hello-world', (req, res) => {
    res.json({
        message: "¡Hola Mundo desde Express!",
        status: "success",
        timestamp: new Date().toISOString()
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});