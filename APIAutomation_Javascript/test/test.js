var Client = require('../Common/Client');
var testcases = require('../Common/get_testdata');

var assert = require('chai');

describe('Regression Test', function(){
    var test_cases;

    // Get Test Cases and data from QA Automation framework for execution
    before( function() {
       
    } );
   
    it('Get User API Test1', function(){
        var headers = { 'Content-type': ' application/json'};
        var jsonbody = JSON.stringify({"name" : "morpheus", "job": "leader"});
        var options= Client.post_client('https://reqres.in/api/users','POST', headers, jsonbody)
        return Client.send_request(options)
        .then(function(result){
            jsonData = JSON.parse(result.body);
            console.log(jsonData);
        });
       
    })

    it('Get User API Test2', function(){
        var headers = { 'Content-type': ' application/json'};
        var options= Client.get_client('https://reqres.in/api/users/2','GET', headers)
        return Client.send_request(options)
        .then(function(result){
            jsonData = JSON.parse(result.body);
            console.log(jsonData);
        });
   })

    afterEach( function(){
        console.log("test ends");
    })
});