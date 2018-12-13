#
# FILE NAME: privacy policy.feature
# DESCRIPTION: privacy policy FEATURE
# AUTHOR: Ivan Babic (IB)
# CREATED: 11-Dec-2018
# NOTES:
#

Feature: Privacy Policy

  Scenario: Verify Privacy Policy page
    When I click on the Privacy Policy link
    Then I should be taken to the Pirivacy Policy page