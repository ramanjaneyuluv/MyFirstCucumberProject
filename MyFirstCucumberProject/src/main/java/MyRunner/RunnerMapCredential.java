package MyRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="E:\\CatProject\\MyFirstCucumberProject\\src\\main\\java\\stepDefinitionsDeal\\MapCredential.feature",
		glue={"stepDefinitionsDeal"},
	    format={"pretty", "html:HTML-Output/deal.html"},
		monochrome= true,
		strict=true,
		dryRun=false
	    )
public class RunnerMapCredential {

}
