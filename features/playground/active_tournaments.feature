#
# FILE NAME: active_tournaments.feature
# DESCRIPTION: active tournaments FEATURE
# AUTHOR: Ivan Babic (IB)
# CREATED: 11-Dec-2018
# NOTES:
#

Feature: Active Tournaments

  Scenario: A user can see which tournaments are currently active
    When I click on the Active Tournaments tab
    Then I should see all Active tournament cards

  Scenario: A user can join an active tournament
    When I click on the play and win/join button on the tournament card
    And I click on join again
    Then I should be taken to the tournament page

  Scenario: A user can cancel an attempt to join an active tournament
    When I click on the play and win/join button on the tournament card
    And I click on the cancel button
    Then I should see that the join was canceled
