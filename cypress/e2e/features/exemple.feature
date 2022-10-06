Feature: Verify external URL from social media

  Background:
    Given the user navigate to "Home Page"
    When the user click on "Accept Cookie" "button"
    Then the "Accept Cookie" "button" should be not visible
    When the user click on "Cross" "button"
    Then the "Cross" "button" should be not visible


  Scenario Outline: Check the "<footerElement>" social media button in new tab
    Then the "<footerElement>" "link" should be visible
    When the user access in new tab the "<footerElement>" "link"
    Then the user is redirected in new tab to "<socialMediaUrl>" page

    Examples:
      | footerElement | socialMediaUrl |
      | Facebook      | Facebook       |
      | Twitter       | Twitter        |
      | Youtube       | Youtube        |
