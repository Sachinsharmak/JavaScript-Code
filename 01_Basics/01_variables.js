/*
Prefer Not to Use var
because of issue in block Scope and Functional Scope
*/
const accountID = 1234
let accountEmail = "sachin@google.com"
let accountState;
var accountPassword = "1234"
accountCity = "Kolkata"

// accountID = 23  // Not allowed
console.log(accountID);
accountEmail = "ada@gmail.com"
accountPassword = "232"
accountCity = "Jaipur"
console.table([accountEmail,accountID,accountPassword,accountCity,accountState])