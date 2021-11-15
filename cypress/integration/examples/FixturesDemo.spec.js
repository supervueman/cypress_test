/// <reference types="Cypress" />

describe('MyTestSuite', () => {
  beforeEach(function() {
    cy.fixture('example').then((data) => {
      this.data = data
    })
  })

  it('FixturesDemoTest', function() {
    cy.visit('https://admin-demo.nopcommerce.com/login')
    cy.get('input[type=Email]').clear().type(this.data.email)
    cy.get('input[type=Password]').clear().type(this.data.password)
    cy.get('button[type=submit]').click()
  })
})