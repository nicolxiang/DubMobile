"use strict"


Accela.module("PermitSDK.Model.Record", {
    RecordType: function () {
        this.id = 0;
        this.display = "";
        this.module = "";
        this.group = "";
        this.subgroup = "";
        this.category = "";
        this.type = "";
        this.security = "";
    },
    Owner: function () {
        this.primary = "";
        this.mailAddress = {
            "city": "",
            "postalCode": "",
            "address1": ""
        };

        this.state = {
            "text": "",
            "value": ""
        };

        this.country = {
            "text": "",
            "value": ""
        };

    },
    Fee: function () {
        this.version = {
            "value": "",
            "text": ""
        };
        this.paymentPeriod = {
            "value": "",
            "text": ""
        };

        this.balanceDue = 0;
        this.schedule = {
            "value": "",
            "text": ""
        };

        this.code = {
            "value": "",
            "text": ""
        };

        this.description = {
            "value": "",
            "text": ""
        };

        this.unit = {
            "value": "",
            "text": ""
        };

        this.recordId = {
            "serviceProviderCode": "",
            "id": "",
            "customId": "",
            "trackingId": 0
        },

        this.account1 = "";
        this.id = 0;
        this.assessDate = "";
        this.quantity = 0;
        this.amount = 0;
        this.allocation = 0;
        this.status = "";
        this.invoiceNumber = "";
    },
    FeeSchedule: function () {
        this.effectDate = "";
        this.schedule = {
            "value": "",
            "text": ""
        };

        this.version = {
            "value": "",
            "text": ""
        };
    },
    FeeItem: function () {
        this.paymentPeriod = {
            "value": "",
            "text": ""
        };

        this.code = {
            "value": "",
            "text": ""
        };

        this.schedule = {
            "value": "",
            "text": ""
        };

        this.version = {
            "value": "",
            "text": ""
        };

        this.displayOrder = 0;
        this.description = {
            "value": "",
            "text": ""
        };

        this.formula = "";
        this.udes = {
            "value": "",
            "text": ""
        };

        this.fee = 0;
        this.feeCalcProc = "";
        this.auditDate = "";
        this.autoInvoiceFlag = "";
        this.autoAssessFlag = "";
        this.priority = "";
        this.acaRequiredFlag = "";
        this.feeAllocationType = "";

    },
    Payment: function () {

        this.transactionId = 0;
        this.cashierID = "";
        this.capID = {
            "id": "",
            "serviceProviderCode": "",
            "trackingId": 0,
            "value": ""
        };

        this.paymentDate = "";
        this.paymentMethod = "";
        this.receiptId = 0;
        this.paymentId = 0;
        this.amount = 0,
        this.amountNotAllocated = 0;
        this.paymentStatus = "";
    },
    RelatedRecord: function () {
        this.id = "";
        this.type = {
            "type": "",
            "id": "",
            "category": "",
            "text": "",
            "group": "",
            "subType": "",
            "readable": false,
            "createable": false,
            "updatable": false,
            "deletable": false,
            "searchable": false,
        };
        this.trackingId = 0;
        this.serviceProveCode = "";
        this.relationship = "";
        this.customId = "";
    }

});
