describe('Go to Sensei', () => {

    it('Go to the website and verify title has Sensei', () => {
      cy.visit('http://sensei.com/')

      cy.title().should('include', 'Sensei')
    })

    it('Explore Retreats', () => {
        
        cy.get('a').contains('Explore Retreats').click()
        cy.title().should('include', 'Our Wellbeing Retreats')

      })

      it('Retreats, Learn More', () => {
        cy.get('.h1').contains('Sensei Lāna‘i').scrollIntoView()
        cy.get('.col-md-6.left').find('[class="button transparent black"]').click()
        cy.title().should('include', 'Hawaii Wellness Retreat')

      })




})