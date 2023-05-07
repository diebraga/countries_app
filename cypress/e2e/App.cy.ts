describe("App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Should visit the home page and click the Spanish flag", () => {
    cy.contains("h2", "Spain").click();
    cy.contains("h1", "Spain").should("exist");
    cy.get('[data-testid="search"]')
      .should("be.disabled")
      .should("have.value", "");
  });

  it("Should search for China and click the Chinese flag", () => {
    cy.get('[data-testid="search"]').type("China");
    cy.contains("h1", "Spain").should("not.exist");
    cy.contains("h2", "China").click();
    cy.contains("h1", "China").should("exist");
  });

  it("Should click the Pakistan flag from border countries and verify the title", () => {
    cy.get("img.emoji")
      .filter((index, element) => Cypress.$(element).attr("alt") === "🇵🇰")
      .click();
    cy.contains("h1", "Pakistan").should("exist");
    cy.get('[data-testid="search"]')
      .should("be.disabled")
      .should("have.value", "");
  });

  it("Should click the logo in the header and return to the home page", () => {
    cy.contains("a", "COUNTRIES APP").click();
  });
});

export {};
