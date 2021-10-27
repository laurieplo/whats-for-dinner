describe('Homepage', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Generate 5 menu items', () => {
        cy.get('[data-cy=action-generate-menu]').should('be.visible').click();
        cy.get('[data-cy=menu-item]').should('have.length', 5);
    });

    it('Replace the first item', () => {
        cy.get('[data-cy=action-generate-menu]').should('be.visible').click();
        cy.get('[data-cy=menu-item]').first().then(firstItem => {
            cy.get('[data-cy=replace-menu-item]').first().should('be.visible').click();
            cy.get('[data-cy=menu-item]').first().should((newFirstItem) => {
                expect(newFirstItem.text()).not.to.eq(firstItem.text())
            })
        });
    })
});
