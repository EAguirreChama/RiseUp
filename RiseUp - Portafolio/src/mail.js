// eslint-disable-next-line no-undef
const express = require('express');
// eslint-disable-next-line no-undef
const nodemailer = require('nodemailer');
// eslint-disable-next-line no-undef
const bodyParser = require('body-parser');

const app = express()
const PORT = 5173

app.use(bodyParser.json())

app.post('/enviar-correo', async (req, res) => {
    const formData = req.body;

    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            auth: {
                user: 'aguirreernesto2001@gmail.com',
                pass: 'pccvtkplzofydlxi',
            },
        });

        const mensaje = {
            from: 'aguirreernesto2001@gmail.com',
            to: 'aguirreernesto2001@gmail.com',
            subject: 'Correo de Prueba',
            text: `
                Nombre: ${formData.nombre}
                Nombre de la Empresa: ${formData.nombreEmpresa}
                Email: ${formData.email}
            `
        }

        const info = await transporter.sendMail(mensaje);
        console.log('Correo enviado con éxito:', info);

        res.status(200).send('Formulario recibido y correo enviado correctamente');
    } catch (error) {
        console.error('Error al procesar el formulario y enviar el correo:', error);
        res.status(500).send('Error al procesar el formulario y enviar el correo');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});