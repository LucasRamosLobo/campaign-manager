const express = require('express');
const app = express();

app.use(express.json());

app.use('/api', (req, res) => {
    res.send('Rota API funcionando!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
