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

  it('ingredient list should be viewable', () => {
    // This should be the big mac link
    cy.visit('http://localhost:3000/meals/53013')

    cy.get('ul[id="ingredient-list"]').should('exist')
    cy.get('div[id="meal-instructions"]').should('not.exist')
  })

  it('instructions should be viewable', () => {
    // This should be the big mac link
    cy.visit('http://localhost:3000/meals/53013')

    const button = cy.get('button[id="instructions-btn"]')
    button.click()

    cy.get('ul[id="ingredient-list"]').should('not.exist')
    cy.get('div[id="meal-instructions"]').should('exist')
  })

  it('instructions should be viewable and then ingredients should be viewable', () => {
    // This should be the big mac link
    cy.visit('http://localhost:3000/meals/53013')

    const instructionsButton = cy.get('button[id="instructions-btn"]')
    const ingredientsButton = cy.get('button[id="ingredients-btn"]')

    instructionsButton.click()

    cy.get('ul[id="ingredient-list"]').should('not.exist')
    cy.get('div[id="meal-instructions"]').should('exist')

    ingredientsButton.click()

    cy.get('ul[id="ingredient-list"]').should('exist')
    cy.get('div[id="meal-instructions"]').should('not.exist')
  })
})
