describe('Remove Integration', () => {
  beforeEach(() => {
    cy.seed();
    cy.visit('/');
  });

  it('should remove a list', () => {
    cy.get('.todo-list li').first().find('.destroy').invoke('show').click();

    cy.get('.todo-list li')
      .should('have.length', 2)
      .and('not.contain', 'first ');
  });
});
