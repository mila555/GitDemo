$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("search.feature");
formatter.feature({
  "line": 1,
  "name": "Search and place order for vegetables",
  "description": "",
  "id": "search-and-place-order-for-vegetables",
  "keyword": "Feature"
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
      "name": "@RegressionTest"
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
      "name": "@RegressionTest"
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
  "duration": 12363520300,
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
  "duration": 10303556400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinitions.added_items_to_cart()"
});
formatter.result({
  "duration": 5518633200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinitions.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 5334958500,
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
  "duration": 54681800,
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
      "name": "@RegressionTest"
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
  "duration": 9814989500,
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
  "duration": 10443096100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinitions.added_items_to_cart()"
});
formatter.result({
  "duration": 5534170400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinitions.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 5379612000,
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
  "duration": 61786200,
  "status": "passed"
});
});