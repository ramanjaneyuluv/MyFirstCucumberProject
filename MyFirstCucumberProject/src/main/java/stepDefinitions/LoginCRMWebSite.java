	package stepDefinitions;

import junit.framework.Assert;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginCRMWebSite {
	WebDriver driver;
	@Given("^open browser and enter url$")
	public void openbrowser(){
		System.setProperty("webdriver.chrome.driver", "E:\\Browsers\\ChromeFiles\\chromedriver_win32\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("https://www.freecrm.com/index.html");
	}
	@When("^enter \"(.*)\" and \"(.*)\"$")
	public void enter_User_Pwd(String username, String password){
		driver.findElement(By.name("username")).sendKeys(username);
		driver.findElement(By.name("password")).sendKeys(password);
	}
	
	@Then("^click the login button$")
	public void login_click(){
		
		 /*WebElement loginBtn = driver.findElement(By.xpath("//input[@type='submit']"));
			 JavascriptExecutor js = (JavascriptExecutor)driver;
				 js.executeScript("arguments[0].click();", loginBtn);*/
		WebElement  loginBtn=driver.findElement(By.xpath("//input[contains(@type,'submit')]"));
		JavascriptExecutor js=(JavascriptExecutor)driver;
		js.executeScript("arguments[0].click();", loginBtn);
		
	}
	
	@And("^open the homepage and veryfy homepage$")
	public void verify_homepage(){
		String homepageTitle=driver.getTitle();
		System.out.println("home page title:"+homepageTitle);
		Assert.assertEquals("CRMPRO", homepageTitle);
	}
	@Then("^moveOver to contects$")
	public void contact_MouseOver(){
		driver.switchTo().frame("mainpanel");
		Actions action=new Actions(driver);
		WebElement ele=driver.findElement(By.xpath("//a[contains(@title,'Contacts')]"));
		action.moveToElement(ele).build().perform();
	}
	
	@Then("^click new newContects$")
	public void click_newContect(){
		driver.findElement(By.xpath("//a[contains(@title,'New Contact')]")).click();
	}
	
	@And("^enter to \"(.*)\" and \"(.*)\" and \"(.*)\"$")
	public void enter_Names(String fName, String mName, String lName){
		driver.findElement(By.name("first_name")).sendKeys(fName);
		driver.findElement(By.id("middle_initial")).sendKeys(mName);
		driver.findElement(By.id("surname")).sendKeys(lName);
		
	}
	
	@Then("^close browser$")
	public void tearDown(){
		driver.quit();
	}
	
}
