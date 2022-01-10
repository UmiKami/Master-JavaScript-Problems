var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  var greeting = '';
	
  // your code here
  if(customerData[firstName] == undefined){
    greeting = 'Welcome! Is this your first time?'
    return greeting
  }

  customerData[firstName].visits == 1 ? greeting = "Welcome back, Joe! We're glad you liked us the first time!" : customerData[firstName].visits > 1 ? greeting = "Welcome back, Carol! So glad to see you again!" : undefined
	
  return greeting;
}

var output = greetCustomer('Maxwell');
console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'