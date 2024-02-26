describe('It must be login and see the products page', () => {
  it('Make login', () => {
    cy.visit('/')
    cy.login('standard_user')
  })
})