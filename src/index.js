'use strict';

// A simple hello world Lambda function
exports.handler = (event, context, callback) => {

    console.log('LOG: Index');
    callback(null, {
        statusCode: 200,
        headers: { "x-custom-header" : "my custom header value" },
        body: "Hello " + event.name
    });
}