describe('Ingredients', () => {
  it('should have at least one ingredient link on the home page', () => {
    // Start at the home page
    cy.visit('http://localhost:3000')

    // Grab the first link in the list
    const ingredientLink = cy.get('a').first()
    ingredientLink.should('exist')
  })

  it('should have at least one ingredient link on the search page', () => {
    // Start at the home page
    cy.visit('http://localhost:3000')

    // Find the input
    const input = cy.get('input')

    // Search for recipes including pepper
    input.type('pepper')

    // Grab the first link in the list
    const ingredientLink = cy.get('a').first()
    ingredientLink.should('exist')
    ingredientLink.get('h3').first().contains('pepper', {matchCase: false})
  })

  it('ahould have an image in the ingredient link', () => {
    // Start at the home page
    cy.visit('http://localhost:3000')

    // Grab the first link in the list
    const ingredientLink = cy.get('a').first()
    ingredientLink.should('exist')
    ingredientLink.get('img').first().should('exist')
  })
})
