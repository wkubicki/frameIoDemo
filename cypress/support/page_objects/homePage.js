/// <reference types="cypress"/>

export class HomePage{
    clickLoginButton(){
        cy.contains('Log in').click();
    }

    typeEmailAddress(email){
        cy.get('input[name="email"]').type(email);
    }
}

export const onHomePage = new HomePage()