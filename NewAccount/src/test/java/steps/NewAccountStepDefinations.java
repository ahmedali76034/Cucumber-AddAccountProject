package steps;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pages.TestBase;
import pages.TfDashboard;
import pages.TfLoginPage;
import pages.TfNewAccountPage;

public class NewAccountStepDefinations extends TestBase {

	TfLoginPage tfLoginPage;
	TfDashboard tfDashboard;
	TfNewAccountPage tfNewAccountPage;

	@Before
	public void setUp() {
		initWebDriver();
		tfLoginPage = PageFactory.initElements(driver, TfLoginPage.class);
		tfDashboard = PageFactory.initElements(driver, TfDashboard.class);
		tfNewAccountPage = PageFactory.initElements(driver, TfNewAccountPage.class);

	}

	@Given("^User is on the techfios login page$")
	public void user_is_on_the_techfios_login_page() {

		driver.get("https://www.techfios.com/billing/?ng=admin/");
	}

	@When("^User enters username as \"([^\"]*)\"$")
	public void user_enters_the_username(String userName) {
		tfLoginPage.enterUserName(userName);

	}

	@When("^User enters password as \"([^\"]*)\"$")
	public void user_enters_the_password(String Password) {
		tfLoginPage.enterPassword(Password);
	}

	@When("^User clicks on signin Button$")
	public void user_clicks_on_signin_Button() {
		tfLoginPage.clickSignInButton();

	}

	@Then("^User should land on Dashboard page$")
	public void user_should_land_on_Dashboard_page() {
		String expectedTitle = "Dashboard- iBilling";
		String actualTitle = tfLoginPage.getPageTitle();
		Assert.assertEquals(expectedTitle, actualTitle);

	}

	@And("^User clicks on bank and cash$")
	public void user_clicks_on_bank_and_cash() {
		tfDashboard.clickBankandCash();
	}

	@And("^User clicks on New Account$")
	public void user_clicks_on_New_Account() {
		tfDashboard.clickNewAccount();
	}

	@And("^User enters Account Title in accounts page as \"([^\"]*)\"$")
	public void user_enters_Account_Title_in_accounts_page_as(String AccountTitle)  {
		tfNewAccountPage.enterAccountTitle(AccountTitle);
	}
	
	@And("^User enters accounts description as \"([^\"]*)\" in accounts page$")
	public void user_enters_accounts_description_as_in_accounts_page(String description)  {
		tfNewAccountPage.enterDescription(description);
	}

	@And("^User enters account inital balance as \"([^\"]*)\" in accounts page$")
	public void user_enters_account_inital_balance_as_in_accounts_page(String initalBalance) {
		tfNewAccountPage.enterInitalBalance(initalBalance);
	}

	@And("^User enters account number as \"([^\"]*)\" in accounts page$")
	public void user_enters_account_number_as_in_accounts_page(String accountNumber) {
		tfNewAccountPage.enterAccountNumber(accountNumber);
	}

	@And("^User enters contact person as \"([^\"]*)\" in accounts page$")
	public void user_enters_contact_person_as_in_accounts_page(String contactPerson) {
		tfNewAccountPage.enterContactPerson(contactPerson);
	}

	@And("^User enters phone number as \"([^\"]*)\" in accounts page$")
	public void user_enters_phone_number_as_in_accounts_page(String phoneNumber)  {
		tfNewAccountPage.enterContactPhone(phoneNumber);
	}

	@And("^User enters Internet Banking URL as \"([^\"]*)\" in accounts page$")
	public void user_enters_Internet_Banking_URL_as_in_accounts_page(String url){
		tfNewAccountPage.enterURL(url);
	}

	@And("^User clicks on submit$")
	public void user_clicks_on_submit() {
		tfNewAccountPage.clickSubmitButton();
	}

	@Then("^User should be able to validate account created successfully$")
	public void user_should_be_able_to_validate_account_created_successfully()  {
		String actualAccountPageTitle = tfNewAccountPage.getPageTitle();
		String expectedAccountPageTitle = "Accounts- iBilling";
		Assert.assertEquals(expectedAccountPageTitle, actualAccountPageTitle);
		
	}
	
	@After
	public void tearDown() {
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		driver.close();
		driver.quit();
	}
	
	

}
