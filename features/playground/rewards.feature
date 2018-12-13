#
# FILE NAME: rewards.feature
# DESCRIPTION: rewards FEATURE
# AUTHOR: Ivan Babic (IB)
# CREATED: 11-Dec-2018
# NOTES:
#

Feature: Rewards

  @manual
  Scenario: A user can see which rewards he has won
    When I click on the Rewards tab
    Then I should see a list of all off my claimed and unclaimed rewards

  @manual
  Scenario: A user can see more info on the tournament page by clicking on the View Tournament button
    When I click on te View Tournament button
    Then I should be taken to the tournament page

  @manual
  Scenario: A user can claim a GN Gold reward
    When I click on the Claim button
    And I click on Claim
    Then I should see my balance update for the amount of the prize
    And That the claim button is changed to claimed

  @manual
  Scenario: A user can claim a MGO reward after inputting the address 
    When I click on the Claim button
    And I input an address
    And I click on Get Reward
    Then I should see that the claim button is changed to claimed
