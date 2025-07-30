Cypress.Commands.add('realizarBusca', (texto) => {
    cy.get('[aria-label="Search button"]').first().click()
    cy.get('#search-field').type(`${texto} {enter}`)
    cy.contains(`Resultados encontrados para: ${texto}`).should('be.visible')
})

Cypress.Commands.add('validarRedirecionamento', (caminhoUrl, H1presente) => {
    cy.url().should('include', caminhoUrl);
    cy.get('h1').should('contain.text', H1presente);
})

Cypress.Commands.add('aguardarPaginaCarregar', () => {
    cy.visit('/');
    cy.get('[viewBox="0 0 256 512"]').should('be.visible');
});



