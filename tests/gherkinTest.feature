Feature: Validate Hacker News newest articles are sorted correctly

  Scenario: Fetch and validate sorted articles from Hacker News
    Given the Hacker News newest page is available
    When I request the first 100 newest articles
    Then the articles should be sorted from newest to oldest
