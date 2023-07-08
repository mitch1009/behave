import { Given, Then } from "@cucumber/cucumber";

Given('Jane recieved the OTP and enters it in the input as {string}', function (otp) {
    // Write code here that turns the phrase above into concrete actions
    console.log(otp)
    return console.log("Logged out")

});

Then('Her account should be activated', function () {
    // Write code here that turns the phrase above into concrete actions
    return console.log("Logged out")

});

Then('redirected to her dashboard', function () {
    // Write code here that turns the phrase above into concrete actions
    return console.log("Logged out")

});
