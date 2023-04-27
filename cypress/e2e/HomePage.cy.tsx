import 'cypress/react';

describe('test the home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should display anime cards when openning first time', () => {
    cy.get('[data-testid="container"] img').should('exist');
    cy.get('[data-testid="container"] img').should('have.length.above', 1);
  });

  it('should search anime by entered name and open modal with anime info', () => {
    cy.get('input[type="text"]').type('naru{enter}');
    cy.get('[data-testid="container"] h2').first().as('firstCard');
    cy.get('@firstCard').should('have.text', 'Narue no...');
    cy.get('@firstCard').click();
    cy.get('[data-cy="animeTitle"]').should('have.text', 'Narue no Sekai');
  });
});
