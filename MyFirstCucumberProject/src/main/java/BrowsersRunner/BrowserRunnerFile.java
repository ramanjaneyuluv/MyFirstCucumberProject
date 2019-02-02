package BrowsersRunner;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
	
	features={"E:\\CatProject\\MyFirstCucumberProject\\src\\main\\java\\BrowsersRunner\\ChromeFeaturFile.feature","E:\\CatProject\\MyFirstCucumberProject\\src\\main\\java\\BrowsersRunner\\FireFoxFeatureFile.feature"},
	glue={"BrowsersRunner"},
	//tags={"@Chrome","@Firefox"},
	monochrome=true,
	plugin={"pretty"},
	dryRun=false
		
		)

public class BrowserRunnerFile {

}
