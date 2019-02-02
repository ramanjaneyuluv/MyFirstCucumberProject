package BrowsersRunner;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class ChromeStepDef {
	WebDriver driver;
	@Given("^enter  url$")
	public void enter_url() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "E:\\Browsers\\ChromeFiles\\chromedriver_win32\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("http://www.facebook.com");
		System.out.println("opening chrome browser");
		System.out.println("Entering facebook login url");
	   
	}

	@Then("^show login page$")
	public void show_login_page() throws Throwable {
		System.out.println("Showing facebook login home page");
		driver.quit();
		System.out.println("........Closing chrome browser...........");
	 
	}

}
