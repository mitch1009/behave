import { Given, Then, When } from "@cucumber/cucumber";
  Given('jane is logged in and wants to Logout', function () {
    // Write code here that turns the phrase above into concrete actions
    return console.log("Logout")
  });


  When('she clicks the logout button', function () {
    // Write code here that turns the phrase above into concrete actions
    return console.log("click logout")

  });


  Then('she should be logged out of the system', function () {
    // Write code here that turns the phrase above into concrete actions
    return console.log("Logged out")

  });