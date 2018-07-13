var Client = require('../Common/Client');
var testcases = require('../Common/get_testdata');

var assert = require('chai');

describe('Regression Test', function(){
    var test_cases;

    // Get Test Cases and data from QA Automation framework for execution
    before( function() {
       return testcases.get_testcases().then(function(res){
        test_cases = res;
       });
      
    } );
   
    it('Get User API Test1', function(){
        testcases.get_test_data()
        console.log('passed');
    })

    it('Get User API Test2', function(){
        try{
            var test_data= testcases.get_test_data(test_cases,'Test Pre-Login to Vievu Application by passing correct login and returnUrl');
         
        }
        catch(err)
        {
        }
        finally{
        }
   })

    afterEach( function(){
        console.log("test ends");
    })
});