package stepDefinitions;

import junit.framework.Assert;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoingStepDefination {
	WebDriver driver;
	
	@Given("^open the browser$")
	public void login(){
		/*System.setProperty("webdriver.gecko.driver", "E:\\Browsers\\Geckodriver\\geckodriver-v0.23.0-win64\\geckodriver.exe");
		driver=new FirefoxDriver();*/
		System.setProperty("webdriver.chrome.driver", "E:\\Browsers\\ChromeFiles\\chromedriver_win32\\chromedriver.exe");
		driver=new ChromeDriver();
	}
	@When("^enter the url$")
	public void enterURL(){
		driver.get("https://www.amazon.com/ap/signin?openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fyour-account%3Fref_%3Dnav_ya_signin%26_encoding%3DUTF8&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&&openid.pape.max_auth_age=0");
	}
	@Then ("^enter the \"(.*)\" and \"(.*)\"$")
	public void user_pwd(String username, String password){
		driver.findElement(By.id("ap_email")).sendKeys(username);
		driver.findElement(By.id("ap_password")).sendKeys(password);
	}
	@Then("^user clicking in login button$")
	public void loginButton(){
		driver.findElement(By.id("signInSubmit")).click();
	}
	@Then("^entering the inbox page$")
	public void inboxPage(){
		
		String homepageTitle=driver.getTitle();
		System.out.println("Home Page title is:"+homepageTitle);
		Assert.assertEquals("Your Account", homepageTitle);
		
	}
	@And("^close the browser$")
	public void closeBrowser(){
		driver.quit();
	}

}
