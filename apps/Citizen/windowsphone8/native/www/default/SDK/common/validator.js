
/* JavaScript content from SDK/common/validator.js in folder common */
﻿/**

**/
"use strict"
Accela.module("Validator", {
    isExists: function (obj, name) {
        return obj.hasOwnProperty(name);
    },
    isNan: function (data) {

        if (data == "" || data == null) {
            return false;
        }

        var reNum = /^[0-9]*$/;
        return reNum.test(data);
    },
    isValidDate: function (date) {
        var reDate = /^20\d{2}-((0[1-9]{1})|(1[0-2]{1}))-((0[1-9]{1})|([1-2]{1}[0-9]{1})|(3[0-1]{1}))/;
        return reDate.test(date);
    },
    isArray: function (data) {
        if (typeof Array.isArray === "function") {
            return Array.isArray(data);
        } else {
            return Object.prototype.toString.call(data) === "[object Array]";
        }
    },
    isObject: function (data) {
        return Object.prototype.toString.call(data) === "[object Object]";
    }
});