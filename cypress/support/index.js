// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
require('cypress-xpath')

// Import commands.js using ES2015 syntax:
import './commands'
//import cypress from "cypress";

// Alternatively you can use CommonJS syntax:
// require('./commands')

//Ignore xhr output while running test
// Cypress.Server.defaults({
//     whitelist: (xhr) => {
//         return true;
//     }
// })

Cypress.Server.defaults({
    delay: 500,
    force404: false,
    ignore: (xhr) => {
        // handle custom logic for filtering XHR requests
    },
})



//register the command of allure plugin
import '@shelex/cypress-allure-plugin';
