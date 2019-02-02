package AStepDefination;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginWebSit {
	@Before
	public void beforScenario(){
		System.out.println("Before each scenario");
	}
	@Before("@First")
	public void beforeFirst(){
		System.out.println("This will run befor first scenario");
	}
		@After("@First")
		public void afterFirst(){
			System.out.println("This will run After first scenario");
	}
	@After
	public void afterScenario(){
		System.out.println("After each scenario");
	}
	@Before("@Second")
	public void beforSecondScenario(){
		System.out.println("Before second scenario");
	}
	@After("@Second")
	public void afterSecondScenario(){
		System.out.println("After second scenario");
	}

	@Given("^enter url$")
	public void enter_url() throws Throwable {
		System.out.println("Enter url1444");
	 
	}

	@When("^enter user name$")
	public void enter_user_name() throws Throwable {
	    System.out.println("enter user name");
	}

	@Then("^enter password$")
	public void enter_password() throws Throwable {
	  System.out.println("Enter password");
	}

	@Then("^login successfull$")
	public void login_successfull() throws Throwable {
		System.out.println("login success");
	  
	}

@Given("^enter url(\\d+)$")
public void enter_url(int arg1) throws Throwable {
	System.out.println("................");
    System.out.println("Enter second url");
}

@When("^enter user name and Password$")
public void enter_user_name_and_Password() throws Throwable {
	System.out.println("Enter second username and password");
}

@Then("^login successfull(\\d+)$")
public void login_successfull(int arg1) throws Throwable {
	System.out.println("Second login success");
}
}
