/*
||Strict Equality Comparison Algorithm
    1. If Type(x) is different from Type(y), return false.
    2. If Type(x) is Undefined, return true.
    3. If Type(x) is Null, return true.
    4. If Type(x) is Number, then
        a.If x is NaN, return false.
        b. If y is NaN, return false.
        c. If x is the same Number value as y, return true.
        d. If x is +0 and y is −0, return true.
        e. If x is −0 and y is +0, return true.
        f. Return false.
    5. If Type(x) is String, then return true if x and y are exactly the same sequence of characters (same length and same characters in corresponding positions); otherwise, return false.
    6. If Type(x) is Boolean, return true if x and y are both true or both false; otherwise, return false.
    7. Return true if x and y refer to the same object. Otherwise, return false.
*/