#
# FILE NAME: forgot_password.feature
# DESCRIPTION: forgot password FEATURE
# AUTHOR: Ivan Babic (IB)
# CREATED: 11-Dec-2018
# NOTES:
#

Feature: Forgot Password

  @manual
  Scenario: Send reset request
    When I input the email
    And I click on the Send button
    Then I should see that the password reset request has been sent
