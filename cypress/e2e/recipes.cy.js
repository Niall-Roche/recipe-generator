describe('Recipes', () => {
  it('should navigate to the recipes page', () => {
    // Start from the home page
    cy.visit('http://localhost:3000/')

    // Find the input
    const input = cy.get('input')

    // Search for recipes including chicken
    input.type('chicken')

    // The new url should include "/search"
    cy.url().should('include', '/search')
    // The new url should include "/chicken"
    cy.url().should('include', '/chicken')

    // Grab the first link in the list
    const link = cy.get('a').first()
    link.click()

    // The new url should include "/recipes"
    cy.url().should('include', '/recipes')

    cy.get('div[id="page-header"]').should('include.text', 'Viewing recipes for')
  })


  it('should navigate to the recipes page and back to the search page', () => {
    // Start from the home page
    cy.visit('http://localhost:3000/')

    // Find the input
    const input = cy.get('input')

    // Search for recipes including chicken
    input.type('chicken')

    // The new url should include "/search"
    cy.url().should('include', '/search')
    // The new url should include "/chicken"
    cy.url().should('include', '/chicken')

    // Grab the first link in the list
    const link = cy.get('a').first()
    link.click()

    const button = cy.get('button[id="back-button"]')
    button.click()

    // The new url should include "/search"
    cy.url().should('include', '/search')
    // The new url should include "/chicken"
    cy.url().should('include', '/chicken')
  })
})
