import * as assert from "power-assert";
import {sub} from "../../src/browser/sub";

it("2 - 3 = -1", () => {
    assert(sub(2, 3) == -1);
});