// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })

Cypress.Commands.add("navigateTo_WebdriverUni_Homepage", () => {
    cy.visit("/")
})

Cypress.Commands.add("navigateTo_WebdriverUni_Checkbox_Page", () => {
    cy.visit("/" + "/Dropdown-Checkboxes-RadioButtons/index.html")
})

// Cypress.Commands.add("selectProduct", productName => {
//
// })

Cypress.Commands.add("login", (username, password )=> {
    cy.session([username, password], () => {
        cy.visit("/index.php?rt=account/login");
        cy.get('#loginFrm_loginname').type(username)
        cy.get('#loginFrm_password').type(password);
        cy.get("button[title='Login']").click();
    })
})

// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
