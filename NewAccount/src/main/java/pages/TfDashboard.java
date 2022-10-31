package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class TfDashboard {

	WebDriver driver;

	public TfDashboard(WebDriver driver) {

		this.driver = driver;
	}

	// Dashboard Elements
	@FindBy(how = How.XPATH, using = "//*[@id=\"side-menu\"]/li[10]/a/span[1]")
	WebElement bankAndCash;

	@FindBy(how = How.XPATH, using = "//*[@id=\"side-menu\"]/li[10]/ul/li[1]/a")
	WebElement newAccount;

	// Elements Action
	public void clickNewAccount () {
		newAccount.click();
	}
	
	public void clickBankandCash() {
		bankAndCash.click();
	}
	
}
