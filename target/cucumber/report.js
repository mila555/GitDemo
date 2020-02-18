$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("search.feature");
formatter.feature({
  "line": 1,
  "name": "Search and place order for vegetables",
  "description": "",
  "id": "search-and-place-order-for-vegetables",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Search for items and validate results",
  "description": "",
  "id": "search-and-place-order-for-vegetables;search-for-items-and-validate-results",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@SeleniumTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on Greencart landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User searched for Cucumber vegetable",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User proceeded to checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "\"Cucumber\" results are  displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefinitions.user_is_on_greencart_landing_page()"
});
formatter.result({
  "duration": 16672876400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 18
    }
  ],
  "location": "MyStepDefinitions.user_searched_for_vegetable(String)"
});
formatter.result({
  "duration": 10562322300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinitions.added_items_to_cart()"
});
formatter.result({
  "duration": 5581943300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinitions.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 5247168400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 1
    }
  ],
  "location": "MyStepDefinitions.results_are_displayed(String)"
});
formatter.result({
  "duration": 66118700,
  "status": "passed"
});
formatter.after({
  "duration": 449859000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Search for items and then move to checkout page",
  "description": "",
  "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@SeleniumTest"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User is on Greencart landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User searched for \u003cName\u003e vegetable",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User proceeded to checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "verify selected \u003cName\u003e items are  displayed in Check out page",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;",
  "rows": [
    {
      "cells": [
        "Name"
      ],
      "line": 21,
      "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;;1"
    },
    {
      "cells": [
        "Brinjal"
      ],
      "line": 22,
      "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;;2"
    },
    {
      "cells": [
        "Beetroot"
      ],
      "line": 23,
      "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "Search for items and then move to checkout page",
  "description": "",
  "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@SeleniumTest"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User is on Greencart landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User searched for Brinjal vegetable",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User proceeded to checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "verify selected Brinjal items are  displayed in Check out page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefinitions.user_is_on_greencart_landing_page()"
});
formatter.result({
  "duration": 12127769500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brinjal",
      "offset": 18
    }
  ],
  "location": "MyStepDefinitions.user_searched_for_vegetable(String)"
});
formatter.result({
  "duration": 10387876400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinitions.added_items_to_cart()"
});
formatter.result({
  "duration": 5864764800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinitions.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 5459350700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brinjal",
      "offset": 16
    }
  ],
  "location": "MyStepDefinitions.verify_selected_items_are_displayed_in_check_out_page(String)"
});
formatter.result({
  "duration": 50459300,
  "status": "passed"
});
formatter.after({
  "duration": 110319200,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Search for items and then move to checkout page",
  "description": "",
  "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@SeleniumTest"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User is on Greencart landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User searched for Beetroot vegetable",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User proceeded to checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "verify selected Beetroot items are  displayed in Check out page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefinitions.user_is_on_greencart_landing_page()"
});
formatter.result({
  "duration": 12098488800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Beetroot",
      "offset": 18
    }
  ],
  "location": "MyStepDefinitions.user_searched_for_vegetable(String)"
});
formatter.result({
  "duration": 10389455600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinitions.added_items_to_cart()"
});
formatter.result({
  "duration": 5709568500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinitions.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 5224413200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Beetroot",
      "offset": 16
    }
  ],
  "location": "MyStepDefinitions.verify_selected_items_are_displayed_in_check_out_page(String)"
});
formatter.result({
  "duration": 50874000,
  "status": "passed"
});
formatter.after({
  "duration": 92128800,
  "status": "passed"
});
});