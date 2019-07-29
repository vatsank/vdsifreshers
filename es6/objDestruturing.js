let project = {code:"CUB",'name':'e-passbook','manager':'Gokul',"cost":45000};
let manager={"teamLead":"ram"};
let location ={"city":"noida"};
let clone =Object.assign(project,manager,location);

// console.log(clone);

// console.log(project);

let {code,name} =project;

// console.log(code);
// console.log(name);

let {code:projCode,name:projName}=project;
// console.log(projCode);
// console.log(projName);

let employee = {"empName":"suresh","age":45};

let newEmployee ={};

newEmployee["empName"]= employee.empName;

console.log(newEmployee);

let newObj ={ manger:{...employee}}

console.log(newObj);