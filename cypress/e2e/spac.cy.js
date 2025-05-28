describe('acessar site do governo', () => {
  it('se entra na página', () => {
    cy.visit('https://transparencia.joaopessoa.pb.gov.br/')
  })

  it('confirmando que o botão de licitação existe', () => {
    cy.contains('a.cartao-componente', 'Licitações')
      .should('be.visible').click();
  })

  it('deve selecionar o ano de 2023 no dropdown', () => {
    cy.get('#selectYear .ui-dropdown').should('be.visible');
    cy.get('#selectYear .ui-dropdown-trigger').click();
    cy.get('div.ui-dropdown-items-wrapper').should('be.visible');
    cy.get('ul.ui-dropdown-items li')
      .contains(/^2023$/) 
      .click();
    cy.get('#selectYear .ui-dropdown-label').should('have.text', '2023');
  })

  it('clickando no botão de pesquisa', () => {
    cy.get('button.btn-sm.tm-execute[icon="fa fa-search"]')
      .should('be.visible')
      .click();
  })

  it('clickando em um dos resultados da pesquisa', () => {
    cy.contains('a.tm-execute[itemprop="bidID"]', '06.079/2023')
      .should('be.visible')
      .click();
  })
});