$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/CatProject/MyFirstCucumberProject/src/main/java/stepDefinitionsDeal/MapCredential.feature");
formatter.feature({
  "line": 1,
  "name": "Login CRM Application",
  "description": "",
  "id": "login-crm-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Saving Deals columns",
  "description": "",
  "id": "login-crm-application;saving-deals-columns",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Lauuch browser and login URL",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "ramanja_va",
        "ramu@1234"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click loginButton",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "mouse over to deal and click new deals",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter the credentials and save",
  "rows": [
    {
      "cells": [
        "title",
        "company",
        "primary contact",
        "amount"
      ],
      "line": 13
    },
    {
      "cells": [
        "Raju",
        "xyz",
        "85885",
        "500"
      ],
      "line": 14
    },
    {
      "cells": [
        "Ramu",
        "xyzA",
        "858856",
        "5000"
      ],
      "line": 15
    },
    {
      "cells": [
        "Reshu",
        "PWO",
        "8588558",
        "6000"
      ],
      "line": 16
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MapStepDefiClass.lauuch_browser_and_login_URL()"
});
formatter.result({
  "duration": 44768617303,
  "status": "passed"
});
formatter.match({
  "location": "MapStepDefiClass.Enter_UserAndPWD(DataTable)"
});
formatter.result({
  "duration": 367115027,
  "status": "passed"
});
formatter.match({
  "location": "MapStepDefiClass.click_LoginButton()"
});
formatter.result({
  "duration": 10197672458,
  "status": "passed"
});
formatter.match({
  "location": "MapStepDefiClass.mouse_over_to_deal_and_click_new_deals()"
});
formatter.result({
  "duration": 2702128294,
  "status": "passed"
});
formatter.match({
  "location": "MapStepDefiClass.enter_credentials(DataTable)"
});
formatter.result({
  "duration": 15659390206,
  "status": "passed"
});
formatter.match({
  "location": "MapStepDefiClass.close_the_browser()"
});
formatter.result({
  "duration": 1618932985,
  "status": "passed"
});
});