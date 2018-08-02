let message;
message = 'abc';

//here we are using assertio to transform variable in string type
let endsWith = (<string>message).endsWith('c');
//these is an alternative method of assertion
let alternativeEndsWith = (message as string).endsWith('c');