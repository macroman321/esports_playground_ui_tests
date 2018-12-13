#
# FILE NAME: terms_of_service.feature
# DESCRIPTION: terms of service FEATURE
# AUTHOR: Ivan Babic (IB)
# CREATED: 11-Dec-2018
# NOTES:
#

Feature: Terms of Service

  @manual
  Scenario: Verify Terms of Service page
    When I click on the Terms of Service link
    Then I should be taken to the Terms of Service page
