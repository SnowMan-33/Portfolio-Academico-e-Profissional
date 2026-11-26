const express = require('express');
const cors = require('cors');
const path = require('path');
const { validarContato } = require('./validacao');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  if (req.method === "OPTIONS") return res.sendStatus(200);
  next();
});
app.use(express.static(path.join(__dirname, '..')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.post('/contato', (req, res) => {
  const resultado = validarContato(req.body);

  if (!resultado.valido) {
    return res.status(400).json({ sucesso: false, erros: resultado.erros });
  }

  return res.json({ sucesso: true, mensagem: "Mensagem recebida com sucesso!" });
});

if (require.main === module) {
  const PORTA = process.env.PORT || 3000;
  app.listen(PORTA, () => console.log(`Servidor rodando na porta ${PORTA}`));
}

module.exports = app;