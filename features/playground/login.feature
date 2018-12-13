#
# FILE NAME: login.feature
# DESCRIPTION: login FEATURE
# AUTHOR: Ivan Babic (IB)
# CREATED: 11-Dec-2018
# NOTES:
#

Feature: Login

  @manual
  Scenario: Login to your account
    When I provide the username and password combo for "qa_user_1"
    And Press the login button
    Then I should see that I am logged in

  @manual
  Scenario: Username is required when logging in
    When I attempt to login without providing a username
    Then I should see that the login fails with the message ""
					