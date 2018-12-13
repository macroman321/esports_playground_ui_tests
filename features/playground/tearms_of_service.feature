#
# FILE NAME: tearms_of_service.feature
# DESCRIPTION: tearms of service FEATURE
# AUTHOR: Ivan Babic (IB)
# CREATED: 11-Dec-2018
# NOTES:
#

  Feature: Tearms of Service

    Scenario: Verify Terms of Service page
      When I click on the Terms of Service link
      Then I should be taken to the Terms of Service page