#
# FILE NAME: tournament_page.feature
# DESCRIPTION: tournament page FEATURE
# AUTHOR: Ivan Babic (IB)
# CREATED: 11-Dec-2018
# NOTES:
#

Feature: Tournament page

  @manual
  Scenario: Before the tournament begins a user can see a list of all players that have joined the tournament
    When I am on the tournament page
    And I click on the Players tab
    Then I should see a list of all players that have joined the tournament

  @manual
  Scenario: After the tournament begins a user can see a ranked list of all players that are participating in the tournament
    When I am on the tournament page
    And I click on the Ranking tab
    Then I should see a ranked list of all players that are participating in the tournament

  @manual
  Scenario: A user can join a tournament
    When I click on the play and win/join button
    And I click on join again
    Then I should see that the play and win/join button has changed to joined

  @manual
  Scenario: A  user can see a list of all the prizes
    When I click on the Prizes tab
    Then I should see a list of all the tournament prizes

  @manual
  Scenario: A user can see the rules of the tournament
    When I click on the Rules tab
    Then I should see the rules of the tournament

  @manual
  Scenario: Toggle fullscreen
    When I click on the Toggle Fullscreen button
    Then I should see the game in the fullscreen mode
