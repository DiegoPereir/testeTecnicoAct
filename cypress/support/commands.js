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
    cy.fixture('mockRequestCdn').then((mockRequestCdn) => {
        cy.intercept(
            'GET',
            '**/amp-story.pt-BR.json*',
            (req) => {
                req.reply({
                    statusCode: 200,
                    body: mockRequestCdn,
                    delay: 100,
                });
            }
        ).as('getAmpStory');

        cy.visit('/');

        // Força a requisição para ativar o intercept
        cy.request({
            method: 'GET',
            url: 'https://cdn.ampproject.org/rtv/9999/v0/amp-story.pt-BR.json?__amp_source_origin=https%3A%2F%2Fblog.agibank.com.br',
            failOnStatusCode: false 
        });

        cy.wait('@getAmpStory', { timeout: 10000 })
            .its('response.statusCode')
            .should('eq', 200);
    });
});


