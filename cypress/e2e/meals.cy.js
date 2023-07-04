describe('Recipes', () => {
  it('should navigate to the meals page', () => {
    // Start from the search page
    cy.visit('http://localhost:3000/search/pepper')

    // Grab the first link in the list
    const ingredientLink = cy.get('a[id="app-link"]').first()
    ingredientLink.click()

    // The new url should include "/recipes"
    cy.url().should('include', '/recipes')
    cy.get('div[id="page-header"]').should('include.text', 'Viewing recipes for')

    const mealLink = cy.get('a[id="app-link"]').first()
    mealLink.click()

    cy.url().should('include', '/meals')
    cy.get('div[id="page-header"]').should('include.text', 'Viewing instructions for the meal')
  })

  it('should be viewing the big mac meal (yum yum)', () => {
    // This should be the big mac link
    cy.visit('http://localhost:3000/meals/53013')

    cy.get('div[id="page-header"]').should('include.text', 'Viewing instructions for the meal:Big Mac')
  })
})
