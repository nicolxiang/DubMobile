
/* JavaScript content from SDK/common/modelConverter.js in folder common */
﻿/**

**/
"use strict"
Accela.module("ModelConverter", {
    _obj: {},
    transfer: function (d) {
        var json = convertToJSON(d);
        for (var p in json) {
            init(p);
            setValue(p, json[p]);
        }
        return convertJSonToString(eval("obj"));
    },
    _setValue: function (key, value) {
        eval("obj." + key.replace('_', '.') + "=" + getFormatString(value) + ";");
    },
    _init: function (node) {
        var props = node.split('_');

        if (props.length <= 1) {
            return;
        }

        var p = props[0];
        var v = "obj." + p;
        if (!eval(v)) {
            eval(v + "=" + "{}");
        }

        init(node.replace(p + "_", ""));
    },
    fromJson: function ($this, json) {
        if (json instanceof Object) {
            for (var i in $this) {
                if (json[i])
                    $this[i] = json[i];
            }
        } else {

        }
    }, toJson: function ($this) {
        var json = {};
        for (var i in $this) {
            if (!($this[i] instanceof Function)) {
                json[i] = $this[i];
            }
        }
        return json;
    },
    _getFormatString: function (data) {
        var result = "";
        if (Validator.isValidDate(data)) {
            result = "\"" + data + "\"";
        }
        else if (Validator.isNan(data)) {
            result = data.toString();
        }
        else if (Validator.isArray(data)) {
            result = "[";
            for (var i in data) {
                result += getFormatString(data[i]) + ",";
            }

            if (result.indexOf(',') > 0) {
                result = result.substring(0, result.lastIndexOf(',')) + "]";
            }
            else {
                result += "]";
            }
        }
        else if (Validator.isObject(data)) {
            result = "{";
            for (var p in data) {

                result += p + ":" + getFormatString(data[p]) + ",";
            }

            if (result.indexOf(',') > 0) {
                result = result.substring(0, result.lastIndexOf(',')) + "}";
            }
            else {
                result += "}";
            }

        }
        else {
            result = "\"" + data + "\"";
        }
        return result;
    }
});