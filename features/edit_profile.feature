#
# FILE NAME: edit_profile
# DESCRIPTION: edit_profile.feature
# AUTHOR: Milan Šubarević (MŠ)
# CREATED: 14-Nov-18
# NOTES:
#

Feature: Edit profile

  Scenario: Change first name and last name
    When I log in as user "qa_user_1"
    Then I should see the user has been successfully logged in
    When I go to my profile page
    And I click on the Edit profile button
    Then I should see the changes I have made displayed on my profile

  Scenario: Verify any changes I've made are not saved if I press the cancel button
    When I log in as user "qa_user_1"
    Then I should see the user has been successfully logged in
    When I go to my profile page
    And I verify my profile information that I have already entered
    And I click on the Edit profile button
    And I make some changes to my profile
    And I click the cancel button
    Then I should see all my old information being displayed

  Scenario: Change avatar
    When I log in as user "qa_user_1"
    Then I should see the user has been successfully logged in
    When I go to my profile page
    And I click on the avatar icon
    And I choose a random avatar
    Then I should see the avatar I have chosen displayed

  Scenario: Verify popup doesn't close if you click outside of it after making some changes
    When I log in as user "qa_user_1"
    Then I should see the user has been successfully logged in
    When I go to my profile page
    And I click on the Edit profile button
    And I make some changes to my profile
    And I click outside of the Edit profile popup
    Then I should see the Edit profile popup is still open
