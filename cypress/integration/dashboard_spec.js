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
      cy.intercept('https://f1-takes-vegas.herokuapp.com/api/v1/drivers',
      { statusCode: 200,
        body: {
          "drivers": [
          {
          "id": 1,
          "name": "Alexander Albon",
          "dob": "1996-03-23",
          "nationality": "Thai",
          "team": "Williams",
          "profile_img": "https://upload.wikimedia.org/wikipedia/commons/9/90/AlexAlbonMarrakech2017.jpg",
          "flag_img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/2560px-Flag_of_Thailand.svg.png",
          "rank_2022": 16
          },
          {
          "id": 2,
          "name": "Fernando Alonso",
          "dob": "1981-07-29",
          "nationality": "Spanish",
          "team": "Alpine",
          "profile_img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Fernando_Alonso_NASCAR_Media_Tour_2018.jpg/1280px-Fernando_Alonso_NASCAR_Media_Tour_2018.jpg",
          "flag_img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/2560px-Bandera_de_Espa%C3%B1a.svg.png",
          "rank_2022": 14
          }]
        }
      })
    .visit('http://localhost:3000/dashboard')
    })

  it('Should be able to visit the dashboard page and render a navgivation bar with the title and nav buttons', () => {
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

  it('Should be able to visit the dashboard page and tell the user if no favorite drivers of constructors are selected yet.', () => {
    cy.get('.title-favorites').contains('Your Favorite Drivers:')
    cy.get('.title-favorites-constructor').contains('Your Favorite Constructors:')
    cy.get('.no-favorites-tag').contains('You currently do not have any favorites.')
    cy.get('.no-favorites-tag-driver').contains('You currently do not have any favorites.')
  })

  it('Should be able to visit the drivers page, like a driver, and see that driver card with a colored icon on the dashboard', () => {
    cy.get('.drivers-link').click()
      .get('.blue-heart').eq(0).click()
      .get('.color-heart').eq(0).should('be.visible')
      .get('.dashboard-link').click()
      .get('.driver-card').eq(0).should('be.visible')
  })

  it('Should be able to click the icon to unsave a driver from the dashboard page', () => {
    cy.get('.drivers-link').click()
      .get('.blue-heart').eq(0).click()
      .get('.color-heart').eq(0).should('be.visible')
      .get('.dashboard-link').click()
      .get('.driver-card').eq(0).should('be.visible')
      .get('.color-heart').eq(0).click()
      .get('.no-favorites-tag-driver').should('be.visible')
  })

  it('Should be able to visit the constructors page, like a constructor, and see that constructor card with a colored icon on the dashboard', () => {
      cy.get('.constructors-link').click()
        .get('.blue-heart').eq(0).click()
        .get('.color-heart').eq(0).should('be.visible')
        .get('.dashboard-link').click()
        .get('.constructor-card').eq(0).should('be.visible')
  })

  it('Should be able to click the icon to unsave a constructor from the dashboard page', () => {
    cy.get('.constructors-link').click()
      .get('.blue-heart').eq(0).click()
      .get('.color-heart').eq(0).should('be.visible')
      .get('.dashboard-link').click()
      .get('.constructor-card').eq(0).should('be.visible')
      .get('.color-heart').eq(0).click()
      .get('.no-favorites-tag').should('be.visible')
  })
});
