package stepDefinitionsDeal;

import java.util.List;

import junit.framework.Assert;

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
import cucumber.api.java.en.When;

public class StepDifinDealingCRM {
	
	WebDriver driver;
	@Given("^open browser and enter url$")
	public void openbrowser(){
		System.setProperty("webdriver.chrome.driver", "E:\\Browsers\\ChromeFiles\\chromedriver_win32\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("https://www.freecrm.com/index.html");
	}
	@When("^enter username and password$")
	public void enter_User_Pwd(DataTable credential){
		List<List<String>> data=credential.raw();
		driver.findElement(By.name("username")).sendKeys(data.get(0).get(0));
		driver.findElement(By.name("password")).sendKeys(data.get(0).get(1));
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
	@Then("^switch to frame and mouse over deal$")
	public void mouse_over_toDeal(){
		/*driver.switchTo().frame("mainpanel");
		WebElement ele=driver.findElement(By.xpath("//a[contains(@title,'Deals')]"));
		Actions action=new Actions(driver);
		action.moveToElement(ele);
		*/
		driver.switchTo().frame("mainpanel");
		Actions action=new Actions(driver);
		WebElement ele=driver.findElement(By.xpath("//a[contains(@title,'Deals')]"));
		action.moveToElement(ele).build().perform();
		
		driver.findElement(By.xpath("//a[contains(@title,'New Deal')]")).click();
	}
	@And("^enter title and comapny and amout and comission$")
	public void dataEntering(DataTable credential){
		List<List<String>> data=credential.raw();
		driver.findElement(By.id("title")).sendKeys(data.get(0).get(0));
		driver.findElement(By.name("client_lookup")).sendKeys(data.get(0).get(1));
		driver.findElement(By.name("amount")).sendKeys(data.get(0).get(2));
		driver.findElement(By.name("commission")).sendKeys(data.get(0).get(3));
	}
	
	@Then("^cloase browser$")
	public void tearDown(){
		driver.quit();
	}

}
