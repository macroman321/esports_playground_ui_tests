#
# FILE NAME: edit_profile
# DESCRIPTION: edit_profile.feature
# AUTHOR: Milan Šubarević (MŠ)
# CREATED: 14-Nov-18
# NOTES:
#

Feature: Edit profile

  Scenario: Verify popup doesn't close if you click outside of it after making some changes
    When I log in as user "qa_user_1"
    Then I should see the user has been successfully logged in
    When I go my profile page
    And I click on the Edit profile button
    And I make some changes to my profile
    And I click outside of the Edit profile popup
    Then I should see the Edit profile popup is still open
