import HomePage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO";
import Contact_Us_PO from "../../support/pageObjects/webdriver-uni/Contact_Us_PO";
/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    const homepage_PO = new HomePage_PO();
    const contact_Us_PO = new Contact_Us_PO()

    before(function () {
        cy.fixture('example').then(function (data) {
            // this.data = data;
            globalThis.data = data;
        })
    })

    beforeEach(function () {
        cy.visit(Cypress.env("webdriveruni_homepage") + "/Contact-Us/contactus.html")
        // homepage_PO.visitHomepage();
        // homepage_PO.clickOn_ContactUs_Button();
        });

    it("Should be able to submit a successful submission via contact us form", () => {
        // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include', 'contactus');
        //cy.get('#contact-us').click({force: true});
        // cy.get('[name="first_name"]').type(data.first_name);
        // cy.get('[name="last_name"]').type(data.last_name);
        // cy.get('[name="email"]').type(data.email);
        // cy.get('textarea.feedback-input').type('This is test comments.');
        // cy.get('[type="submit"]').click();
        // cy.get('#contact_reply > h1').should('have.text', 'Thank You for your Message!');
        contact_Us_PO.contactForm_Submission(data.first_name, data.last_name, data.email, 'This is test comments.', 'h1', 'Thank You for your Message!');
    });

    it("Should not be able to submit a successful submission via contact us form as all fields required", () => {
        // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        //cy.get('#contact-us').click({force: true});
        // cy.get('[name="first_name"]').type('Tom');
        // cy.get('[name="last_name"]').type('Jones');
        // // cy.get('[name="email"]').type('Tom.Smith@test.com');
        // cy.get('[type="submit"]').click();
        // cy.get('body').contains('Error: all fields are required');
        contact_Us_PO.contactForm_Submission(Cypress.env("first_name"), data.last_name, ' ', 'This is test comments.', 'body', 'Error: Invalid email address');

    });

})