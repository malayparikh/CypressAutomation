describe("My first test suite", function () {
  it("My first test case", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/")
    cy.wait(2000)
    cy.get("input[type='search']").type("ca")
    cy.get(".product:visible").should("have.length", 4)
  })
})
