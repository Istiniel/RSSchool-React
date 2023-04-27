import 'cypress/react';

describe('routing', () => {
  it('change url', () => {
    cy.visit('/');
    cy.visit('/sign');
    cy.url().should('include', '/sign');
    cy.visit('/about');
    cy.url().should('include', '/about');
    cy.visit('/non_existed_page');
    cy.url().should('include', '/404');
  });
});
