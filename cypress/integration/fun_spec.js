describe('F1 Takes Vegas fun page', () => {

  beforeEach(() => {
    cy.intercept('https://f1-takes-vegas.herokuapp.com/api/v1/drinks',
    { statusCode: 200,
      body: {
        "drinks": [
        {
        "id": 1,
        "name": "Alexander Albon",
        "drink_name": "Gin and Tonic",
        "drink_photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Gin_and_Tonic_with_ingredients.jpg/1920px-Gin_and_Tonic_with_ingredients.jpg"
        },
        {
        "id": 2,
        "name": "Fernando Alonso",
        "drink_name": "Old Fashioned",
        "drink_photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Whiskey_Old_Fashioned1.jpg/1024px-Whiskey_Old_Fashioned1.jpg"
        }]
      }
    })
    .visit('http://localhost:3000/fun')
    })

  it('Should be able to visit the fun page and render a navgivation bar with the title and nav buttons', () => {
    cy.contains('F1 Takes Vegas')
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

  it('Should be able to visit the fun page and see a search bar', () => {
    cy.contains('F1 Takes Vegas')
      .get('.intro-tag')
      .contains('What drink is most like their drivers? Select a driver to find out!')
      .get('.select-bar').should('be.visible')
  });

  it('Should be able to select a driver and see their drink info', () => {
    cy.get('.select-bar').select('Alexander Albon')
      .get('.drink-driver').contains('Alexander Albon is a:')
      .get('.drink-type').contains('Gin and Tonic')
      .get('.drink-url').should('be.visible')
  });
});
