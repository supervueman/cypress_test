/// <reference types="cypress" />

describe('Locating Elements', () => {
  it('Verify types of locators',  () => {
    cy.visit('https://demo.nopcommerce.com/') // Open url
    cy.get('#small-searchterms').type('Apple MacBook Pro 13-inch') // search box
    cy.get('[type="submit"]').click() // click on seaarch button
    cy.get('.button-2.product-box-add-to-cart-button').click()
    cy.get('#product_enteredQuantity_4').clear().type('2')
    cy.get('#add-to-cart-button-4').click()

    cy.wait(5000)
    cy.get('#topcartlink > a > span.cart-label').click()
    cy.wait(5000)

    cy.get('.product-unit-price').contains('$1,800.00') // validation point
  })
})