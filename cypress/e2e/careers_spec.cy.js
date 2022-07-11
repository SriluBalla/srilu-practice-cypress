const { expect } = require("chai")

describe('Go to Sensei', () => {

        it('Go to the website and verify title', () => {
          cy.visit('http://sensei.com/')

          cy.title().should('include', 'Sensei')
          const mainTitle = cy.title()
        })

        it('Scroll, go to Careers page, verify title', () => {
            cy.scrollTo('bottom')
            cy.get('a').contains('Careers').click()
            cy.title().should('include', 'Sensei')
          })

          it('Supress new tab for QA Engineer page to not open it in new tab', () => {
            cy.scrollTo('bottom')
            cy.contains("a", "QA Engineer in Santa Monica, CA").scrollIntoView()
            cy.contains("a", "QA Engineer in Santa Monica, CA").invoke('removeAttr', 'target').click({force: true})
          })

          it('Now go back to main window', () => {
            cy.go('back')
            cy.title().should('include', 'Sensei')
            cy.title().should('include', 'Careers')
          })

          it('Go to home page', () => {
            cy.get('[aria-label="home"]').click()
            cy.title().equal(mainTitle)
          })
      

})

