describe('This is the Experiment spec, where all the tests are tested before becoming official', () => {

    it('Open Kitchen Sink, Aparently my practice app', () => {
      cy.visit('http://example.cypress.io')

      cy.contains('type').click()

      cy.url().should('include', '/commands/actions')

      cy.get('#email1').type('srilu@email.com').should('have.value', 'srilu@email.com')
    })
})