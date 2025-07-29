const accountId= 23455
let accountEmail="dipali@gmail.com"
/* prefer not to use Var 
because  of issue in block scope and function scope ,{} it is a Scope*/ 
var accountPassword="76767"
accountCity="jaipur"
//accountId=56
console.log(accountEmail);
let accountState;


//change of accountId are not allowed because its constant
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])