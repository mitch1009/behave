import { Given, Then, When } from "@cucumber/cucumber";

Given('Jane enters her account credentials , {string} and {string} ,in the login page', function (string, string2) {
    // Write code here that turns the phrase above into concrete actions
    return console.log("credentials")

});

When('She clicks the login button', function () {
    // Write code here that turns the phrase above into concrete actions
    return console.log("Login")
});

Then('She should be taken to her account', function () {
    // Write code here that turns the phrase above into concrete actions
    return console.log("dashoard")

});