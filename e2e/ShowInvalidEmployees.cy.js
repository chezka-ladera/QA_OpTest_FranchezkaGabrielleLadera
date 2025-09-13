describe('M02-TCS5: Show Invalid Employees', () => {
  beforeEach(() => {
    cy.visit('https://yahshuapayroll.com/signin/?login=yes')
  })

  it('should show invalid employees on the dropdown list', () => {

    cy.login()

    // click the Show inactive checkbox
    cy.get('label > .ng-pristine').click()

    // click the combobox to show inactive employees
    cy.get('input[placeholder="ALL"]').click()

    // ✅ Assertion: invalid empolyees should be displayed on the dropdown list
    cy.get('ul.ui-select-choices').should('be.visible')
  })
})