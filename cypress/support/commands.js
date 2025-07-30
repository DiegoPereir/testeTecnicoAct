Cypress.Commands.add('realizarBusca', (texto) => {
    cy.get('[aria-label="Search button"]').first().click()
    cy.get('#search-field').type(`${texto} {enter}`)
    cy.contains(`Resultados encontrados para: ${texto}`).should('be.visible')
})

Cypress.Commands.add('validarRedirecionamento', (caminhoUrl, H1presente) => {
    cy.url().should('include', caminhoUrl)
    cy.get('h1').should('contain.text', H1presente)
})

Cypress.Commands.add('aguardarPaginaCarregar', () => {
    cy.intercept('POST', 'https://l.clarity.ms/collect').as('collect')
    cy.visit('/')
    cy.wait('@collect').wait(1000).its('response.statusCode').should('eq', 204)
});
