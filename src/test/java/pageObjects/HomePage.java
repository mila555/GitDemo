package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class HomePage {
	public WebDriver driver;

	public HomePage(WebDriver driver) {
		this.driver = driver;
	}

	By locator = By.xpath("//input[@type='search']");

	By NameLocator = By.xpath("//p[@class='product-name']");

	public void homepageentry(String strArg1) throws InterruptedException {
		// TODO Auto-generated method stub

		// TODO Auto-generated method stub
		waitForVisibilityOf(locator, 8);
		find(locator).sendKeys(strArg1);
		Thread.sleep(5000);
	}

	protected WebElement find(By locator) {
		return driver.findElement(locator);
	}

	private void waitFor(ExpectedCondition<WebElement> condition, Integer timeOutInSeconds) {
		timeOutInSeconds = timeOutInSeconds != null ? timeOutInSeconds : 30;
		WebDriverWait wait = new WebDriverWait(driver, timeOutInSeconds);
		wait.until(condition);
	}

	/**
	 * Wait for given number of seconds for element with given locator to be visible
	 * on the page
	 */
	protected void waitForVisibilityOf(By locator, Integer... timeOutInSeconds) {
		int attempts = 0;
		while (attempts < 2) {
			try {
				waitFor(ExpectedConditions.visibilityOfElementLocated(locator),
						(timeOutInSeconds.length > 0 ? timeOutInSeconds[0] : null));
				break;
			} catch (StaleElementReferenceException e) {
			}
			attempts++;
		}

	}

	public String getProductName() {
		// TODO Auto-generated method stub

		String NL;
		NL = find(NameLocator).getText();
		return NL;

	}

}