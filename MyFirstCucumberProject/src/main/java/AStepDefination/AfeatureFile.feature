Feature: Login to website
@First
Scenario: Login credentials
    Given enter url
    When enter user name
    Then enter password
    Then login successfull
  @Second
Scenario: Second scenario
    Given enter url2
    When enter user name and Password
    Then login successfull2