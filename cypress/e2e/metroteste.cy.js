describe('Painel do Metrô SP - Testes Automatizados', () => {
  const linhas = [
    { 
      nome: 'Linha 1 - Azul', 
      nomeSeletor: ':nth-child(1) > .flex-col > .justify-between > .text-2xl',
      statusSeletor: ':nth-child(1) > .flex-col > .justify-between > .inline-flex > .flex' 
    },
    { 
      nome: 'Linha 2 - Verde', 
      nomeSeletor: ':nth-child(2) > .flex-col > .justify-between > .text-2xl',
      statusSeletor: ':nth-child(2) > .flex-col > .justify-between > .inline-flex > .flex' 
    },
    { 
      nome: 'Linha 3 - Vermelho', 
      nomeSeletor: ':nth-child(3) > .flex-col > .justify-between > .text-2xl',
      statusSeletor: ':nth-child(3) > .flex-col > .justify-between > .inline-flex > .flex' 
    },
    { 
      nome: 'Linha 4 - Amarelo', 
      nomeSeletor: ':nth-child(4) > .flex-col > .justify-between > .text-2xl',
      statusSeletor: ':nth-child(4) > .flex-col > .justify-between > .inline-flex > .flex' 
    },
    { 
      nome: 'Linha 5 - Lilás', 
      nomeSeletor: ':nth-child(5) > .flex-col > .justify-between > .text-2xl',
      statusSeletor: ':nth-child(5) > .flex-col > .justify-between > .inline-flex > .flex' 
    },
    { 
      nome: 'Linha 15 - Prata', 
      nomeSeletor: ':nth-child(6) > .flex-col > .justify-between > .text-2xl',
      statusSeletor: ':nth-child(6) > .flex-col > .justify-between > .inline-flex > .flex' 
    }
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
      // Verifica o nome da linha
      cy.get(linha.nomeSeletor)
        .should('contain', linha.nome);
      
      // Verifica o status
      cy.get(linha.statusSeletor).should(($el) => {
        const text = $el.text().trim();
        expect(text === 'Normal Operation' || text === 'Delays Reported').to.be.true;
      });
    });
  });

  // 3. Teste específico para atrasos na Linha 3
  it('Destaca atraso na Linha 3 - Vermelho', () => {
    cy.get(linhas[2].statusSeletor)
      .should('contain', 'Delays Reported')
    
  });
});
