describe("Update user detail", () => {
  it("PUT update user details", () => {
    cy.request({
      method: "PUT",
      url: "https://automationexercise.com/api/updateAccount",
      qs: {
        name: "Dalibora",
        email: "daba@gmail.com",
        password: "Aurora1983",
        title: "Ms",
        birth_date: "25",
        birth_month: "11",
        birth_year: "1993",
        first_name: "Dalib",
        last_name: "Ivanov",
        company: "2brand",
        address1: "Oplenacka 155",
        address2: "Cajkina 111",
        country: "Serbia",
        state: "Serbia",
        city: "Nis",
        zipcode: "16000",
        mobile_number: "381607616644",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.log(response.body);
    });
  });
});
