const { Given, When, Then } = require("cucumber");
const assert = require("assert");
const request = require("./requests");

Given("url {string} available", url => {
    this.endpoint = url;
});

Given("request body is {string}", body => {
    this.requestBody = body;
});

Given("acceptable response is of type {string}", accept => {
    this.acceptType = accept;
});

Given("content type given as {string}", content => {
    this.contentType = content;
});

When("method is {string}", method => {
    this.method = method;
    request.setMethod(this.method);
    request.setAcceptType(this.acceptType);
    request.setContentType(this.contentType);
    switch(method) {
        case 'POST':
            request.setOptions();
        case 'DELETE':
            request.options();
        default:
            request.options();
    }
    return request.call(this.endpoint);
});

Then('response status is {int}', async int => {
    const body = await request.getLastResponse();
    assert.strictEqual(body.status, int);
})
