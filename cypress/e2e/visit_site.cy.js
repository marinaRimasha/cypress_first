describe('Visit website and verify it got loaded', () => {
  it('passes if initial elements loaded', () => {
    cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com')
    cy.wait(1000)

    cy.get('.brand-title > span').should('have.text', 'Sqlverifier')
    cy.get('.view-routes').should('be.visible')
  })
})