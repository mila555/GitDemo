package stepDefinitions;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.And;
import cucumber.api.junit.Cucumber;
import pageObjects.CheckOutPage;
import pageObjects.HomePage;

import java.util.List;

import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

import Cucumber.Automation.Base;

@RunWith(Cucumber.class)
public class stepDefinition extends Base {
    HomePage h;
	//CheckOutPage cp;
	public WebDriver driver;

	@Given("^User is on NetBanking landing page$")
	public void user_is_on_netbanking_landing_page() throws Throwable {
		// write a code to navigate to login url
		System.out.println("navigated to login url");
	}

	@Then("^\"([^\"]*)\" result is displayed$")
	public void result_is_displayed(String arg1) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		/*
		 * CheckOutPage cp = new CheckOutPage(driver); String ProductName =
		 * cp.getProductName(); System.out.println("the product name is" + ProductName);
		 * Assert.assertTrue(ProductName.contains(arg1));
		 */
		HomePage h = new HomePage(driver);
		String ProductName = h.getProductName();
		System.out.println("the product name is"+ProductName);
		Assert.assertTrue(ProductName.contains(arg1));

	}
	
	/*
	 * public void results_are_displayed(String arg1) throws Throwable { // Write
	 * code here that turns the phrase above into concrete actions HomePage h = new
	 * HomePage(driver); String ProductName = h.getProductName();
	 * System.out.println("the product name is"+ProductName);
	 * Assert.assertTrue(ProductName.contains(arg1)); }
	 */

	
	@Then("^verify selected  \"([^\"]*)\" items are  displayed in  check out page$")
	public void verify_selected_something_items_are_displayed_in_check_out_page(String strArg1) throws Throwable {

	}

	@Given("^Validate the browser$")
	public void validate_the_browser() throws Throwable {
		System.out.println("deciding the browser to open");
		// Assert.assertTrue(cp.getProductName().getText().contains(""));
	}

	@When("^Browser is triggered$")
	public void browser_is_triggered() throws Throwable {
		System.out.println("browser is triggered");
	}

	@Then("^check if browser is displayed$")
	public void check_if_browser_is_displayed() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		System.out.println("browser is displayed");
	}

	@Then("^Check if browser is started$")
	public void check_if_browser_is_started() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		System.out.println("browser is strated");
	}

	@When("^User login into application with username and password$")
	public void user_login_into_application_with_username_and_password() throws Throwable {
		// code to login
		System.out.println("logged in successfully");
	}

	@Then("^home page is populated$")
	public void home_page_is_populated() throws Throwable {
		System.out.println("validated home page");
		// home page validation
	}

	@When("^User login into application with \"([^\"]*)\" and password \"([^\"]*)\"$")
	public void user_login_into_application_with_something_and_password_something(String strArg1, String strArg2)
			throws Throwable {
		System.out.println(strArg1);
		System.out.println(strArg2);
	}

	@Then("^cards displayed are \"([^\"]*)\"$")
	public void cards_displayed_are(String arg1) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		System.out.println(arg1);
	}

	@When("^User sign up with following details$")
	public void user_sign_up_with_following_details(DataTable data) throws Throwable {
		List<List<String>> obj = data.raw();
		System.out.println(obj.get(0).get(0));
		System.out.println(obj.get(0).get(1));
		System.out.println(obj.get(0).get(2));
		System.out.println(obj.get(0).get(3));
		System.out.println(obj.get(0).get(4));
	}

	@When("^User log in into application with (.+) and password (.+)$")
	public void user_login_into_application_with_and_password(String username, String password) throws Throwable {
		System.out.println(username);
		System.out.println(password);
	}
}
