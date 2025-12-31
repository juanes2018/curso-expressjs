const express = require('express');

const app = express();





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Nuestra aplicacion esta funcionando en el Puerto: ${PORT}`);
});app.get('/', (req, res) => {
  res.send(`
    <h1>Curso Express.js</h1>
    <p>Esto es una aplicacion express con node.js V5</p>
    <p>Aqui vamos a aprender express desde cero</p>
    <p>Estamos en el puerto: ${PORT}</p>`);
}); 