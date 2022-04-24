describe('F1 Takes Vegas driver page', () => {

  beforeEach(() => {
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
    .visit('http://localhost:3000/allDrivers')
    })

  it('Should be able to visit https://f1-takes-vegas.herokuapp.com/api/v1/drivers and render a navgivation bar with the title and nav buttons', () => {
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

  it('Should be able to visit the drivers page and see each drivers information', () => {
    cy.contains('F1 Takes Vegas')
      .get('.card-container').eq(0).should('be.visible')
      .get('.driver-card').eq(0).should('be.visible')
      .contains('Alexander Albon')
      .get('.driver-team').eq(0).contains('Team: Williams')
      .get('.driver-dob').eq(0).contains('DOB: 1996-03-23')
      .get('.driver-nationality').eq(0).contains('Nationality: Thai')
      .get('.driver-rank').eq(0).contains('2022 Rank: 16')
      .get('.driver-url').eq(0).should('be.visible')
    });

    it('should be able to like and unlike a driver card', () => {
		cy.get('.blue-heart').eq(0).should('be.visible').click()
    cy.get('.color-heart').eq(0).should('be.visible').click()
    cy.get('.blue-heart').eq(0).should('be.visible').click()
	})
});
