const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const dados = new URLSearchParams(new FormData(form));

  const resposta = await fetch("https://portfolio-backend-6bj3.onrender.com/contato", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: dados
  });

  const resultado = await resposta.json();

  const msg = document.getElementById("mensagem-form");
  if (resultado.sucesso) {
    msg.textContent = "Mensagem enviada com sucesso! ✅";
    msg.style.color = "green";
    form.reset();
  } else {
    msg.textContent = "Erro: " + resultado.erros.join(", ");
    msg.style.color = "red";
  }
});