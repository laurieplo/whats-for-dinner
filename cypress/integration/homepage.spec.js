describe('Homepage', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Generate menu items for lunches and dinners with 5 items each by default', () => {
        cy.get('[data-cy=lunch-count]').should('be.visible').type('{backspace}4');
        cy.get('[data-cy=action-generate-menu]').should('be.visible').click();
        cy.get('[data-cy=menu-item]').should('have.length', 9);
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
