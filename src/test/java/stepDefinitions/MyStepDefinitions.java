package stepDefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.junit.Cucumber;
import pageObjects.CheckOutPage;
import pageObjects.HomePage;

import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import Cucumber.Automation.Base;

@RunWith(Cucumber.class)
public class MyStepDefinitions extends Base{
	private static final String String = null;
	public WebDriver driver;
	HomePage h;
	//CheckOutPage cp;

//	h=new HomePage((org.openqa.selenium.WebDriver) driver);

	@Given("^User is on Greencart landing page$")
	public void user_is_on_greencart_landing_page() throws Throwable {
		driver = Base.getDriver();
		Thread.sleep(3000);
	}

	

	@And("^Added items to cart$")
	public void added_items_to_cart() throws Throwable {
		((org.openqa.selenium.WebDriver) driver).findElement(By.cssSelector("a.increment")).click();
		((org.openqa.selenium.WebDriver) driver).findElement(By.xpath("//button[contains(text(),'ADD TO CART')]"))
				.click();
		System.out.println("display ADD TO CART");
		Thread.sleep(5000);
	}

	@And("^User proceeded to checkout page for purchase$")
	public void user_proceeded_to_checkout_page_for_purchase() throws Throwable {
		((org.openqa.selenium.WebDriver) driver)
				.findElement(By.xpath("//a[@class='cart-icon']//img[contains(@class,'')]")).click();
		((org.openqa.selenium.WebDriver) driver)
				.findElement(By.xpath("//button[contains(text(),'PROCEED TO CHECKOUT')]")).click();
		Thread.sleep(5000);
	}


    @When("^User searched for (.+) vegetable$")
    public void user_searched_for_vegetable(String strArg1 ) throws Throwable {

    	
    	HomePage h = new HomePage(driver);
		h.homepageentry(strArg1);
		Thread.sleep(5000);
    	
    }

    
    
  

        @Then("^verify selected (.+) items are  displayed in Check out page$")
        public void verify_selected_items_are_displayed_in_check_out_page(String name) throws Throwable {
        	
        	HomePage h = new HomePage(driver);
    		String ProductName = h.getProductName();
    		System.out.println("the product name is"+ProductName);
    		Assert.assertTrue(ProductName.contains(name));
        	
            
        }
    
	
	@Then("^\"([^\"]*)\" results are  displayed$")
	public void results_are_displayed(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions	  
		HomePage h = new HomePage(driver);
		String ProductName = h.getProductName();
		System.out.println("the product name is"+ProductName);
		Assert.assertTrue(ProductName.contains(arg1));		
	}	
}
