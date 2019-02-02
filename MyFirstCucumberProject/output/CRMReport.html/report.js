$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/CatProject/MyFirstCucumberProject/src/main/java/stepDefinitions/CRMWebsit.feature");
formatter.feature({
  "line": 1,
  "name": "Login CRM Application",
  "description": "",
  "id": "login-crm-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Loging CRM Page",
  "description": "",
  "id": "login-crm-application;loging-crm-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "open browser and enter url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click the login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "open the homepage and veryfy homepage",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "moveOver to contects",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "click new newContects",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "enter to \"\u003cfistname\u003e\" and \"\u003cmedlename\u003e\" and \"\u003clastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "close browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "login-crm-application;loging-crm-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "fistname",
        "medlename",
        "lastname"
      ],
      "line": 14,
      "id": "login-crm-application;loging-crm-page;;1"
    },
    {
      "cells": [
        "ramanja_va",
        "ramu@1234",
        "Ramu",
        "Anji",
        "V"
      ],
      "line": 15,
      "id": "login-crm-application;loging-crm-page;;2"
    },
    {
      "cells": [
        "ramu_12",
        "Ramu123",
        "RR",
        "RR",
        "RR"
      ],
      "line": 16,
      "id": "login-crm-application;loging-crm-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Loging CRM Page",
  "description": "",
  "id": "login-crm-application;loging-crm-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "open browser and enter url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter \"ramanja_va\" and \"ramu@1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click the login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "open the homepage and veryfy homepage",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "moveOver to contects",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "click new newContects",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "enter to \"Ramu\" and \"Anji\" and \"V\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginCRMWebSite.openbrowser()"
});
formatter.result({
  "duration": 44223476863,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ramanja_va",
      "offset": 7
    },
    {
      "val": "ramu@1234",
      "offset": 24
    }
  ],
  "location": "LoginCRMWebSite.enter_User_Pwd(String,String)"
});
formatter.result({
  "duration": 270885221,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.44.609538 (b655c5a60b0b544917107a59d4153d4bf78e1b90),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027DESKTOP-E7HT92S\u0027, ip: \u0027192.168.0.14\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_60\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:62095}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.44.609538 (b655c5a60b0b544917107a59d4153d4bf78e1b90), userDataDir\u003dC:\\Users\\RAMANJ~1\\AppData\\Local\\Temp\\scoped_dir7844_30311}, takesHeapSnapshot\u003dtrue, unhandledPromptBehavior\u003dignore, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d71.0.3578.98, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: de67ecbf43d6a7830730f7331142a4ad\n*** Element info: {Using\u003dname, value\u003dpassword}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:494)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat stepDefinitions.LoginCRMWebSite.enter_User_Pwd(LoginCRMWebSite.java:29)\r\n\tat ✽.When enter \"ramanja_va\" and \"ramu@1234\"(E:/CatProject/MyFirstCucumberProject/src/main/java/stepDefinitions/CRMWebsit.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginCRMWebSite.login_click()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginCRMWebSite.verify_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginCRMWebSite.contact_MouseOver()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginCRMWebSite.click_newContect()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Ramu",
      "offset": 10
    },
    {
      "val": "Anji",
      "offset": 21
    },
    {
      "val": "V",
      "offset": 32
    }
  ],
  "location": "LoginCRMWebSite.enter_Names(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginCRMWebSite.tearDown()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "Loging CRM Page",
  "description": "",
  "id": "login-crm-application;loging-crm-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "open browser and enter url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter \"ramu_12\" and \"Ramu123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click the login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "open the homepage and veryfy homepage",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "moveOver to contects",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "click new newContects",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "enter to \"RR\" and \"RR\" and \"RR\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginCRMWebSite.openbrowser()"
});
formatter.result({
  "duration": 40136318049,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ramu_12",
      "offset": 7
    },
    {
      "val": "Ramu123",
      "offset": 21
    }
  ],
  "location": "LoginCRMWebSite.enter_User_Pwd(String,String)"
});
formatter.result({
  "duration": 445746722,
  "status": "passed"
});
formatter.match({
  "location": "LoginCRMWebSite.login_click()"
});
formatter.result({
  "duration": 944364680,
  "status": "passed"
});
formatter.match({
  "location": "LoginCRMWebSite.verify_homepage()"
});
formatter.result({
  "duration": 15674100,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.44.609538 (b655c5a60b0b544917107a59d4153d4bf78e1b90),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027DESKTOP-E7HT92S\u0027, ip: \u0027192.168.0.14\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_60\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:62156}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.44.609538 (b655c5a60b0b544917107a59d4153d4bf78e1b90), userDataDir\u003dC:\\Users\\RAMANJ~1\\AppData\\Local\\Temp\\scoped_dir3816_13202}, takesHeapSnapshot\u003dtrue, unhandledPromptBehavior\u003dignore, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d71.0.3578.98, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: efa43399d476ba01d69828c818e1e895\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:703)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:374)\r\n\tat stepDefinitions.LoginCRMWebSite.verify_homepage(LoginCRMWebSite.java:46)\r\n\tat ✽.And open the homepage and veryfy homepage(E:/CatProject/MyFirstCucumberProject/src/main/java/stepDefinitions/CRMWebsit.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginCRMWebSite.contact_MouseOver()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginCRMWebSite.click_newContect()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "RR",
      "offset": 10
    },
    {
      "val": "RR",
      "offset": 19
    },
    {
      "val": "RR",
      "offset": 28
    }
  ],
  "location": "LoginCRMWebSite.enter_Names(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginCRMWebSite.tearDown()"
});
formatter.result({
  "status": "skipped"
});
});