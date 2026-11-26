const fs = require('fs');
const html = fs.readFileSync('./index.html', 'utf8');

test('Deve ter o menu de navegação', () => {
  expect(html).toContain('<nav');
  expect(html).toContain('Biografia');
});

test('Deve ter o banner principal', () => {
  expect(html).toContain('class="banner"');
  expect(html).toContain('Starter Developer');
});

test('Deve ter o formulário de contato', () => {
  expect(html).toContain('<form');
  expect(html).toContain('id="nome"');
  expect(html).toContain('id="email"');
  expect(html).toContain('id="mensagem"');
});