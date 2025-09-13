Cypress.Commands.add('login', () => {
  // Fill in login form (assuming we're already on the signin page)
  cy.get('input[name="email"]').type('admin_demo@gmail.com')
  cy.get('input[name="password"]').type('Admindemo@123')

  // Click the sign-in button
  cy.get('#signin-button').click()

  // Assertion: ensure we’re logged in
  cy.url().should('include', '/dashboard')

  // Close panel after signing in
  cy.get('button.btn-link').click()

  // Access the Daily Logs after signing in
  cy.get('#timesheets').click()
  cy.get('#daily_logs').click()

  // Assertion
  cy.get('.col-sm-8 h2').should('have.text', 'Daily Logs')
})
