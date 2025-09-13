describe('M02-TCS5: Search For Invalid Employees', () => {
  beforeEach(() => {
    cy.visit('https://yahshuapayroll.com/signin/?login=yes')
  })

  it('should not display invalid employees when searched ', () => {

    cy.login()

    // click the Show inactive checkbox
    cy.get('label > .ng-pristine').click()

    // click the combobox to show inactive employees
    cy.get('input[placeholder="ALL"]').click()

    // click first invalid employee
    cy.contains('div.ng-binding', '11142 - Ackerman, Mikasa').click()

    // click the combobox again to show inactive employees
    cy.get('input[role="combobox"]').first().click({force: true})

    // click second invalid employee
    cy.contains('div.ng-binding', '310002 - Ackerman, Levi.').click()

    // click search button 
    cy.get('#search-timesheets-btn').click()

    // ✅ Assertion: invalid employees logs should not be displayed
    cy.get('div.panel-footer span.ng-binding').should('have.text', 'Total records : 0 ')
  })
})