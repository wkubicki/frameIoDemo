Feature: Open Log in page

Scenario: Log in page is open
    Given I open page
    When I click login button
    When I enter "wojciech.kubicki@gmail.com" into email address
    When I click LETS GO buton
    When I enter "Kubek123@@" password
    When I click LETS GO buton
    Then I am log in as "Wojciech"