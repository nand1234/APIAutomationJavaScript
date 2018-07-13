var auth = require('../Common/oAuthClient');
var Client = require('../Common/Client');
var config = require('../configuration')

var jsonData;

function get_testcases()
{
    try
    {
        return new Promise(function(resolve, reject){
            return auth.get_token().then(function(res){
                token = res;
                var headers = { 'Content-type': ' application/json', 'Authorization': token};
                var options= Client.get_client(config.AutomationDataURL+'<API Endpoint>','GET', headers)
                return Client.send_request(options)
                .then(function(result){
                    jsonData = JSON.parse(result.body);
                    resolve(jsonData);
                });
            });
        });
    }
    catch(err)
    {
        throw err;
    }
}

function get_test_data(test_cases, test_case)
{
    var testdata = [];
    try{
        for (var i in test_cases) {
            if (test_cases[i].Description == test_case)
            {
                testdata = test_cases[i];
                //console.log(testdata);
                break;
            }
        }

        return testdata;
    }
    catch(err)
    {
        throw err;
    }  
}


module.exports = {get_test_data,get_testcases};