$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/TechFiosLoginOutline.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#these tag will take presidence over the @scenario"
    }
  ],
  "line": 3,
  "name": "TechFios billing login funtionality validation",
  "description": "",
  "id": "techfios-billing-login-funtionality-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@LoginFeatureOutline"
    }
  ]
});
formatter.before({
  "duration": 3449842700,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should be aboe to login with valid credentials",
  "description": "",
  "id": "techfios-billing-login-funtionality-validation;user-should-be-aboe-to-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters username as \"demo@techfios.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters password as \"abc123\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinations.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 834668200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinations.user_enters_username_as(String)"
});
formatter.result({
  "duration": 140766601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinations.user_enters_password_as(String)"
});
formatter.result({
  "duration": 77201500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinations.user_clicks_on_signin_button()"
});
formatter.result({
  "duration": 3684402699,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinations.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 9657500,
  "status": "passed"
});
formatter.after({
  "duration": 16799072199,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "User should be aboe to login with valid credentials",
  "description": "",
  "id": "techfios-billing-login-funtionality-validation;user-should-be-aboe-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User enters username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User enters password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User clicks on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User should not land on Dashboard page",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "techfios-billing-login-funtionality-validation;user-should-be-aboe-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 22,
      "id": "techfios-billing-login-funtionality-validation;user-should-be-aboe-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "demo2@techfios.com",
        "abc123"
      ],
      "line": 23,
      "id": "techfios-billing-login-funtionality-validation;user-should-be-aboe-to-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc124"
      ],
      "line": 24,
      "id": "techfios-billing-login-funtionality-validation;user-should-be-aboe-to-login-with-valid-credentials;;3"
    },
    {
      "cells": [
        "",
        ""
      ],
      "line": 25,
      "id": "techfios-billing-login-funtionality-validation;user-should-be-aboe-to-login-with-valid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1251278199,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User should be aboe to login with valid credentials",
  "description": "",
  "id": "techfios-billing-login-funtionality-validation;user-should-be-aboe-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@LoginFeatureOutline"
    },
    {
      "line": 13,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User enters username as \"demo2@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User enters password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User clicks on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User should not land on Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinations.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 772509800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo2@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinations.user_enters_username_as(String)"
});
formatter.result({
  "duration": 153755200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinations.user_enters_password_as(String)"
});
formatter.result({
  "duration": 66884199,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinations.user_clicks_on_signin_button()"
});
formatter.result({
  "duration": 738518100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinations.user_should_not_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 6183400,
  "status": "passed"
});
formatter.after({
  "duration": 655123300,
  "status": "passed"
});
formatter.before({
  "duration": 1396182699,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should be aboe to login with valid credentials",
  "description": "",
  "id": "techfios-billing-login-funtionality-validation;user-should-be-aboe-to-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@LoginFeatureOutline"
    },
    {
      "line": 13,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User enters username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User enters password as \"abc124\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User clicks on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User should not land on Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinations.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 869296900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinations.user_enters_username_as(String)"
});
formatter.result({
  "duration": 118978000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc124",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinations.user_enters_password_as(String)"
});
formatter.result({
  "duration": 111123201,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinations.user_clicks_on_signin_button()"
});
formatter.result({
  "duration": 747225201,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinations.user_should_not_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 6689500,
  "status": "passed"
});
formatter.after({
  "duration": 648568200,
  "status": "passed"
});
