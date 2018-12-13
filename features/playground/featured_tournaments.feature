#
# FILE NAME: featured_tournaments.feature
# DESCRIPTION: featured tournaments FEATURE
# AUTHOR: Ivan Babic (IB)
# CREATED: 11-Dec-2018
# NOTES:
#

Feature: Featured Tournaments

  @manual
  Scenario: A user can go through all of the featured tournaments
    When I click on the list of buttons
    Then I should be see differen ladders

  @manual
  Scenario: A user can join a featured tournament
    When I click on the play and win/join button
    And I click on join again
    Then I should be taken to the tournament page

  @manual
  Scenario: A user can cancel an attempt to join a featured tournament
    When I click on the the cancel button
    Then I should see that the join was canceled

  @manual
  Scenario: A user can go to the tournament page by clicking on the tournament cover
    When I click on the tournament cover
    Then I should be taken to the tournament page
