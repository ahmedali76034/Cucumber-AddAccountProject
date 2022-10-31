$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/TechFiosNewAccounut.feature");
formatter.feature({
  "line": 2,
  "name": "Techfios bank and cash New Account Functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@AddAccountFeature"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters password as \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on signin Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on bank and cash",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on New Account",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters Account Title in accounts page as \"\u003cAccount Title\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters accounts description as \"\u003cDescription\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters account inital balance as \"\u003cInitial Balance\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters account number as \"\u003cAccount Number\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters contact person as \"\u003cContact Person\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters phone number as \"\u003cPhone\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters Internet Banking URL as \"\u003cInternet Banking URL\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on submit",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;",
  "rows": [
    {
      "cells": [
        "username",
        "Password",
        "Account Title",
        "Description",
        "Initial Balance",
        "Account Number",
        "Contact Person",
        "Phone",
        "Internet Banking URL"
      ],
      "line": 23,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "Saving",
        "This is created by AHMED ALI",
        "100",
        "123",
        "Ahmed Ali",
        "8178814",
        "https://www.wellsfargo.com/"
      ],
      "line": 24,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "checking",
        "This is created by AHMED ALI",
        "200",
        "323",
        "Ahmed Ali",
        "8178814",
        "https://www.BOFA.com/"
      ],
      "line": 25,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2543159700,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AddAccountFeature"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on signin Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on bank and cash",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on New Account",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters Account Title in accounts page as \"Saving\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters accounts description as \"This is created by AHMED ALI\" in accounts page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters account inital balance as \"100\" in accounts page",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters account number as \"123\" in accounts page",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters contact person as \"Ahmed Ali\" in accounts page",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters phone number as \"8178814\" in accounts page",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters Internet Banking URL as \"https://www.wellsfargo.com/\" in accounts page",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on submit",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "NewAccountStepDefinations.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 1429972500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "NewAccountStepDefinations.user_enters_the_username(String)"
});
formatter.result({
  "duration": 117971100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "NewAccountStepDefinations.user_enters_the_password(String)"
});
formatter.result({
  "duration": 115033400,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountStepDefinations.user_clicks_on_signin_Button()"
});
formatter.result({
  "duration": 1904140300,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountStepDefinations.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 7555900,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountStepDefinations.user_clicks_on_bank_and_cash()"
});
formatter.result({
  "duration": 88318000,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountStepDefinations.user_clicks_on_New_Account()"
});
formatter.result({
  "duration": 535784100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Saving",
      "offset": 47
    }
  ],
  "location": "NewAccountStepDefinations.user_enters_Account_Title_in_accounts_page_as(String)"
});
formatter.result({
  "duration": 86127300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is created by AHMED ALI",
      "offset": 37
    }
  ],
  "location": "NewAccountStepDefinations.user_enters_accounts_description_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 128282000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 39
    }
  ],
  "location": "NewAccountStepDefinations.user_enters_account_inital_balance_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 107609300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 31
    }
  ],
  "location": "NewAccountStepDefinations.user_enters_account_number_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 76955100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ahmed Ali",
      "offset": 31
    }
  ],
  "location": "NewAccountStepDefinations.user_enters_contact_person_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 83737300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8178814",
      "offset": 29
    }
  ],
  "location": "NewAccountStepDefinations.user_enters_phone_number_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 81521400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.wellsfargo.com/",
      "offset": 37
    }
  ],
  "location": "NewAccountStepDefinations.user_enters_Internet_Banking_URL_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 147864400,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountStepDefinations.user_clicks_on_submit()"
});
formatter.result({
  "duration": 5599428200,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountStepDefinations.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 5396300,
  "status": "passed"
});
formatter.after({
  "duration": 19846539300,
  "status": "passed"
});
formatter.before({
  "duration": 1306428900,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AddAccountFeature"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on signin Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on bank and cash",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on New Account",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters Account Title in accounts page as \"checking\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters accounts description as \"This is created by AHMED ALI\" in accounts page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters account inital balance as \"200\" in accounts page",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters account number as \"323\" in accounts page",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters contact person as \"Ahmed Ali\" in accounts page",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters phone number as \"8178814\" in accounts page",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters Internet Banking URL as \"https://www.BOFA.com/\" in accounts page",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on submit",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "NewAccountStepDefinations.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 1030318800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "NewAccountStepDefinations.user_enters_the_username(String)"
});
formatter.result({
  "duration": 139347800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "NewAccountStepDefinations.user_enters_the_password(String)"
});
formatter.result({
  "duration": 88357000,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountStepDefinations.user_clicks_on_signin_Button()"
});
formatter.result({
  "duration": 2729424100,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountStepDefinations.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 7148900,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountStepDefinations.user_clicks_on_bank_and_cash()"
});
formatter.result({
  "duration": 49357200,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountStepDefinations.user_clicks_on_New_Account()"
});
formatter.result({
  "duration": 308802100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "checking",
      "offset": 47
    }
  ],
  "location": "NewAccountStepDefinations.user_enters_Account_Title_in_accounts_page_as(String)"
});
formatter.result({
  "duration": 101585100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is created by AHMED ALI",
      "offset": 37
    }
  ],
  "location": "NewAccountStepDefinations.user_enters_accounts_description_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 123479800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 39
    }
  ],
  "location": "NewAccountStepDefinations.user_enters_account_inital_balance_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 82327600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "323",
      "offset": 31
    }
  ],
  "location": "NewAccountStepDefinations.user_enters_account_number_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 75680700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ahmed Ali",
      "offset": 31
    }
  ],
  "location": "NewAccountStepDefinations.user_enters_contact_person_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 93469600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8178814",
      "offset": 29
    }
  ],
  "location": "NewAccountStepDefinations.user_enters_phone_number_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 80958600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.BOFA.com/",
      "offset": 37
    }
  ],
  "location": "NewAccountStepDefinations.user_enters_Internet_Banking_URL_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 163824600,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountStepDefinations.user_clicks_on_submit()"
});
formatter.result({
  "duration": 5774254000,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountStepDefinations.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 7506000,
  "status": "passed"
});
formatter.after({
  "duration": 19854511800,
  "status": "passed"
});
});