Feature: Login CRM Application
Scenario Outline:Loging CRM Page

Given open browser and enter url
When enter "<username>" and "<password>"
Then click the login button
And open the homepage and veryfy homepage
Then moveOver to contects
Then click new newContects
And enter to "<fistname>" and "<medlename>" and "<lastname>"
Then close browser

Examples:
|username|password|fistname|medlename|lastname|
|ramanja_va|ramu@1234|Ramu|Anji|V|
|ramu_12|Ramu123|RR|RR|RR|
