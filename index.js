// Write your solution in this file!
const employee ={ 
    name : "osama",
    streetAddress: 'salam street',
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee};
    newEmployee.name = "sam"; 
    newEmployee[key]=value ; 
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.name = "Sam";
    employee[key] = value;
    return employee;
  }
   
  function deleteFromEmployeeByKey (employee,key){
    const newEmployee = {...employee};
    delete newEmployee[key]
    return newEmployee ; 

  }
 
  function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee ; 

  }
