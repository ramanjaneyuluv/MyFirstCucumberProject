@FunctionalTest
Feature: ECommerce Application

@RegressionTest
Scenario: Successful Login
Given This is a success test

@RegressionTest
Scenario: UnSuccessful Login
Given This is a unsuccess test

@SmokeTest 
Scenario: Add a product to bag
Given This is a product test

Scenario: Add multiple product to bag
Given This is a implement product test

 @RegressionTest
Scenario: Remove a product from bag
Given This is a remove a product from bag test

@RegressionTest
Scenario: Remove all products from bag
Given This is a remove all product bag test

@SmokeTest
Scenario: Increase product quantity from bag page
Given This is a increase product test

Scenario: Decrease product quantity from bag page
Given This is a decrease product test

@End2End
Scenario: Buy a product with cash payment
Given This is a buy product with case test

 @End2End
Scenario: Buy a product with CC payment
Given This is a buy product with CC test

@End2End
Scenario Outline: Payment declined
Given This is a Payment declined test
Examples:
|PaymentMethod|
|CC Card|
|DD Card|
|Bank Transfer|
|PayPal|
|Cash|