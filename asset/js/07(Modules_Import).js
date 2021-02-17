//1. Import the myVar as destructuring
import {
    myVar
} from './07(Modules_Export).js';
//2. Display the Var [remove the string when you have the variable]
simple_import.innerHTML = myVar;


//3. Import the exp1 fun as destructuring
import {
    exp1
} from './07(Modules_Export).js';
//4. Display the exp1 [remove the string when you have the variable]
list_import.innerHTML = exp1();

//5. Import the aliased function as destructuring
import {
    exp2_Alias
} from './07(Modules_Export).js';
//6. Display the exp2_Alias [remove the string when you have the variable]
exp_alias.innerHTML = exp2_Alias();

//7. Import exp3 as alias function as destructuring
import {
    exp3 as exp3_alias
} from './07(Modules_Export).js';
//8. Display the exp3_alias() [remove the string when you have the variable]
imp_alias.innerHTML = exp3_alias();

// 9 import All (*) as imp_all 
import * as imp_all from './07(Modules_Export).js';


//10. Display on the UL
import_all.innerHTML = `

<li class="list-group-item" > ${imp_all.myVar} </li>
<li class="list-group-item" > ${imp_all.exp1()}</li>
<li class="list-group-item" > ${imp_all.exp2_Alias()}</li>
<li class="list-group-item" > ${imp_all.exp3()}</li>

`;