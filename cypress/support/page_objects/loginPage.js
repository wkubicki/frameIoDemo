/// <reference types="cypress"/>

export class LoginPage{

    typeEmailAddress(email){
        cy.get('input[type="email"]').type(email);
    }

    clickLetsGoButton(){
        cy.get('button[type="submit"]').click();
    }

    typePassword(password){
        cy.wait(1000);
        cy.get('input[type="password"]').type(password);
    }

    clickENTER(){
        cy.get('div').contains('Keep the flow going').type('{enter}');
    }

}

export const onLoginPage = new LoginPage();