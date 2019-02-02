package MyRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;

import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		features= "E:\\CatProject\\MyFirstCucumberProject\\src\\main\\java\\login.feature",
		glue={"stepDefinitions"},
		format={"pretty","html:test-outout","json:json_output/cucumber.json","junit:xml_output/cucumber1.xml"},
		monochrome=true,//It will display the console output in a proper format
		strict=true,//It will check if any step  is not define in stepdefinition file
		dryRun=false//to check the mapping is proper between feature file and step definition file
		)
public class RunnerClass {


}
