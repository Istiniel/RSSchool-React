import 'cypress/react';

describe('test the form page', () => {
  it('create new card after succesfull form submittion', () => {
    cy.visit('/sign');

    cy.get('[data-testid="input-city"]').type('RandomCityName');
    cy.get('[data-testid="dateInput"]').type('2015-03-15');
    cy.get('[data-testid="selectInput"]').select('telegram');
    cy.get('[type="checkbox"]').first().check();
    cy.get('[type="radio"]').first().check();
    cy.get('[data-testid="input-file"]').selectFile('cypress/fixtures/peppoFlushed.webp');
    cy.get('[name="submit"]').click();
    cy.get('[data-cy="formCard-container"]').should('exist');
  });
});
