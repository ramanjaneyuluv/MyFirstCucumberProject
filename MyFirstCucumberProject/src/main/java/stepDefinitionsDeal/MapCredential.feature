Feature: Login CRM Application


Scenario: Saving Deals columns

Given Lauuch browser and login URL
Then user username and password
|username|password|
|ramanja_va|ramu@1234|
Then click loginButton
And mouse over to deal and click new deals
Then Enter the credentials and save
|title|company|primary contact|amount|
|Raju|xyz|85885|500|
|Ramu|xyzA|858856|5000|
|Reshu|PWO|8588558|6000|
Then close the browser
