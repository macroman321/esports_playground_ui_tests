#
# FILE NAME: header.feature
# DESCRIPTION: header FEATURE
# AUTHOR: Ivan Babic (IB)
# CREATED: 11-Dec-2018
# NOTES:
#

Feature: Header

  @manual
  Scenario: Tournaments
    When I click on the tournaments button
    Then I should see the tournaments page

  @manual
  Scenario: Gshare
    When I click on the GShare button
    Then I should see the GShare download page

  @manual
  Scenario: Balance
    When I am logged in
    Then I should see my balance

  @manual
  Scenario: Avatar
    When I click on the avatar image
    Then I should see the dropdown menu
