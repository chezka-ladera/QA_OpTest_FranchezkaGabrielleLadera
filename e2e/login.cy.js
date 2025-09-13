/// <reference types="cypress" />

describe('Login Test - Success', () => {
  it('should log in', () => {
    cy.visit('https://yahshuapayroll.com/signin/?login=yes')

    cy.get('input[name="email"]').type('admin_demo@gmail.com')
    cy.get('input[name="password"]').type('Admindemo@123')

    cy.get('#signin-button').click()

    // check if login was successful
    cy.url().should('include', '/dashboard')

    // this should close panel after signing in
    cy.get('button.btn-link').click()  

    // this should access the Daily Logs after signing in
    cy.get('#timesheets').click()
    cy.get('#daily_logs').click()

    // assertion that whole test is successful
    cy.get('.col-sm-8 h2').should('have.text', 'Daily Logs')

  })
})
