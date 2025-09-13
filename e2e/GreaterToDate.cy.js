describe('M02-TCS4: Search Logs of Multiple Employees', () => {
  beforeEach(() => {
    cy.visit('https://yahshuapayroll.com/signin/?login=yes')
  })

  it('should not proceed when To Date is earlier than the From Date', () => {

    cy.login()


    // change the To Date to a date earlier than the default From Date
    cy.get('input[ng-model="filters.date_to"]').click().clear().type('01/01/2020')

    // click search button
    cy.get('#search-timesheets-btn').click()


    // ✅ Assertion: To Date must not be earlier than the From Date, so search should not proceed
        cy.get('input[ng-model="filters.date_from"]').invoke('val').then((fromDate) => {
      cy.get('input[ng-model="filters.date_to"]').invoke('val').then((toDate) => {
        const from = new Date(fromDate)
        const to = new Date(toDate)
        expect(to.getTime()).to.be.gte(from.getTime())
      })
    })
  })
})
