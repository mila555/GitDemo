Feature: Application Login



Background:
Given Validate the browser with "chrome"
When Browser is triggered
Then Check if browser is started




@PortalTest
Scenario: Home page default login
Given User is on landing page
When User login into application with "tomsmith" and password "SuperSecretPassword!"
Then secure area page is displayed
