const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Conexión a MongoDB (usa tu URL local o Atlas)
mongoose.connect('mongodb://127.0.0.1:27017/miBaseDeDatos', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Conectado a MongoDB'))
.catch(err => console.log('❌ Error al conectar a MongoDB:', err));

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Hola mundo desde tu backend con MongoDB!');
});

// Escuchar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});