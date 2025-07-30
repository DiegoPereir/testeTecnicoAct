describe('Testes da funcionalidade pesquisa', () => {
   beforeEach(function () {
      cy.fixture("dados").as('dadosAgibank');
      cy.visit('/servicos')
   });

   it('Realizar busca com sucesso', function () {
      cy.realizarBusca(this.dadosAgibank.pesquisaExistente)
      cy.contains('a', 'O que é DARF? Tudo o que você precisa saber sobre emissão e pagamento').should('be.visible')
   });

   it('Realizar busca com nenhum resultado', function () {
      cy.realizarBusca(this.dadosAgibank.pesquisaInexistente)
      cy.contains('p', "Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.")
   });

});
