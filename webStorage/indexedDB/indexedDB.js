/*
                                                            || IndexedDB ||
?1. What is IndexedDB ??
    IndexedDB is a way for you to persistently store data inside a user's browser. 
    This is a No-SQL Database
    This allows applications can work both online and offline.
    IndexedDB is useful for applications that store a large amount of data (for example, a catalog of DVDs in a lending library) and applications that don't need persistent internet connectivity to work (for example, mail clients, to-do lists, and notepads).
    ! The maximum browser storage space is dynamic — it is based on your hard drive size. The global limit is calculated as 50% of free disk space. 
    ! IndexedDB is like localStorage, so it's cross-session, meaning restarting browser or system won't affect what is stored in it. However, user can clear it like clearing cookie.
    IndexedDB without StorageManager is just a “best-effort” database that can be erased in situations of low disk space on a device. The browser may delete your database without notifying the user in case it needs to free up space for other website’s data that was used more recently than yours.



?2. Open a indexedDb
    The open request doesn't open the database or start the transaction right away. The call to the open() function returns an IDBOpenDBRequest object with a result (success) or error value that you handle as an event. 
        * var request = window.indexedDB.open("MyTestDatabase", 3);
    Open an indexedDB named MyTestDatabase. The second parameter is the version of the database. This is defaulted to 1

?3. Conditions + onupgradeneeded
    If the database doesn't already exist, it is created by the open operation, then an onupgradeneeded event is triggered and you create the database schema in the handler for this event. 
    If the database does exist but you are specifying an upgraded version number, an onupgradeneeded event is triggered straight away, allowing you to provide an updated schema in its handler. 
    ! " VER_ERR " Error :
                     When the version of the database stored on the disk is greater than the version that you are trying to open. This is an error case that must always be handled by the error handler.
                     Eg: When the current version is 3 and you try to open version 2 then we get "VER_ERR"

?4. Generating Handlers
    * request.onerror = function(event) {
        console.error("Database error: " + event.target.errorCode);
    };
    * request.onsuccess = function(event) {
         db = event.target.result;
    };

?5. Creating a database in the indexedDB
    request.onupgradeneeded = function(event) {
        var db = event.target.result;
        var objectStore = db.createObjectStore("name", { keyPath: "myKey" });
};


Basic pattern
The basic pattern that IndexedDB encourages is the following:

Open a database.
Create an object store in the database.
Start a transaction and make a request to do some database operation, like adding or retrieving data.
Wait for the operation to complete by listening to the right kind of DOM event.
Do something with the results (which can be found on the request object).




Key Path (keyPath)	Key Generator (autoIncrement)	Description
No	No	This object store can hold any kind of value, even primitive values like numbers and strings. You must supply a separate key argument whenever you want to add a new value.
Yes	No	This object store can only hold JavaScript objects. The objects must have a property with the same name as the key path.
No	Yes	This object store can hold any kind of value. The key is generated for you automatically, or you can supply a separate key argument if you want to use a specific key.
Yes	Yes	This object store can only hold JavaScript objects. Usually a key is generated and the value of the generated key is stored in the object in a property with the same name as the key path. However, if such a property already exists, the value of that property is used as key rather than generating a new key.


 */

