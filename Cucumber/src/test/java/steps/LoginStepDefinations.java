package steps;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pages.LoginPage;
import pages.TestBase;

public class LoginStepDefinations extends TestBase {
	LoginPage loginPage;
	
	@Before
	public void setUp() {
		initDriver();
		loginPage = PageFactory.initElements(driver, LoginPage.class);
	}

	@Given("^User is on the techfios login page$")
	public void user_is_on_the_techfios_login_page() {
		
		driver.get("https://www.techfios.com/billing/?ng=admin/");

	}

	@When("^User enters username as \"([^\"]*)\"$")
	public void user_enters_username_as(String username) {
		
		loginPage.enterUserName(username);

	}

	@When("^User enters password as \"([^\"]*)\"$")
	public void user_enters_password_as(String password) {

		loginPage.enterPassword(password);
	}

	@When("^User clicks on signin button$")
	public void user_clicks_on_signin_button() {

		loginPage.clickSignInButton();
	}

	@Then("^User should land on Dashboard page$")
	public void user_should_land_on_Dashboard_page() {
		String expectedTitle = "Dashboard- iBilling";
		String actuleTitle = loginPage.getPageTitle();
		Assert.assertEquals(expectedTitle, actuleTitle);

	}
	
	@Then("^User should not land on Dashboard page$")
	public void user_should_not_land_on_Dashboard_page() {
		String expectedTitle = "Login - iBilling";
		String actuleTitle = loginPage.getPageTitle();
		Assert.assertEquals(expectedTitle, actuleTitle);

	}
	
	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}

}
