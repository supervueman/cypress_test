/// <reference types="Cypress" />

describe('MyTestSuite', () => {
  beforeEach(function() {
    cy.fixture('example').then((data) => {
      this.data = data
    })
  })

  it('Login test', function() {
    cy.login(this.data.email, this.data.password)
  })

  it('Add customer', function() {
    cy.login(this.data.email, this.data.password)

    cy.log('Add customer')
  })

  it('Edit customer', function() {
    cy.login(this.data.email, this.data.password)
    
    cy.log('Editing customer')
  })
})