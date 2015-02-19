/**
**/
"use strict"
Accela.module("Cookie", {
    set: function (name, value, date) {
        var cookies = name + "=" + encodeURIComponent(value);
        if (date)
            cookies += "; expires=" + date.toGMTString();
        document.cookie = cookies;
    },
    get: function (name) {
        var sRE = "(?:;)?" + name + "=([^;]*);?";
        var oRE = new RegExp(sRE);
        if (oRE.test(document.cookie)) {
            return decodeURIComponent(RegExp["$1"]);
        }
        else {
            return null;
        }
    },
    remove: function (name) {
        this.set(name, "", new Date(0));
    }
});