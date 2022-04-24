describe('F1 Takes Vegas constructors page', () => {

  beforeEach(() => {
    cy.intercept('https://f1-takes-vegas.herokuapp.com/api/v1/constructors',
    { statusCode: 200,
      body: {
        "constructors": [
          {
          "id": 23,
          "name": "Ferrari",
          "full_name": "Scuderia Ferrari",
          "base": "Maranello, Italy",
          "team_chief": "Mattia Binotto",
          "entry_year": 1950,
          "world_championships": "16",
          "rank": 1,
          "icon": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Ferrari-Logo.svg/1024px-Ferrari-Logo.svg.png",
          "car_img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Charles_Leclerc%2C_2019_Chinese_GP.jpg/2560px-Charles_Leclerc%2C_2019_Chinese_GP.jpg",
          "driver1": "Charles Leclerc",
          "driver2": "Carlos Sainz"
          },
          {
          "id": 24,
          "name": "Mercedes",
          "full_name": "Mercedes-AMG Petronas F1 Team",
          "base": "Brackley, United Kingdom",
          "team_chief": "Toto Wolff",
          "entry_year": 1970,
          "world_championships": "8",
          "rank": 2,
          "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Mercedes-Benz_in_Formula_One_logo.svg/2560px-Mercedes-Benz_in_Formula_One_logo.svg.png",
          "car_img": "https://upload.wikimedia.org/wikipedia/commons/a/a1/Nico_Rosberg_2010_Malaysia_race.jpg",
          "driver1": "Lewis Hamilton",
          "driver2": "George Russell"
          }]
        }
      })
    .visit('http://localhost:3000/allConstructors')
    })

  it('Should be able to visit the constructors page and render a navgivation bar with the title and nav buttons', () => {
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

  it('Should be able to visit the constructors page and see each teams information', () => {
    cy.contains('F1 Takes Vegas')
      .get('.card-container').eq(0).should('be.visible')
      .get('.constructor-card').eq(0).should('be.visible')
      .contains('Ferrari')
      .get('.full-name').eq(0).contains('Full Name: Scuderia Ferrari')
      .get('.team-base').eq(0).contains('Base: Maranello, Italy')
      .get('.team-entry').eq(0).contains('Entry Year: 1950')
      .get('.world_championships').eq(0).contains('World Championships: 16')
      .get('.team-car').eq(0).should('be.visible')
      .get('.team-rank').eq(0).contains('2022 Rank: 1')
      .get('.team-drivers').eq(0).contains('2022 Drivers: Charles Leclerc, Carlos Sainz')
    });
  //
    it('should be able to like and unlike a driver card', () => {
		cy.get('.blue-heart').eq(0).should('be.visible').click()
    cy.get('.color-heart').eq(0).should('be.visible').click()
    cy.get('.blue-heart').eq(0).should('be.visible').click()
	})
});
