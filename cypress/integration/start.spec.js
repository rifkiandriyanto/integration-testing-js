describe('Init integration', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.seed()
  });

  it('my first integration test', () => {
    cy.get('.todo-list');
  });

  it('load initial data ', () => {
     
    cy.visit('/');
    cy.get('.todo-list li').should('have.length', 3);
  });
});
