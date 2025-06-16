Feature: Signup Feature
    As a user, I should be able to Signup

    Scenario:A user should be able to signup successfully without referral code after filling all fields.
        Given I am on the home page
        When I click on the homepage Signup Button
        Then I should see the signup form
        When I fill in the full name
        And I fill in the business name
        And I fill in the business email
        And I fill in the business phone number
        And I fill in the business reg number
        And I click on the Next Button
        And I fill in the business website
        And I fill in the business instagram handle
        And I fill in the business twitter handle
        And I select how I heard about mima
        And I fill in the password
        And I click on the Sign Up Button
        Then I should see the OTP page
        When I insert the OTP
        Then I should see the welcome page
