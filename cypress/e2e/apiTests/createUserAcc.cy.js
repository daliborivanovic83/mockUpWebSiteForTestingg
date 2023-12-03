describe("Create users details", () => {
  it("Post create users details ", () => {
    cy.request({
      method: "POST",
      url: "https://automationexercise.com/api/createAccount",
      qs: {
        name: "Daxxx",
        email: "dabaaa@gmail.com",
        password: "Aurora19833",
        title: "Mr",
        birth_date: "31",
        birth_month: "9",
        birth_year: "1793",
        first_name: "Da",
        last_name: "Ba",
        company: "2",
        address1: "Oplenacka 55",
        address2: "Cajkina 11",
        country: "Tunis",
        state: "Africa",
        city: "Kairo",
        zipcode: "333000",
        mobile_number: "1607616644",
      },
    }).then((response) => {
      //Asserting the status code to be 200 for successful response
      expect(response.status).to.eq(200);
      cy.log(response.body);
    });
  });
});
