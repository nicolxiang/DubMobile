
/* JavaScript content from SDK/core/global.js in folder common */
﻿/**

We need to define our namespace,to avoid conflicts in other environments
Accela:
    module:
    init:  opts:
            appId: string  required
            appSecret: string required
**/
"use strict"
if (!window.Accela) {
    window.Accela = {
        _appId: null,
        _appSecret: null,
        _authFialFunc: null,
        _appVersion: null,
        _envName: null,
        _agency: null,
        _userName: null,
        _browser: null,
        _browserVersion: null,
        _constants: {
            OAUTH_AUTHORIZE_URL: "https://apps-auth.dev.accela.com/oauth2/authorize",
            OAUTH_TOKEN_URL: "https://apps-apis.dev.accela.com/oauth2/token",
            //OAUTH_AUTHORIZE_URL: "https://apps-auth.cloudapp.net/oauth2/authorize",
            //OAUTH_TOKEN_URL: "https://apps-auth.cloudapp.net/oauth2/token",
            //ACCELA_SCOPE: "cashier get_agencies get_account_profile get_linked_accounts get_civicid_profile get_ref_document_types inspections get_record_owners update_inspection_condition get_record_contacts conditions get_record get_ref_standard_comment_groups get_ref_standard_comments get_record download_document update_inspection_checklist_items search_records delete_inspection_documents get_ref_record_types batch_request records addresses parcels owners inspectorapp_get_record_conditions get_ref_inspection_types get_record_addresses global_search documents professionals contacts get_settings_record_types get_settings_record_statuses create_partial_record get_settings_departments get_settings_department_staffs get_record_customforms settings get_record_user_activities_summary workflows",
            ACCELA_SCOPE: "cashier agencies civicid get_ref_document_types inspections conditions download_document get_ref_record_types batch_request records addresses parcels owners inspectorapp_get_record_conditions get_ref_inspection_types global_search documents professionals contacts settings get_record_user_activities_summary workflows payments void_payment get_payment_history",
            API_HOST: "hite-yang.missionsky.com:5443/portlets/apis",
            API_URL_FORMAT: "https://{host}/{version}",
            DEFAULT_OFFSET: "0",
            DEFAULT_LIMIT: "25",
            LOG_URL: "http://apps-adm.cloudapp.net/apis/v4/logs",
            LOG_ACCESS_KEY: "qkU4zb64gQcin0CZhw/I1f0AtmNjBvE20h2cHvZgnftxiOvMcr8arkzbKXNqQ7XiZtCGiUsM+bbbb0iaG4zF0g==",
        },
        module: function (target, source, overwrite) {
            // a string means a dot separated object that gets appended to, or created           
            return Accela.copy(
              typeof target == 'string' ? Accela.create(target) : target,
              source,
              overwrite
            );
        },
        copy: function (target, source, overwrite, transform) {
            for (var key in source) {
                if (overwrite || typeof target[key] === 'undefined') {
                    target[key] = transform ? transform(source[key]) : source[key];
                }
            }
            return target;
        },
        create: function (name, value) {
            var node = window.Accela, // ACCELA as root namespace
            nameParts = name ? name.split('.') : [],
            c = nameParts.length;
            for (var i = 0; i < c; i++) {
                var part = nameParts[i];
                var nso = node[part];
                if (!nso) {
                    nso = (value && i + 1 == c) ? value : {};
                    node[part] = nso;
                }
                node = nso;
            }
            return node;
        },
        /*
        opts:{
            appId:string  required
            appSecret:string  required
            authFailFunction:function  required
        }
        */
        init: function (opts) {
            this._appId = opts.appId;
            this._appSecret = opts.appSecret;
            this._authFialFunc = opts.authFailFunction;
        },
        clone: function (obj) {
            // Handle the 3 simple types, and null or undefined
            if (null == obj || "object" != typeof obj) return obj;

            // Handle Date
            if (obj instanceof Date) {
                var copy = new Date();
                copy.setTime(obj.getTime());
                return copy;
            }

            // Handle Array
            if (obj instanceof Array) {
                var copy = [];
                for (var i = 0, len = obj.length; i < len; i++) {
                    copy[i] = this.clone(obj[i]);
                }
                return copy;
            }

            // Handle Object
            if (obj instanceof Object) {
                var copy = {};
                for (var attr in obj) {
                    if (obj.hasOwnProperty(attr)) copy[attr] = this.clone(obj[attr]);
                }
                return copy;
            }

            throw new Error("Unable to copy obj! Its type isn't supported.");
        },
        /*
        opts:{
            appId:string  required
            appVersion:string required
            envName:string required
            agency:string required
            userName:string required
        }
        */
        initLog: function (opts) {
            this._appId = opts.appId;
            this._appVersion = opts.appVersion;
            this._envName = opts.envName;
            this._agency = opts.agency;
            this._userName = opts.userName;
            this._matchBrowser();
        },
        _matchBrowser: function () {
            var ua = navigator.userAgent, tem,
               M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*([\d\.]+)/i) || [];
            if (/trident/i.test(M[1])) {
                tem = /\brv[ :]+(\d+(\.\d+)?)/g.exec(ua) || [];
                return 'IE ' + (tem[1] || '');
            }
            M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
            if ((tem = ua.match(/version\/([\.\d]+)/i)) != null) M[2] = tem[1];

            this._browser = M[0];
            this._browserVersion = M[1];
        }
    };
}