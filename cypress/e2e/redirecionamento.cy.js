describe('Testes da funcionalidade pesquisa', () => {
    beforeEach(function () {
        cy.fixture("dados").as('dadosAgibank');
        cy.aguardarPaginaCarregar()
    });

    it('Validar redirecionamento de Serviços', function () {
        cy.contains('span.menu-text', 'Serviços').click();
        cy.validarRedirecionamento('servicos', 'Serviços')
    });

    it('Validar redirecionamento de Suas finanças', function () {
        cy.contains('span.menu-text', 'Suas finanças').click();
        cy.validarRedirecionamento('suas-financas', 'Suas finanças')
    });

    it('Validar redirecionamento de Seus benefícios', function () {
        cy.contains('span.menu-text', 'Seus benefícios').click();
        cy.validarRedirecionamento('seus-beneficios', 'Seus benefícios')
    });

    it('Validar redirecionamento de Sua segurança', function () {
        cy.contains('span.menu-text', 'Sua segurança').click();
        cy.validarRedirecionamento('sua-seguranca', 'Sua segurança')
    });

    it('Validar redirecionamento de Stories', function () {
        cy.contains('span.menu-text', 'Stories').click();
        cy.validarRedirecionamento('web-stories', 'Story')

    });

});
