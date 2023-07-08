import { Given, Then, When } from "@cucumber/cucumber";
import {Page, Browser, expect} from '@playwright/test'
let page: Page
let browser: Browser
Given('Jane enters her account credentials , {string} and {string} ,in the login page', function (email:string, password: string) {
    // Write code here that turns the phrase above into concrete actions
    return expect(email).toEqual("<email>")

});

When('She clicks the login button', function () {
    // Write code here that turns the phrase above into concrete actions
    return console.log("Login")
});

Then('She should be taken to her account', function () {
    // Write code here that turns the phrase above into concrete actions
    return console.log("dashoard")

});