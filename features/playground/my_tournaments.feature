#
# FILE NAME: my_tournaments.feature
# DESCRIPTION: my tournaments FEATURE
# AUTHOR: Ivan Babic (IB)
# CREATED: 11-Dec-2018
# NOTES:
#

Feature: My tournaments

  @manual
  Scenario: A user can see which tournaments he is participating in and has participated
    When I click on the My Tournaments tab
    Then I should see a list of all tournaments in which I have participated in and in which i am participating in

  @manual
  Scenario: A user can see more info on the tournament page by clicking on the View Tournament button
    When I click on the view tournament button
    Then I should be taken to the tournament page
