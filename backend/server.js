const express = require('express');
const cors = require('cors');
const { validarContato } = require('./validacao');

const app = express();
app.use(cors());
app.use(express.json());

// Rota que seu formulário vai chamar
app.post('/contato', (req, res) => {
  const resultado = validarContato(req.body);

  if (!resultado.valido) {
    return res.status(400).json({ sucesso: false, erros: resultado.erros });
  }

  return res.json({ sucesso: true, mensagem: "Mensagem recebida com sucesso!" });
});

// Só inicia o servidor se não for teste
if (require.main === module) {
  const PORTA = process.env.PORT || 3000;
  app.listen(PORTA, () => console.log(`Servidor rodando na porta ${PORTA}`));
}

module.exports = app;