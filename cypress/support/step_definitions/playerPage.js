import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import { onPlayerPage } from "../page_objects/PlayerPage.js"

When('I move slider', ()=>{
    onPlayerPage.moveSliderToPercent();
})

When('I click Play button', ()=>{
    onPlayerPage.clickPlayButton();
})