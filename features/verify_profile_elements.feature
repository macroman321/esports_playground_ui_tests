#
# FILE NAME: verify_profile_elements
# DESCRIPTION: verify_profile_elements.feature
# AUTHOR: Milan Šubarević (MŠ)
# CREATED: 13-Nov-18
# NOTES:
#

Feature: Verify profile elements

  Scenario: Verify profile elements
    When I log in as user "qa_user_1"
    Then I should see the user has been successfully logged in
    When I go my profile page
    Then I should see all the expected profile elements present
