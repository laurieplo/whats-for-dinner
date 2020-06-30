describe('Homepage', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Generate 5 menu items', () => {
        cy.get('[data-cy=action-generate-menu]').should('be.visible');
        cy.get('[data-cy=action-generate-menu]').click();
        cy.get('[data-cy=menu-item]').should('have.length', 5);
    })
});
