Este é o link ancorado ao GitHub: 

↘️
https://snowman-33.github.io/Portfolio-Academico-e-Profissional/ ---

--------------------------------------------------------------------

Este é o link ancorado ao Render:
↘️
https://portfolio-backend-6bj3.onrender.com

 Deploy feito no plano gratuito do Render. Por isso, na primeira requisição após inatividade o serviço pode 
 levar cerca de 50s para "acordar" (cold start). Basta aguardar e recarregar a página.

Como rodar localmente
1. npm install
2. npm start
3. Abrir http://localhost:3000

Testes automatizados
- Backend: `backend/validacao.test.js` - testa a validação do formulário de contato
- Frontend: `frontend.test.js` - testa se o formulário existe no `index.html`

CI/CD
A cada `push` na branch `main`, o GitHub Actions:
1. Instala as dependências
2. Executa os testes com `npm test`
3. Se os testes passarem, o Render faz o deploy automático do backend