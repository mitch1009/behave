"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
(0, cucumber_1.Given)('Jane recieved the OTP and enters it in the input as {string}', function (otp) {
    // Write code here that turns the phrase above into concrete actions
    console.log(otp);
    return 'pending';
});
(0, cucumber_1.Then)('Her account should be activated', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
(0, cucumber_1.Then)('redirected to her dashboard', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
