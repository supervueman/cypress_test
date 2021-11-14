/// <reference types="Cypress" />

describe('MyTestSuite', () => {
  it('Table test', () => {
    cy.visit('http://testautomationpractice.blogspot.com/')

    cy.get('table[name=BookTable]').contains('td', 'Learn Selenium').should('be.visible')

    cy.get('table[name=BookTable] > tbody > tr:nth-child(2) > td:nth-child(3)').contains('Selenium').should('be.visible')

    cy.get('table[name=BookTable] > tbody > tr td:nth-child(2)').each((el, i, list) => {
      const text = el.text()

      if (text.includes('Amod')) {
        cy.get('table[name=BookTable] > tbody > tr td:nth-child(1)').eq(i).then((bookName) => {
          const bName = bookName.text()
          expect(bName).to.equal('Master In Java')
        })
      }
    })
  })
})