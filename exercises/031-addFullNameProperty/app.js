function addFullNameProperty(obj) {
  // tu codigo aqui
  obj.fullName = obj.firstName + ' ' + obj.lastName
  return obj
}

var person = {
  firstName: 'Jade',
  lastName: 'Smith'
};

addFullNameProperty(person);
console.log(person.fullName); 