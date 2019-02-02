package AStepDefination;

import cucumber.api.java.en.Given;

public class QATagesStepDef {
	@Given("^This is a success test$")
	public void this_is_a_success_test() throws Throwable {
		System.out.println("This is success test");
	}

	@Given("^This is a unsuccess test$")
	public void this_is_a_unsuccess_test() throws Throwable {
	    System.out.println("this is unsuccess test");
	}

	@Given("^This is a product test$")
	public void this_is_a_product_test() throws Throwable {
	    System.out.println("This is a product test");
	}

	@Given("^This is a implement product test$")
	public void this_is_a_implement_product_test() throws Throwable {
	   System.out.println("This is a implement product test");
	}

	@Given("^This is a remove a product from bag test$")
	public void this_is_a_remove_a_product_from_bag_test() throws Throwable {
		System.out.println("This is a remove a product from bag test");
	}

	@Given("^This is a remove all product bag test$")
	public void this_is_a_remove_all_product_bag_test() throws Throwable {
	   System.out.println("This is a remove all product bag test");
	}

	@Given("^This is a increase product test$")
	public void this_is_a_increase_product_test() throws Throwable {
	  System.out.println("This is a increase product test");
	}

	@Given("^This is a decrease product test$")
	public void this_is_a_decrease_product_test() throws Throwable {
	System.out.println("This is a decrease product test");
	}

	@Given("^This is a buy product with case test$")
	public void this_is_a_buy_product_with_case_test() throws Throwable {
	   System.out.println("This is a buy product with case test");
	}

	@Given("^This is a buy product with CC test$")
	public void this_is_a_buy_product_with_CC_test() throws Throwable {
	   System.out.println("This is a buy product with CC test");
	}

	@Given("^This is a Payment declined test$")
	public void this_is_a_Payment_declined_test() throws Throwable {
	   System.out.println("This is a Payment declined test");
	}
}
