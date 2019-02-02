package BrowsersRunner;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class FireFoxStepDef {
	WebDriver driver;
	@After
	public void afterMethod(){
		System.out.println(".......Afet every scenario.........");
	}

	@Given("^Enter gmail url$")
	public void enter_gmail_url() throws Throwable {
		System.setProperty("webdriver.gecko.driver", "E:\\Browsers\\Geckodriver\\geckodriver.exe");
		driver=new FirefoxDriver();
		System.out.println("open firefox browser and enter gmail login url");
		driver.get("http://www.gmail.com");
	  
	}

	@Then("^showing login home page$")
	public void showing_login_home_page() throws Throwable {
		System.out.println("showing gamil login home page");
		driver.quit();
		System.out.println("..................closing firefox browser............................");
	
	}


}
