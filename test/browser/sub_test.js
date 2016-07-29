"use strict";
/// <reference path="../../typings/index.d.ts" />
var assert = require("power-assert");
var sub_1 = require("../../src/browser/sub");
it("2 + 3 = 5", function () {
    assert(sub_1.add(2, 3) == 5);
});
