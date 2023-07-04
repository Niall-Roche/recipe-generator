describe('Search', () => {
  it('should navigate to the search page', () => {
    // Start from the home page
    cy.visit('http://localhost:3000/')

    // Find the input
    const input = cy.get('input')

    // Search for recipes including pepper
    input.type('pepper')

    // The new url should include "/search"
    cy.url().should('include', '/search')
    // The new url should include "/pepper"
    cy.url().should('include', '/pepper')
  })

  it('should navigate to the search page and back to the home page', () => {
    // Start from the home page
    cy.visit('http://localhost:3000/')

    // Find the input
    const input = cy.get('input')
    const button = cy.get('button[id="clear-search"]')

    // Search for recipes including chicken
    input.type('chicken')

    // The new url should include "/search"
    cy.url().should('include', '/search')
    // The new url should include "/chicken"
    cy.url().should('include', '/chicken')

    button.click()

    cy.url().should('equal', 'http://localhost:3000/')
  })
})
