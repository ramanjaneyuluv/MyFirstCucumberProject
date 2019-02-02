package MyRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
	//	features={"E:\\CatProject\\MyFirstCucumberProject\\src\\main\\java\\AStepDefination\\AfeatureFile.feature"},
	
	features={"E:\\CatProject\\MyFirstCucumberProject\\src\\main\\java\\AStepDefination\\QATages.feature","E:\\CatProject\\MyFirstCucumberProject\\src\\main\\java\\stepDefinitions\\login.feature"},	
		glue={"E:\\CatProject\\MyFirstCucumberProject\\src\\main\\java\\AStepDefination\\QATagesStepDef.java","E:\\CatProject\\MyFirstCucumberProject\\src\\main\\java\\stepDefinitions\\LoingStepDefination.java"},
		monochrome=true,
		plugin={"pretty"},
		//tags={"~@RegressionTest","~@SmokeTest","~@End2End"},
		dryRun=false
		
		)

public class ARunclass {
	

}
