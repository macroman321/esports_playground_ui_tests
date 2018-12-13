#
# FILE NAME: gshare.feature
# DESCRIPTION: gshare FEATURE
# AUTHOR: Ivan Babic (IB)
# CREATED: 11-Dec-2018
# NOTES:
#

Feature: GShare

  Scenario: A user can download GShare for a specific OS
    When I click on the download button
    Then I should see that the download has started