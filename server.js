const express = require('express');
const app = express();
const usuarioRoutes = require('./routes/usuarioRoutes');

// Middleware para permitir o envio de dados no formato JSON
app.use(express.json());

// Rota para usuários
app.use('/api/usuarios', usuarioRoutes);

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
