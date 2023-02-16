// server.js
const app = require('./app')

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor web en el puerto ${PORT}.`);
});
