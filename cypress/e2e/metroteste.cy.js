describe('Painel do Metrô SP - Testes Automatizados', () => {
  const linhas = [
    { nome: 'Linha 1 - Azul', seletor: ':nth-child(1) > .flex-col > .justify-between > .text-2xl' },
    { nome: 'Linha 2 - Verde', seletor: ':nth-child(2) > .flex-col > .justify-between > .text-2xl' },
    { nome: 'Linha 3 - Vermelho', seletor: ':nth-child(3) > .flex-col > .justify-between > .text-2xl' },
    { nome: 'Linha 4 - Amarelo', seletor: ':nth-child(4) > .flex-col > .justify-between > .text-2xl' },
    { nome: 'Linha 5 - Lilás', seletor: ':nth-child(5) > .flex-col > .justify-between > .text-2xl' },
    { nome: 'Linha 15 - Prata', seletor: ':nth-child(6) > .flex-col > .justify-between > .text-2xl' }
  ];

  beforeEach(() => {
    cy.visit('https://metro-uptime-sbw5.vercel.app/');
  });

  // 1. Validação do Título
  it('Exibe o título principal corretamente', () => {
    cy.get('h1.text-3xl.font-bold.text-gray-900')
    .should('have.text', 'Status do Metrô de São Paulo');
  });

  // 2. Verifica todas as linhas e seus status
  linhas.forEach((linha) => {
    it(`Valida presença e status da ${linha.nome}`, () => {
      cy.get(linha.seletor)
        .should('contain', linha.nome)
        .then(($container) => {
          // Verifica se o status é "Normal Operation" ou "Delays Reported"
          expect($container.text()).to.match(/Normal Operation|Delays Reported/);
          
        });
    });
  });

  // 3. Teste específico para atrasos na Linha 3
  it('Destaca atraso na Linha 3 - Vermelho', () => {
    cy.get(linhas[2].seletor)
      .should('contain', 'Delays Reported')
  });
});