#
# FILE NAME: header.feature
# DESCRIPTION: header FEATURE
# AUTHOR: Ivan Babic (IB)
# CREATED: 11-Dec-2018
# NOTES:
#

  Feature: Header

    Scenario: Touraments
      When I click on the tournaments button
      Then I should see the tournaments page

    Scenario: Gshare
      When I click on the GShare button
      Then I should see the GShare download page

    Scenario: Balance
      When I am logged in
      Then I should see my balance

    Scenario: Avatar
      When I click on the avatar image
      Then I should see the dropdown menu