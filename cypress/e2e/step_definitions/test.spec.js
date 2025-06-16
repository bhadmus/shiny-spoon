import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";
import { fakerEN_NG as faker } from "@faker-js/faker"
let email
let signup
Before(() => {
    cy.on('uncaught:exception', () => {
        return false
    })
	cy.fixture('elements').then(sel => {
		homepage = sel.elements.homepage
		signup = sel.elements.signupPage
	})
	cy.fixture('creds').then((cred) => {
		email = cred
	})
})
Given(/^I am on the home page$/, () => {
	cy.visit('/');
});

When(/^I click on the homepage Signup Button$/, () => {
	cy.clickSignUpButton()
});

Then(/^I should see the signup form$/, () => {
	cy.verifySignupPage()
});

When(/^I fill in the full name$/, () => {
	cy.fillInFullname()
});

When(/^I fill in the business name$/, () => {
	cy.fillInBusinessName()
});

When(/^I fill in the business email$/, () => {
	cy.fillInBusinessEmail()

});

When(/^I fill in the business phone number$/, () => {
	cy.fillInBusinessPhoneNUmber()

});

When(/^I fill in the business reg number$/, () => {
	cy.fillInBusinessRegNumber()
});

When(/^I click on the Next Button$/, () => {
	cy.clickNextButton()
});

When(/^I fill in the business website$/, () => {
	return true;
});

When(/^I fill in the business instagram handle$/, () => {
	return true;
});

When(/^I fill in the business twitter handle$/, () => {
	return true;
});

When(/^I select how I heard about mima$/, () => {
	return true;
});

When(/^I fill in the password$/, () => {
	return true;
});

When(/^I click on the Sign Up Button$/, () => {
	return true;
});

Then(/^I should see the OTP page$/, () => {
	return true;
});

When(/^I insert the OTP$/, () => {
	return true;
});

Then(/^I should see the welcome page$/, () => {
	return true;
});
