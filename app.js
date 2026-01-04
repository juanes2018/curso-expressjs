require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
 

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));




const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send(`
    <h1>Curso Express.js</h1>
    <p>Esto es una aplicacion express con node.js V100</p>
    <p>Aqui vamos a aprender express desde cero</p>
    <p>Estamos en el puerto: ${PORT}</p>`);
});

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Usuario con ID: ${userId}`);  
}); 

app.get('/search', (req, res) => { 
  const terms = req.query.termino || 'No especificado';
  const category = req.query.categoria || 'Todas';
  res.send(`<h2>resultado de la busqueda:</h2>
    <p>Termino: ${terms}</p>
    <p>Categoria: ${category}</p>`);
});

app.post('/form', (req, res) => {
  const name = req.body.name || 'Anonimo';
  const email = req.body.email || 'No especificado';
  res.json({
    message: 'Datos Recibidos',
    data: {
      name,
      email}
  });
});

app.post('/api/data', (req, res) => {
const data = req.body;
if (!data || Object.keys(data).length === 0) {
  return res.status(400).json({ error: 'No se recibieron datos' });
}

res.status(201).json({
  message: 'Datos recibidos correctamente',
  data
});
  });








  app.listen(PORT, () => {
  console.log(`Servidor: http://localhost:${PORT}`);
});