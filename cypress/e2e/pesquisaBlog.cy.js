describe('Testes da funcionalidade pesquisa', () => {
   beforeEach(function () {
      cy.fixture("dados").as('dadosAgibank');
      cy.visit('/')
   });

   it('Realizar busca com sucesso', function () {
      cy.realizarBusca(this.dadosAgibank.pesquisaExistente)
      cy.contains('a', 'Novas regras Pix: veja o que muda com as decisões do Banco Central').should('be.visible')
   });

   it('Realizar busca com nenhum resultado', function () {
      cy.realizarBusca(this.dadosAgibank.pesquisaInexistente)
      cy.contains('p', "Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.")
   });

});
