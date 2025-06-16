let signup
let email
import { fakerEN_NG as faker } from "@faker-js/faker"

before(() => {
    cy.fixture('elements').then(sel => {
        signup = sel.elements.signupPage
    })
})

