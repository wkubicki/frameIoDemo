/// <reference types="cypress"/>

import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import { onHomePage } from "../page_objects/homePage.js"
import { onLoginPage } from "../page_objects/loginPage.js"
import { onMainAccountPage } from "../page_objects/MainAccountPage.js"
                        

Given('I open page',()=>{
    cy.visit("/");
})
 
When('I click login button',()=>{
    onHomePage.clickLoginButton();
})

When("I enter {string} into email address",(email)=>{
    onLoginPage.typeEmailAddress(email);
})

When("I click LETS GO buton",()=>{
    onLoginPage.clickLetsGoButton();
})

When("I enter {string} password", (password)=>{
    onLoginPage.typePassword(password);
})

When('I click ENTER', ()=>{
    onLoginPage.clickENTER();
})

Then('I am log in as {string}', (name) =>{
    onMainAccountPage.verifyLoggedUser(name);
})
    

