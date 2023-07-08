import { Given, Then, When } from "@cucumber/cucumber";
Given('Jane forgot her password and clicks on forgot pasword link', function () {
    // Write code here that turns the phrase above into concrete actions
    
    return console.log("Logged out")

});
Then('she should be presented with a page to enter email as {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    
    return console.log("Logged out")

});
When('she clicks reset password button', function () {
    // Write code here that turns the phrase above into concrete actions
    
    return console.log("Logged out")

});

Then('she recieves a password reset link or OTP', function () {
    // Write code here that turns the phrase above into concrete actions
    return console.log("Logged out")
});

Then('she enters  the OTP as {string} and the new password as {string}  and repeat password as {string}', function (string, string2, string3) {
    // Write code here that turns the phrase above into concrete actions
    return console.log("Logged out")
});
When('Jane clicks the change password button', function () {
    // Write code here that turns the phrase above into concrete actions
    return console.log("Logged out")
});

Then('Her password gets updated and she is taken to the dashboard', function () {
    // Write code here that turns the phrase above into concrete actions
    return console.log("Logged out")
});
