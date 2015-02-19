/**

**/
"use strict"
Accela.module("ApiRequest", {
    createBatchRequest: function () {
        this.send = function (data, callBack, failCallBack) {
            try {
                var xmlhttp = Accela.XHRFactory.createXHRObject();
                var method = "POST";
                var url = "http://192.168.0.79:82/proxy.aspx";

                var setHeaderAndSend = function (async) {
                    xmlhttp.open(method, url, async);
                    xmlhttp.setRequestHeader("Content-Type", "application/json");
                    xmlhttp.setRequestHeader("Accept", "application/json");
                    xmlhttp.setRequestHeader("Accept-Encoding", "gzip, deflate");
                    xmlhttp.setRequestHeader("AccessKey", "D0A2E2E5BAC04C3683C22CE411E5926F");
                    xmlhttp.setRequestHeader("BizUR", "http://192.168.0.119:23080/apis/v4/settings/conditions/types?token=97524293985464544296");
                    data = data ? (typeof (data) == "string" ? data : JSON.stringify(data)) : null;
                    xmlhttp.send(data);
                }
                var getResponse = function () {
                    switch (xmlhttp.status) {
                        case 200:
                            var json = Accela.XHRFactory.filterJSON(xmlhttp.responseText);
                            if (callBack instanceof Function)
                                callBack(json.result);
                            break;
                        case 500:
                            if (failCallBack instanceof Function)
                                failCallBack("Server is not available.");
                            break;
                        case 401:
                            Accela.Auth.logout();
                            Accela._authFialFunc();
                            break;
                        default:
                            if (failCallBack instanceof Function)
                                failCallBack("Unable to find the page.");
                            break;
                    }
                }

                xmlhttp.onreadystatechange = function () {

                    if (xmlhttp.readyState == 4) {

                        if (xmlhttp.status == 0) {
                            setHeaderAndSend(false);
                            getResponse();
                        }
                        else {
                            getResponse();
                        }

                    }
                };

                setHeaderAndSend(true);
            }
            catch (e) {
                throw new Error('Send xhr request failed:' + e.message);
            }
        }
        return this;
    },
    createRequest: function (key, params) {
        var APIobj = new Accela.Api.getApi(key);
        this.HttpMethod = APIobj.method;
        this.Scope = APIobj.scope;
        this.Version = APIobj.version;
        this.URL = APIobj.getUrl(params);
        this.send = function (data, callback, failcallback) {
            try {
                var xmlhttp = Accela.XHRFactory.createXHRObject();
                var method = this.HttpMethod;
                var scope = this.Scope;
                var url = this.URL;
                var version = this.Version;
                var setHeaderAndSend = function (async) {
                    data = data ? (typeof (data) == "string" ? data : JSON.stringify(data)) : null;

                

                    xmlhttp.open(method, "http://192.168.0.79:82/proxy.aspx", async);

                   xmlhttp.setRequestHeader("Content-Type", "application/json");
                    xmlhttp.setRequestHeader("Accept", "application/json");
                    xmlhttp.setRequestHeader("AccessKey", "D0A2E2E5BAC04C3683C22CE411E5926F");
                    xmlhttp.setRequestHeader("BizUR", "http://192.168.0.119:23080/apis/v4/settings/conditions/types?token=97524293985464544296");
                    xmlhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
                    
                    xmlhttp.send(data);
                }

                var getResponse = function () {
                    switch (xmlhttp.status) {
                        case 200:
                            var json = Accela.XHRFactory.filterJSON(xmlhttp.responseText);
                            if (callback instanceof Function) {
                                if (json.result) {
                                    callback(json.result, json.page ? json.page : undefined);
                                }
                                else if (json.conditions) {
                                    callback(json);
                                } else {
                                    if (json.message && json.code) {
                                        failcallback(json);
                                    }
                                    else {
                                        callback(undefined);
                                    }
                                }
                            }
                            break;
                        case 500:
                            if (failcallback instanceof Function)
                                failcallback(Accela.XHRFactory.filterJSON(xmlhttp.responseText));
                            break;
                        case 401:
                            Accela.Auth.logout();
                            Accela._authFialFunc();
                            break;
                        default:
                            if (failcallback instanceof Function)
                                failcallback(Accela.XHRFactory.filterJSON(xmlhttp.responseText));
                            break;
                    }
                }

                xmlhttp.onreadystatechange = function () {

                    if (xmlhttp.readyState == 4) {

                        getResponse();

                    }
                };

                setHeaderAndSend(true);
            }
            catch (e) {
                throw new Error('Send xhr request failed:' + e.message);
            }
        }
        return this;
    }
});