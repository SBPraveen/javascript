//|| ToPrimitive
/*
If we have an element of the object type such as an array, function etc. and we need to convert them to a Primitive type, then the ToPrimitive is used to understand the conversion process.
It takes an optional parameter "hint"
The hint can be a number or a string. Eg => If we do a numeric operation and we call toPrimitive then the hint would be a number. The hint doesnt guarantee a number(the hint is a way to tell JS what type do we want the output to be )
Any non primitive(objects) will have two methods :
    valueOf()
    toString()
if the hint is a number => then the valueOf method is called. If the output is a primitive then it will return else the toString method is called. If the op of this is also not a primitive then we will get an error 
if the hint is a string => toString method is called first and then valueOf method is called.
*/