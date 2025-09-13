describe('M02-TCS1: Search All Logs Employees', () => {
  beforeEach(() => {
    cy.visit('https://yahshuapayroll.com/signin/?login=yes')
  })

  it('should search logs of all employees', () => {

    cy.login()

    // click search button 
    cy.get('#search-timesheets-btn').click()

    //  Assertion: e.g. results should load
    cy.get('table#table').should('be.visible')
  })
})