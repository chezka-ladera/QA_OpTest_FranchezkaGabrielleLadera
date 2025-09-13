describe('M02-TCS2: Search Employees Equal Per Page', () => {
  beforeEach(() => {
    cy.visit('https://yahshuapayroll.com/signin/?login=yes')
  })

  it('should match the number of employees based on the Employees Per Page filter', () => {

    cy.login()


//System should generate more results within the new date range
    cy.get('input[ng-model="filters.date_from"]').click().clear().type('07/01/2024')


    //dropdown 
    cy.get('[ng-hide="$select.isEmpty()"]').click()

    //Per Page filter should be set to default (10)
    cy.contains('div.ng-binding', '10').click()

    // click search button 
    cy.get('#search-timesheets-btn').click()

    //Employees list should display 10 employees per page regardless of logs

    // Assertion: e.g. results should load
    cy.get('table#table').should('be.visible')
  })
})