$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/CatProject/MyFirstCucumberProject/src/main/java/login.feature");
formatter.feature({
  "line": 1,
  "name": "Loging Amazon account",
  "description": "",
  "id": "loging-amazon-account",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Scenario: Amazon login"
    },
    {
      "line": 5,
      "value": "#//Given, When, Then, As, But, *,"
    },
    {
      "line": 7,
      "value": "#Given open the browser"
    },
    {
      "line": 8,
      "value": "#When enter the url"
    },
    {
      "line": 9,
      "value": "#Then enter the \"9052033439\" and \"Araavras@123\""
    },
    {
      "line": 10,
      "value": "#Then user clicking in login button"
    },
    {
      "line": 11,
      "value": "#And entering the inbox page"
    }
  ],
  "line": 14,
  "name": "Amazon login",
  "description": "",
  "id": "loging-amazon-account;amazon-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "enter the url",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "enter the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user clicking in login button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "entering the inbox page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "loging-amazon-account;amazon-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 26,
      "id": "loging-amazon-account;amazon-login;;1"
    },
    {
      "cells": [
        "9052033439",
        "Araavras@123"
      ],
      "line": 27,
      "id": "loging-amazon-account;amazon-login;;2"
    },
    {
      "cells": [
        "9052033438",
        "Araavras@1234"
      ],
      "line": 28,
      "id": "loging-amazon-account;amazon-login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 27,
  "name": "Amazon login",
  "description": "",
  "id": "loging-amazon-account;amazon-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "enter the url",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "enter the \"9052033439\" and \"Araavras@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user clicking in login button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "entering the inbox page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoingStepDefination.login()"
});
formatter.result({
  "duration": 7095603075,
  "status": "passed"
});
formatter.match({
  "location": "LoingStepDefination.enterURL()"
});
formatter.result({
  "duration": 38972577691,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9052033439",
      "offset": 11
    },
    {
      "val": "Araavras@123",
      "offset": 28
    }
  ],
  "location": "LoingStepDefination.user_pwd(String,String)"
});
formatter.result({
  "duration": 514851073,
  "status": "passed"
});
formatter.match({
  "location": "LoingStepDefination.loginButton()"
});
formatter.result({
  "duration": 46156043189,
  "status": "passed"
});
formatter.match({
  "location": "LoingStepDefination.inboxPage()"
});
formatter.result({
  "duration": 63447340,
  "status": "passed"
});
formatter.match({
  "location": "LoingStepDefination.closeBrowser()"
});
formatter.result({
  "duration": 1294735966,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Amazon login",
  "description": "",
  "id": "loging-amazon-account;amazon-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "enter the url",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "enter the \"9052033438\" and \"Araavras@1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user clicking in login button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "entering the inbox page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoingStepDefination.login()"
});
formatter.result({
  "duration": 5088059305,
  "status": "passed"
});
formatter.match({
  "location": "LoingStepDefination.enterURL()"
});
formatter.result({
  "duration": 28051431285,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9052033438",
      "offset": 11
    },
    {
      "val": "Araavras@1234",
      "offset": 28
    }
  ],
  "location": "LoingStepDefination.user_pwd(String,String)"
});
formatter.result({
  "duration": 516815280,
  "status": "passed"
});
formatter.match({
  "location": "LoingStepDefination.loginButton()"
});
formatter.result({
  "duration": 2220135670,
  "status": "passed"
});
formatter.match({
  "location": "LoingStepDefination.inboxPage()"
});
formatter.result({
  "duration": 19113624,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Your Account]\u003e but was:\u003c[Amazon Sign In]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat stepDefinitions.LoingStepDefination.inboxPage(LoingStepDefination.java:43)\r\n\tat ✽.And entering the inbox page(E:/CatProject/MyFirstCucumberProject/src/main/java/login.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoingStepDefination.closeBrowser()"
});
formatter.result({
  "status": "skipped"
});
});