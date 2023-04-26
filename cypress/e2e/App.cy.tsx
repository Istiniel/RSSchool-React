import 'cypress/react';

describe('<App>', () => {
  it('mounts', () => {
    cy.visit('http://localhost:5173/');
  });
});
