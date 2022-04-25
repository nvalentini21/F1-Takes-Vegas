describe('F1 Takes Vegas main page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Should be able to visit http://localhost:3000 and render a navgivation bar with the title and nav buttons', () => {
    cy.get('.nav-logo').should('be.visible')
      .get('.home-link')
      .contains('Home')
      .get('.dashboard-link')
      .contains('Dashboard')
      .get('.drivers-link')
      .contains('Drivers')
      .get('.constructors-link')
      .contains('Constructors')
      .get('.fun-link')
      .contains('Fun')
  });

  it('Should be able to visit http://localhost:3000 and show a welcome message, instructions, and a vegas photo', () => {
    cy.get('.title').contains('Welcome to F1 takes Vegas! Your 2022 quick guide to all teams and drivers.')
      .get('.instructions').contains('Click the links above to view all F1 drivers and teams, like your favorites, and get some fun drink recommendations!')
      .get('.vegas').should('be.visible')
      .get('.question').contains('F1 Last Vegas Circuit: Coming November 2023. Are you ready?')

  });


  it('Should be directed to the main page when user clicks the Home button', () => {
    cy.get('.home-link').click()
      .url().should('include', '/')
    });

  it('Should be directed to the dashboard page when user clicks the dashboard button', () => {
    cy.get('.dashboard-link').click()
      .url().should('include', '/dashboard')
  });

  it('Should be directed to the drivers page when user clicks the drivers button', () => {
  cy.get('.drivers-link').click()
    .url().should('include', '/allDrivers')
  });

  it('Should be directed to the learn page when user clicks the Add sighting button', () => {
    cy.get('.constructors-link').click()
      .url().should('include', '/allConstructors')
  })

it('Should allow the user to use the back and forward buttons to go to a page in the viewer history', () => {
  cy.get('.drivers-link').click()
    .get('.constructors-link').click()
    .go('back')
    .location('pathname').should('include', '/allDrivers')
    .go('forward')
    .location('pathname').should('not.include', '/allDrivers')
  })

  it.only('Should give the user a message if they navigate to an incorrect URL', () => {
    cy.visit('http://localhost:3000/123')
      .get('.404').contains(`Sorry, the url/page you requested does not exist.`)
  })
})
