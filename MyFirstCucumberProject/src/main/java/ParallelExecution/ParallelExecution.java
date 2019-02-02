package ParallelExecution;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;


public class ParallelExecution {
	static WebDriver driver;
	@BeforeTest
	@Parameters("browser")
	public void parallelExectionMethod(String browserName){
		if(browserName.equals("chrome")){
		System.setProperty("webdriver.chrome.driver", "E:\\Browsers\\ChromeFiles\\chromedriver.exe");
		driver=new ChromeDriver();
	}
		else if(browserName.equals("firefox")){
			System.setProperty("webdriver.gecko.driver", "E:\\Browsers\\Geckodriver\\geckodriver.exe");
			driver=new FirefoxDriver();
		}
	}
	@Test
	public void againChromeOpen(){
		System.out.println("Second time chrome execution");
		System.setProperty("webdriver.chrome.driver", "E:\\Browsers\\ChromeFiles\\chromedriver.exe");
		driver=new ChromeDriver();
	}
	@Test
	public void againFirefoxOpen(){
		System.setProperty("webdriver.gecko.driver", "E:\\Browsers\\Geckodriver\\geckodriver.exe");
		driver=new FirefoxDriver();
	}
	@AfterTest
	public void tearDown(){
		System.out.println("Driver closing");
		driver.close();
	}

}
