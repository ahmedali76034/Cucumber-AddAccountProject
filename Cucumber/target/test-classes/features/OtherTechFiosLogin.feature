#these tag will take presidence over the @scenario 
@OtherLoginFeature @Regression
Feature: TechFios billing OTHER login funtionality validation

@OtherScenario1 @Smoke
Scenario: User should be aboe to OTHER login with valid credentials
Given User is on the techfios login page 
When User enters password as "abc123"
When User enters username as "demo@techfios.com"
And User clicks on signin button
Then User should land on Dashboard page


@OtherScenario2
Scenario: User should be aboe to OTHER login with valid credentials
Given User is on the techfios login page 
When User enters password as "abc123"
When User enters username as "demo2@techfios.com"
And User clicks on signin button
Then User should land on Dashboard page

@OtherScenario3
Scenario: User should be aboe to OTHER login with valid credentials
Given User is on the techfios login page 
When User enters password as "abc124"
When User enters username as "demo@techfios.com"
And User clicks on signin button
Then User should land on Dashboard page