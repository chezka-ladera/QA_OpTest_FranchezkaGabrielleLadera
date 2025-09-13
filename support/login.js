Cypress.Commands.add('login', () => {
    cy.visit('https://yahshuapayroll.com/signin/?login=yes')
    cy.get('input[name="email"]').type('admin_demo@gmail.com')
    cy.get('input[name="password"]').type('Admindemo@123')
    cy.get('#signin-button').click()
    cy.url().should('include', '/dashboard')
    cy.get('button.btn-link').click()  
    cy.get('#timesheets').click()
    cy.get('#daily_logs').click()
    cy.get('.col-sm-8 h2').should('have.text', 'Daily Logs')

})
