describe('Filter test', () => {
    beforeEach(() => {
        cy.seed()
        cy.visit('/')
    })

    it('Handle filter link', () => {
        cy.get('.todo-list li')
        .find('.toggle').eq(0).click();

        const filters = [
            { link : 'All', expectedLength : 3 },
            { link : 'Active', expectedLength : 2 },
            { link : 'Completed', expectedLength : 1 },

        ]

        cy.wrap(filters).each( filter => {
            cy.contains(filter.link).click()
            cy.get('.todo-list li').should('have.length', filter.expectedLength)
        })
            

        
        
    });
});