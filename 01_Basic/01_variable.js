/* Prefer Not to use Var Keyword because
in issue with Block Scope and Functional Scope
*/
const accountID = 121213
let accountEmail ="satyamrai550@gmail.com"
var accountPassword ="12345678"
accountCity ="Noida"


//accountID = 3445665  //This is not allowed
console.log(accountID);

accountEmail = "satyamrai553@gamil.com"
accountPassword ="009977733"
accountCity ="Delhi"

console.table([accountEmail,accountPassword,accountCity,accountID]);