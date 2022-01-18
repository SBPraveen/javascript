/*
    *1.
    Abstract operations are the building blocks of type conversions(coercions)
    *2.
    Every time a value conversion happens, it is handled by one or more abstract operation with some rules defined in the spec.
    *3.
    Abstract operations are not like functions that can be called. These may or may not be actual methods inside the javascript engine( consider them as conceptual operations ).
    *4.
    So why learn abstract operations ??
        When we are converting a number to a string the ToString abstract method gives us the mental model of whats happenning behind the scenes when a number gets converted into a string 
    *5.
        These abstract operations are recursive in nature which means that when we use ToString and it returns a value which is not a string then the ToString method is called again
    There are several abstract operations (~20). Some of the important abstract operations are
*/

//|| ToPrimitive
/*
If we have an element of the object type such as an array, function etc. and we need to convert them to a Primitive type, then the ToPrimitive is used to understand the conversion process.
It takes an optional parameter "hint"
The hint can be a number(signif) or a string
 -1:20
*/