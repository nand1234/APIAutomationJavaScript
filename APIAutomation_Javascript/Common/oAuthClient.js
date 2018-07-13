var AuthenticationContext = require('adal-node').AuthenticationContext;
var config = require('../configuration')

function get_token()
{
    try
    {
        return new Promise(function(resolve, reject){
            var authorityHostUrl = config.authorityHostUrl;
            var tenant = config.tenant; // AAD Tenant name.
            var authorityUrl = authorityHostUrl + '/' + tenant;
            var applicationId = config.applicationId; // Application Id of app registered under AAD.
            var clientSecret = config.clientSecret; // Secret generated for app. Read this environment variable.
            var resource = config.resource; // URI that identifies the resource for which the token is valid.
     
            var context = new AuthenticationContext(authorityUrl);
     
            context.acquireTokenWithClientCredentials(resource, applicationId, clientSecret, function(err, tokenResponse) {
                if (err) {
                    reject(err);
                    console.log('well that didn\'t work: ' + err.stack);
                } else {
                    resolve('Bearer '+tokenResponse.accessToken);
                }
            });
        });

    }
    catch(err)
    {
        throw err;
    }  
}

module.exports = {get_token};