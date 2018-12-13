#
# FILE NAME: create_account.feature
# DESCRIPTION: create account FEATURE
# AUTHOR: Ivan Babic (IB)
# CREATED: 11-Dec-2018
# NOTES:
#

Feature: Create account

  @manual
  Scenario: Sign up a new user account
    When I input all of the required info
    And Press the Sign up button
    Then I should see that the account creation mail has been sent

  @manual
  Scenario: Email is required when creating a new account
    When I attempt to create a new account without providing an email
    Then I should see that the account creation fails with the message ""

  @manual
  Scenario: Username is required when creating a new account
    When I attempt to create a new account without providing a username
    Then I should see that the account creation fails with the message ""

  @manual
  Scenario: Password is required when creating a new account
    When I attempt to create a new account without providing a password
    Then I should see that the account creation fails with the message ""
