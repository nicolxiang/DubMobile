
/* JavaScript content from SDK/common/xhr.js in folder common */
﻿/**
Class:XHRFactory
    Function: createXHRObject  public
              filterJSON       public
**/
"use strict"
Accela.module("XHRFactory", {
    createXHRObject: function () {
        try {
            return new XMLHttpRequest();
        } catch (e) {
            try {
                return new ActiveXObject("Msxml2.XMLHTTP");
            }
            catch (e) {
                try {
                    return new ActiveXObject("Microsoft.XMLHTTP");
                } catch (e) {
                    throw new Error('No XHR object found in this environment.');
                }
            }
        }
    },
    filterJSON: function (s, filter) {
        var j;

        var walk = function (k, v) {
            if (v && typeof v === 'object') {
                for (var i in v) {
                    if (v.hasOwnProperty(i)) {
                        v[i] = walk(i, v[i]);
                    }
                }
            }
            return filter(k, v);
        }
        if (/^("(\\.|[^"\\\n\r])*?"|[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t])+?$/.test(s)) {
            try {
                j = JSON.parse(s);
            }
            catch (e) {
                throw new SyntaxError("parseJSON");
            }
        }
        else {
            throw new SyntaxError("parseJSON");
        }

        if (typeof filter === 'function') {
            j = walk('', j);
        }

        return j;
    }
});