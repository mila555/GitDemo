package stepDefinitions;

import Cucumber.Automation.Base;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends Base {  
	

	@Before("@MobileTest")
	public void beforevalidation()
	{
		System.out.println("mobile before hook");

}

	
	@After("@MobileTest")
	public void aftervalidation()
	{
		System.out.println("After mobile  hook");

}
	
	

	@After("@SeleniumTest")
	public void AfterSeleniumTest()
	{
		driver.close();

}
	
	
	
	@Before("@WebTest")
	public void beforewebvalidation()
	{
		System.out.println("web before hook");

}

	
	@After("@WebTest")
	public void afterwebvalidation()
	{
		System.out.println("After web  hook");

}

	
	}
