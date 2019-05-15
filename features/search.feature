Feature: Verify user can search using Google

  Background:
    Given user opens Google homepage

  Scenario: Verify user can search for a search term
    When user enters search term "Epam"
    When presses Enter on keyboard
    Then title of page is "Google Search"
    Then search results are matching the search term