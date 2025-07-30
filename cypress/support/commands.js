Cypress.Commands.add('realizarBusca', (texto) => {
    cy.get('[aria-label="Search button"]').first().click()
    cy.get('#search-field').then(($field) => {
        if ($field.is(':visible')) {
            cy.wrap($field).type(`${texto} {enter}`)
        } else {
            cy.wait(3000)
            cy.get('[aria-label="Search button"]').first().click()
            cy.get('#search-field').should('be.visible').type(`${texto} {enter}`)
        }
    })
    cy.contains(`Resultados encontrados para: ${texto}`).should('be.visible')
})

Cypress.Commands.add('validarRedirecionamento', (caminhoUrl, H1presente) => {
    cy.url().should('include', caminhoUrl)
    cy.get('h1').should('contain.text', H1presente)
})

Cypress.Commands.add('aguardarPaginaCarregar', () => {
    cy.visit('servicos/')
    cy.contains('Agibank').wait(1000).should('be.visible')
});
