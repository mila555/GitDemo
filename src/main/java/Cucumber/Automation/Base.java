package Cucumber.Automation;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Base {

	public static WebDriver driver;

	public static Properties prop;
	// once u declare as static you dont need to create an object of the class, base

	public static WebDriver getDriver() throws IOException {
		Properties prop = new Properties();
		FileInputStream fis = new FileInputStream(
				"C:\\Users\\Sharmila\\eclipse-workspace\\Automation\\src\\test\\java\\Cucumber\\Automation\\global.properties");
		prop.load(fis);
		System.setProperty("webdriver.chrome.driver", "c:\\Users\\sharmila\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get(prop.getProperty("url"));
		return driver;
	}
}