/// <reference types="Cypress" />

import HomePage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO";
import AutoHomePage_PO from "../../support/pageObjects/automatin-test-store/AutoHomePage_PO";

describe("Test Contact Us form via Automation Test Store", () => {
    const autoHomePage = new AutoHomePage_PO();


    before(function () {
        cy.fixture("webdriver-uni_userDetails").as("user")
    })
    it("Should be able to submit a successful submission via contact us form", () => {
        // cy.visit("https://www.automationteststore.com/");
        // cy.get('[href="https://automationteststore.com/index.php?rt=content/contact"]').click();
        autoHomePage.visitAutoHomepage();
        autoHomePage.clickOn_contactUs_Button();
        // cy.xpath("//a[contains(@href, 'contact')]").click();
        cy.get("@user").then((user) => {
            cy.get('#ContactUsFrm_first_name').type(user.first_name);
            cy.get('#ContactUsFrm_email').type(user.email);
        })
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
        cy.get('#ContactUsFrm_enquiry').type("How long will the delivery be taken?");
        cy.get("button[title='Submit']").click();
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!');
    });
})