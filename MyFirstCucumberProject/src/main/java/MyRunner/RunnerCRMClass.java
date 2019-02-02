package MyRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="E:\\CatProject\\MyFirstCucumberProject\\src\\main\\java\\stepDefinitions\\CRMWebsit.feature",
		glue={"stepDefinitions"},
		monochrome=true,
		format={"pretty", "html:output/CRMReport.html", "json:json/CrmReport.json", "junit:junit/CrmReport.xml"},
		strict=true,
		dryRun=false
		)
public class RunnerCRMClass {

}
