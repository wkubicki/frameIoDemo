import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import { onMainAccountPage } from "../page_objects/MainAccountPage.js"

When('I click on the {string} project', (ind)=>{
    onMainAccountPage.clickOnTheProject(ind);
})

When('I double click on the {string} project', (ind)=>{
    onMainAccountPage.doubleClickOnTheProject(ind);
})
