
/* JavaScript content from SDK/model/baseModel.js in folder common */
﻿Accela.module("WebSDK.Model", {
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
    }
})