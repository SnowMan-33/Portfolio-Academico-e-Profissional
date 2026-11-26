
function validarContato(dados) {
  const erros = [];

  if (!dados.nome || dados.nome.trim().length < 3) {
    erros.push("Nome deve ter no mínimo 3 caracteres");
  }

  if (!dados.email || !dados.email.includes("@")) {
    erros.push("E-mail inválido");
  }

  const motivosValidos = ["Trabalho", "Dúvida Acadêmica", "Sugestão"];
  if (!motivosValidos.includes(dados.motivo)) {
    erros.push("Motivo inválido");
  }

  if (!dados.mensagem || dados.mensagem.trim().length < 11) {
    erros.push("Mensagem deve ter no mínimo 11 caracteres");
  }

  return {
    valido: erros.length === 0,
    erros: erros
  };
}

module.exports = { validarContato };