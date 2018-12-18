#
# FILE NAME: login.feature
# DESCRIPTION: login FEATURE
# AUTHOR: Ivan Babic (IB)
# CREATED: 11-Dec-2018
# NOTES:
#

Feature: Login

  @manual
  Scenario: Login to your account using username and password
    When I login as user "qa_user_1" using username and password
    Then I should see that I am logged in

  @manual
  Scenario: Login to your account using email and password
    When I login as user "qa_user_1"
    Then I should see that I am logged in

  @manual
  Scenario: Username is required when logging in
    When I attempt to login without providing a username
    Then I should see that the login button is inactive

  @manual
  Scenario: Logging in with invalid Username returns error
    When I attempt to login with an invalid username
    Then I should see that the login fails with the message ""

  @manual
  Scenario: Logging in with invalid Password returns error
    When I attempt to login with an invalid username
    Then I should see that the login fails with the message ""