Feature: Loging Amazon account

#Scenario: Amazon login

#//Given, When, Then, As, But, *,

#Given open the browser
#When enter the url
#Then enter the "9052033439" and "Araavras@123"
#Then user clicking in login button
#And entering the inbox page


Scenario Outline: Amazon login

Given open the browser
When enter the url
Then enter the "<username>" and "<password>"
Then user clicking in login button
And entering the inbox page
And close the browser


Examples:

  |username|password|
  |9052033439|Araavras@123|
  |9052033438|Araavras@1234|
  
  
  

