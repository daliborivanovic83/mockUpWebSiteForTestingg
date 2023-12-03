describe("Get all products list first model", () => {
  it("Get user detail by email", () => {
    cy.request({
      method: "GET",
      url: "https://automationexercise.com/api/getUserDetailByEmail",
      qs: {
        email: "daba@gmail.com",
      },
    }).then((response) => {
      //Asserting the status code to be 200 for successful response
      expect(response.status).to.eq(200);
      cy.log(response.body);
    });
  });
});
