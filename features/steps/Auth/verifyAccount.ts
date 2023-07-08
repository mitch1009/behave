import { Given, Then } from "@cucumber/cucumber";

Given('Jane recieved the OTP and enters it in the input as {string}', function (otp) {
    // Write code here that turns the phrase above into concrete actions
    console.log(otp)
    return 'pending'
});

Then('Her account should be activated', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('redirected to her dashboard', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
