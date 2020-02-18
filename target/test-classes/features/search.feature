Feature: Search and place order for vegetables

@SeleniumTest
Scenario: Search for items and validate results
Given User is on Greencart landing page
When User searched for Cucumber vegetable
And Added items to cart
And User proceeded to checkout page for purchase
Then  "Cucumber" results are  displayed


@RegressionTest
Scenario Outline: Search for items and then move to checkout page
Given User is on Greencart landing page
When User searched for <Name> vegetable
And Added items to cart
And User proceeded to checkout page for purchase
Then verify selected <Name> items are  displayed in Check out page

Examples:
|Name    |
|Brinjal |
|Beetroot   |
  



