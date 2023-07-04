describe('Recipes', () => {
  it('should navigate to the meals page', () => {
    // Start from the search page
    cy.visit('http://localhost:3000/search/pepper')

    // Grab the first link in the list
    const ingredientLink = cy.get('a').first()
    ingredientLink.click()

    // The new url should include "/recipes"
    cy.url().should('include', '/recipes')
    cy.get('div[id="page-header"]').should('include.text', 'Viewing recipes for')

    const mealLink = cy.get('a').first()
    mealLink.click()

    cy.url().should('include', '/meals')
    cy.get('div[id="page-header"]').should('include.text', 'Viewing instructions for the meal')
  })
})
