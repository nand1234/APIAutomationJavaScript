var request = require('request');

function get_client(url, method, headers){
    var options = {
        uri: url,
        method:method,
        headers:headers
    }
    return options;
}

function post_client(url, method, headers, body){
    var options = {
        uri: url,
        method:method,
        headers:headers,
        body:body
    }

    return options;
}

function get_client_withquery(url, method, headers, qs){
    var options = {
        uri: url,
        method:method,
        headers:headers,
        qs:qs
    }
    console.log(options);

    return options;
}

function send_request(options, responseCode){
    try
    {
     return new Promise(function(resolve, reject){
        request(options, function(err,res) {
            if (res != null)
            {
                resolve(res);
            }
            else
            {
                reject(err);
            }
        });
     })
    }
    catch(err)
    {
        throw err;
    }
}

module.exports = {get_client, send_request, get_client_withquery, post_client};

