const { validarContato } = require('./validacao');

test('Deve aceitar um contato válido', () => {
  const resultado = validarContato({
    nome: "Yago Melo",
    email: "yago@email.com",
    motivo: "Trabalho",
    mensagem: "Gostaria de um orçamento"
  });
  expect(resultado.valido).toBe(true);
});

test('Deve rejeitar nome muito curto', () => {
  const resultado = validarContato({
    nome: "Ya",
    email: "yago@email.com",
    motivo: "Trabalho",
    mensagem: "Gostaria de um orçamento"
  });
  expect(resultado.valido).toBe(false);
});

test('Deve rejeitar e-mail sem @', () => {
  const resultado = validarContato({
    nome: "Yago Melo",
    email: "yagoemail.com",
    motivo: "Trabalho",
    mensagem: "Gostaria de um orçamento"
  });
  expect(resultado.valido).toBe(false);
});

test('Deve rejeitar motivo inválido', () => {
  const resultado = validarContato({
    nome: "Yago Melo",
    email: "yago@email.com",
    motivo: "Spam",
    mensagem: "Gostaria de um orçamento"
  });
  expect(resultado.valido).toBe(false);
});

test('Deve rejeitar mensagem muito curta', () => {
  const resultado = validarContato({
    nome: "Yago Melo",
    email: "yago@email.com",
    motivo: "Trabalho",
    mensagem: "Oi"
  });
  expect(resultado.valido).toBe(false);
});