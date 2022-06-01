// eslint-disable
describe('Solo Test', () => {
  it('Launches a game and quits it', () => {
    cy.visit('http://localhost:8080/#/');
    cy.contains('Welcome to a Stronger Tetris');
    cy.contains('Rooms:');
    cy.contains('Player Name').type('Player 1');
    cy.contains('Room Name').type('Player 1\'s Room');
    cy.contains('GO').click();
    cy.wait(100);
    cy.get(':nth-child(2) > .q-btn__content > .block').click();
    cy.wait(10000);
    cy.get(':nth-child(5) > .q-btn__content').click();
  });
});
