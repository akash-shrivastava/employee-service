const fetch = require("node-fetch");
const buildUrl = require("build-url");
const { config } = require("../../config/app.config");

const baseUrl = config.get("test.url");
//const baseUrl = "http://192.168.99.100:3000/employee-service/";
let acceptType;
let requestMethod;
let requestBody;
let contentType;
let options;
let lastResponse;

exports.setAcceptType = acceptObj => {
    acceptType = acceptObj;
};

exports.setMethod = method => {
    requestMethod = method;
}

exports.setRequestBody = bodyObj => {
    requestBody = bodyObj;
}

exports.setContentType = contentObj => {
    contentType = contentObj;
}

exports.options = () => {
    options = {
        method: requestMethod,
        headers: {"content-type": contentType, accept: acceptType}
    };
}

exports.setOptions = () => {
    options = {
        method: requestMethod,
        body: requestBody,
        headers: {"content-type": contentType, accept: acceptType}
    };
}

exports.call = url => {
    const fetchUrl = buildUrl(baseUrl, {
        path: url
    });
    lastResponse = fetch(fetchUrl, options).then(res=>{
        let bodyPromise;
        const responseContentType = res.headers.get('content-type') || "";
        if(responseContentType.indexOf("application/json") >= 0){
            bodyPromise = res.json();
        }else{
            bodyPromise = res.text();
        }
        return bodyPromise.then(body => ({
            status : res.status,
            headers: res.headers.raw(),
            body
        }));
    });
    return lastResponse;
}

exports.getLastResponse = () => lastResponse;