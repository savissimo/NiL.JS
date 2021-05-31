/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-562.js
 * @description ES5 Attributes - fail to update [[Set]] attribute of accessor property ([[Get]] is a Function, [[Set]] is a Function, [[Enumerable]] is false, [[Configurable]] is false) to different value
 */


function testcase() {
        var obj = {};

        var getFunc = function () {
            return 1001;
        };

        var verifySetFunc = "data";
        var setFunc = function (value) {
            verifySetFunc = value;
        };

        Object.defineProperty(obj, "prop", {
            get: getFunc,
            set: setFunc,
            enumerable: false,
            configurable: false
        });

        var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");

        try {
            Object.defineProperty(obj, "prop", {
                set: undefined
            });

            return false;
        } catch (e) {
            var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");

            return desc1.set === setFunc && desc2.set === setFunc && e instanceof TypeError;
        }
    }
runTestCase(testcase);