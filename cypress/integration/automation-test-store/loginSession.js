/// <reference types="Cypress" />

import AutoHomePage_PO from "../../support/pageObjects/automatin-test-store/AutoHomePage_PO";

describe ("Test login functions.", () => {
    Cypress.config('experimentalSessionSupport', true);

    beforeEach(function() {
        // const loginPage_PO= new AutoHomePage_PO();
        // loginPage_PO.visitLoginpage();
    });

    it("My Account is displayed if the user logged in successfully.", () => {
        // cy.visit("/");
        // cy.get('#customer_menu_top').click();
        cy.login('amyuser', 'wellbeing123');
        cy.visit("/index.php?rt=account/login");
        // // cy.get('.returncustomer').should("be.visible");
        // cy.get('#loginFrm_loginname').type("amyuser")
        // cy.get('#loginFrm_password').type("wellbeing123");
        // cy.get("button[title='Login']").click();
        cy.get('.heading1 > .maintext').should("contain.text", " My Account")
    })

    it("Edit Account Option is displayed if the user logged in successfully.", () => {
        // cy.visit("/");
        // cy.get('#customer_menu_top').click();
        cy.login('amyuser', 'wellbeing123');
        cy.visit("/index.php?rt=account/login");
        cy.get("a[title='Edit account details']").should("be.visible")
    })

    it("Edit Account Option is not displayed if the user logged in successfully.", () => {
        // cy.visit("/");
        // cy.get('#customer_menu_top').click();
        cy.login('amyuser', 'wellbeing123');
        cy.visit("/index.php?rt=account/login");
        // cy.get("a[title='Edit account details']").should("not.be.visible")
        cy.get("a[title='Edit account details']").should("not.exist")
    })

})