#
# FILE NAME: logout.feature
# DESCRIPTION: logout FEATURE
# AUTHOR: Ivan Babic (IB)
# CREATED: 11-Dec-2018
# NOTES:
#

Feature: Logout

  @manual
  Scenario: Logout
    When I click on the Logout button
    Then I should be taken to the login page
