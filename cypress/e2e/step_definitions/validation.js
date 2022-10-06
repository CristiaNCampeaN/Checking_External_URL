import { Then } from "@badeball/cypress-cucumber-preprocessor";


/**
 * @example The "produse" "link" should be visible
 * @summary Verify that a locator is displayed
 * @description Notes:
 * -The locators name and category has to be defined in <specific page>.locator.<locator category>.<locator name>
 * @param locatorName {string} e.g "produse", the name of the locator
 * @param locatorType {string} e.g "link", the category of the locator
 * @returns {Promise}
 */
function elementistVisible(locatorName, locatorType) {
    cy.getElement(locatorName, locatorType).should('be.visible')
}
Then(/^the "([^"]*)" "([^"]*)" should be visible$/, elementistVisible);


/**
 * @example
 * Then the user is redirected in new tab to "Facebook Page"
 * @summary Verify external URL
 * @description Notes:
 * -Comparing the current URL with the URL of the external page
 * @param pageName {String} e.g. "Facebook Page", will navigate to that page
 * @returns {Promise}
 */
function verifyExternalUrl(pageName){
    let values = {
        'facebook': "https://www.facebook.com/eMAG.ro",
        'twitter': "https://twitter.com/emag",
        'youtube': "https://www.youtube.com/user/wwweMAGro",
    }
    cy.url().should("eql", values[pageName.toLowerCase()])
}
Then(/^the user is redirected in new tab to "([^"]*)" page$/, verifyExternalUrl)


/**
 * @example The "Cross" "button" should be visible
 * @summary Verify that a locator is not displayed
 * @description Notes:
 * -Verify if elements is not displayed after different actions  from the user
 * @param locatorName {string} e.g "Cross", the name of the locator
 * @param locatorType {string} e.g "button", the category of the locator
 * @returns {Promise}
 */
function elementNotVisible(locatorName, locatorType) {
    cy.getElement(locatorName, locatorType).should('not.be.visible')
}
Then(/^the "([^"]*)" "([^"]*)" should be not visible$/, elementNotVisible)
