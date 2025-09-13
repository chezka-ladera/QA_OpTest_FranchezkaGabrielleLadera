describe('M02-TCS4: Search Logs of Multiple Employees', () => {
  beforeEach(() => {
    cy.visit('https://yahshuapayroll.com/signin/?login=yes')
  })

  it('should search logs of multiple employees', () => {

    cy.login()

    // change the From Date
    cy.get('input[ng-model="filters.date_from"]').click().clear().type('07/01/2024')
    // cy.get('input[ng-model="filters.date_from"]').should('have.value', '07/01/2024')

    // search input
    cy.get('input[role="combobox"]').first().click({ force: true })

    // click first employee
    cy.contains('div.ng-binding', 'Alonzo, Mark Z.').click()

    // click second employee
    cy.get('input[role="combobox"]').first().click({force: true})
    cy.contains('div.ng-binding', 'Amaya, Simon U.').click()

    // click search button 
    cy.get('#search-timesheets-btn').click()

    //  Assertion: e.g. results should load
    cy.get('table#table').should('be.visible')
  })
})