const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve os arquivos estáticos da pasta root
app.use(express.static('.'));

app.get('*', (req, res) => {
    res.sendFile('index.html', { root: '.' });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
