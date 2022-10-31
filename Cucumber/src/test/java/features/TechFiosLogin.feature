#these tag will take presidence over the @scenario 
@LoginFeature @Regression
Feature: TechFios billing login funtionality validation

@Scenario1
Scenario: User should be aboe to login with valid credentials
Given User is on the techfios login page 
When User enters password as "abc123"
When User enters username as "demo@techfios.com"
And User clicks on signin button
Then User should land on Dashboard page

@Scenario2 @Smoke
Scenario: User should be aboe to login with INvalid credentials
Given User is on the techfios login page 
When User enters password as "abc123"
When User enters username as "demo2@techfios.com"
And User clicks on signin button
#Then User should land on Dashboard page

@Scenario3
Scenario: User should be aboe to login with valid credentials
Given User is on the techfios login page 
When User enters password as "abc124"
When User enters username as "demo@techfios.com"
And User clicks on signin button
Then User should land on Dashboard page