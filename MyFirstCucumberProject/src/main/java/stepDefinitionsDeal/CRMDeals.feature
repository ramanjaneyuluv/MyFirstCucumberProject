Feature: Dealing step Definition
Scenario: Dealing Page

Given open browser and enter url
When enter username and password
|ramanja_va|ramu@1234|
Then click the login button
And open the homepage and veryfy homepage
Then switch to frame and mouse over deal
And enter title and comapny and amout and comission
|Promo|XYZ|500|50%|
Then cloase browser

