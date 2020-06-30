describe('Add Integration', () => {
  it('focused input on load', () => {
    cy.visit('http://localhost:1234')
    // cy.focused().should('have.class', '.new-todo')
  });

  it('accept input', () => {
    cy.get('.new-todo')
    .type('buy coffee')
    .should('have.value', 'buy coffee')
    .clear()
    
  });

  it('add second input', () => {
    cy.get('.new-todo')
    .type('buy coffee{enter}')
    .type('buy udud{enter}')

    cy.get('.todo-list li')
    .should('have.length', 2)

   
  });


});
