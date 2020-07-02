describe("my first e2e test", () => {
    it("actualy works", () => {
        expect(true).to.equal(true);
    });
});

describe("title test", () => {
    it("actualy works", () => {
        cy.visit("http://localhost:3000")
    });
});