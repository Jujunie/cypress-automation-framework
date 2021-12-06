class AutoHomePage_PO {
    visitAutoHomepage() {
        cy.visit("/");
    }
    clickOn_Login_Button() {
        cy.get('#customer_menu_top').click()
    }
    clickOn_contactUs_Button() {
        cy.get('[href="https://automationteststore.com/index.php?rt=content/contact"]').click();
    }
}
export default AutoHomePage_PO;