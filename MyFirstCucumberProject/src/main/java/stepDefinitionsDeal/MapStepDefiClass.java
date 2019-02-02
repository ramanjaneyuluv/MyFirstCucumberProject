package stepDefinitionsDeal;

import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class MapStepDefiClass {
	WebDriver driver;
	
	@Given("^Lauuch browser and login URL$")
	public void lauuch_browser_and_login_URL() {
		System.setProperty("webdriver.chrome.driver", "E:\\Browsers\\ChromeFiles\\chromedriver_win32\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("https://www.freecrm.com/index.html");
	}
	@Then("^user username and password$")
	public void Enter_UserAndPWD(DataTable dealData){
		for (Map<String, String> data : dealData.asMaps(String.class, String.class)){
			driver.findElement(By.name("username")).sendKeys(data.get("username"));
			driver.findElement(By.name("password")).sendKeys(data.get("password"));
		}
	}
	@Then("^click loginButton$")
	public void click_LoginButton(){
		WebElement  loginBtn=driver.findElement(By.xpath("//input[contains(@type,'submit')]"));
		JavascriptExecutor js=(JavascriptExecutor)driver;
		js.executeScript("arguments[0].click();", loginBtn);
	}

	@And("^mouse over to deal and click new deals$")
	public void mouse_over_to_deal_and_click_new_deals()  {
		driver.switchTo().frame("mainpanel");
		WebElement ele=driver.findElement(By.xpath("//a[contains(@title,'Deals')]"));
		Actions action=new Actions(driver);
		action.moveToElement(ele).build().perform();
		driver.findElement(By.xpath("//a[contains(@title,'New Deal')]")).click();
	}
	@Then("^Enter the credentials and save$")
	public void enter_credentials(DataTable credential){
		for(Map<String, String> data:credential.asMaps(String.class, String.class)){
			driver.findElement(By.id("title")).sendKeys(data.get("title"));
			driver.findElement(By.name("client_lookup")).sendKeys(data.get("company"));
			driver.findElement(By.name("contact_lookup")).sendKeys(data.get("primary contact"));
			driver.findElement(By.name("amount")).sendKeys(data.get("amount"));
			
			driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
			WebElement ele=driver.findElement(By.xpath("//a[contains(@title,'Deals')]"));
			Actions action=new Actions(driver);
			action.moveToElement(ele).build().perform();
			driver.findElement(By.xpath("//a[contains(@title,'New Deal')]")).click();
		}
	}

	@Then("^close the browser$")
	public void close_the_browser() {
		driver.quit();
	   
	}

}
